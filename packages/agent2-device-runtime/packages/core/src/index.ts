export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };
export type JsonObject = { [key: string]: JsonValue };

export type Connectivity = 'offline' | 'online' | 'degraded';
export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';
export type AuthorityState = 'allowed' | 'denied' | 'approval_required';

export interface ActorContext {
  readonly companyId: string;
  readonly actorId: string;
  readonly userId: string;
  readonly deviceId: string;
  readonly roleIds: readonly string[];
  readonly permissions: ReadonlySet<string>;
  readonly approvalLimitMinor?: number;
  readonly offlineLeaseExpiresAt?: string;
  readonly deviceRevoked?: boolean;
}

export interface RuntimeContext {
  readonly actor: ActorContext;
  readonly correlationId: string;
  readonly idempotencyKey: string;
  readonly connectivity: Connectivity;
  readonly activeScreen?: string;
  readonly enabledDomains?: ReadonlySet<string>;
  readonly activeEntity?: { readonly type: string; readonly id: string };
  readonly now: string;
}

export interface ExplainabilityTrace {
  readonly route: readonly string[];
  readonly facts: readonly string[];
  readonly abstained: boolean;
}

export function assertNever(value: never, message = 'Unexpected value'): never {
  throw new Error(`${message}: ${String(value)}`);
}

export function stableStringify(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  const object = value as Record<string, unknown>;
  return `{${Object.keys(object).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(object[key])}`).join(',')}}`;
}

export function createId(prefix = 'tz'): string {
  const cryptoApi = globalThis.crypto;
  if (cryptoApi?.randomUUID) return `${prefix}_${cryptoApi.randomUUID()}`;
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}
