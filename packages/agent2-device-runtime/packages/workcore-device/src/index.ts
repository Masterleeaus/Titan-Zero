import type { JsonObject, RuntimeContext } from '../../core/src/index.js';

export type CapabilityResultStatus =
  | 'completed'
  | 'validation_failed'
  | 'permission_denied'
  | 'approval_required'
  | 'online_required'
  | 'deferred'
  | 'conflict'
  | 'unavailable';

export interface CapabilityResult<T extends JsonObject = JsonObject> {
  readonly status: CapabilityResultStatus;
  readonly data?: T;
  readonly errors?: readonly { readonly field?: string; readonly code: string; readonly message: string }[];
  readonly correlationId: string;
  readonly auditId?: string;
  readonly eventIds?: readonly string[];
  readonly replayed?: boolean;
  readonly deferredOperationId?: string;
  readonly conflictId?: string;
}

export interface WorkCoreActionRequest {
  readonly action: string;
  readonly input: JsonObject;
  readonly context: RuntimeContext;
  readonly confirmationId?: string;
}

export interface WorkCoreReadRequest {
  readonly read: string;
  readonly input: JsonObject;
  readonly context: RuntimeContext;
}

export interface Agent1WorkCoreContracts {
  executeAction(request: WorkCoreActionRequest): Promise<CapabilityResult>;
  executeRead(request: WorkCoreReadRequest): Promise<CapabilityResult>;
  listCapabilities(context: RuntimeContext): Promise<readonly CapabilityDescriptor[]>;
}

export interface CapabilityDescriptor {
  readonly key: string;
  readonly kind: 'action' | 'read';
  readonly permission: string;
  readonly risk: 'low' | 'medium' | 'high' | 'critical';
  readonly confirmationRequired: boolean;
  readonly offlineEligible: boolean;
  readonly inputSchemaVersion: string;
}

export interface WorkCoreCapabilityInvoker {
  invoke(context: RuntimeContext, capability: string, input: JsonObject, confirmationId?: string): Promise<CapabilityResult>;
  read(context: RuntimeContext, read: string, input: JsonObject): Promise<CapabilityResult>;
  available(context: RuntimeContext): Promise<ReadonlyMap<string, CapabilityDescriptor>>;
}

export class DeviceWorkCoreClient implements WorkCoreCapabilityInvoker {
  public constructor(private readonly contracts: Agent1WorkCoreContracts) {}

  public async invoke(context: RuntimeContext, capability: string, input: JsonObject, confirmationId?: string): Promise<CapabilityResult> {
    const request: WorkCoreActionRequest = confirmationId === undefined
      ? { action: capability, input, context }
      : { action: capability, input, context, confirmationId };
    return this.contracts.executeAction(request);
  }

  public read(context: RuntimeContext, read: string, input: JsonObject): Promise<CapabilityResult> {
    return this.contracts.executeRead({ read, input, context });
  }

  public async available(context: RuntimeContext): Promise<ReadonlyMap<string, CapabilityDescriptor>> {
    const capabilities = await this.contracts.listCapabilities(context);
    return new Map(capabilities.map((capability) => [capability.key, capability]));
  }
}

export class MissingAgent1ContractClient implements WorkCoreCapabilityInvoker {
  public async invoke(context: RuntimeContext, capability: string): Promise<CapabilityResult> {
    return {
      status: 'unavailable',
      correlationId: context.correlationId,
      errors: [{ code: 'agent1_contract_missing', message: `Agent 1 action contract unavailable for ${capability}` }],
    };
  }

  public async read(context: RuntimeContext, read: string): Promise<CapabilityResult> {
    return {
      status: 'unavailable',
      correlationId: context.correlationId,
      errors: [{ code: 'agent1_contract_missing', message: `Agent 1 read contract unavailable for ${read}` }],
    };
  }

  public async available(): Promise<ReadonlyMap<string, CapabilityDescriptor>> {
    return new Map();
  }
}
