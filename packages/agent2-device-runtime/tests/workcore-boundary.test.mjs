import test from 'node:test';
import assert from 'node:assert/strict';
import { DeviceWorkCoreClient, MissingAgent1ContractClient } from '../dist/packages/workcore-device/src/index.js';

const context = {
  actor: { companyId: 'c1', actorId: 'a1', userId: 'u1', deviceId: 'd1', roleIds: ['cleaner'], permissions: new Set(['workcore.work_order.complete']) },
  correlationId: 'corr', idempotencyKey: 'idem', connectivity: 'offline', now: new Date().toISOString(),
};

test('device WorkCore delegates to Agent 1 action contract and never fabricates success', async () => {
  let called = 0;
  const client = new DeviceWorkCoreClient({
    async executeAction(request) {
      called += 1;
      assert.equal(request.action, 'workcore.work_order.complete');
      return { status: 'completed', correlationId: request.context.correlationId, data: { id: 'j1' } };
    },
    async executeRead() { throw new Error('not used'); },
    async listCapabilities() { return []; },
  });
  const result = await client.invoke(context, 'workcore.work_order.complete', { id: 'j1' });
  assert.equal(called, 1);
  assert.equal(result.status, 'completed');
});

test('missing Agent 1 contract returns explicit unavailable', async () => {
  const result = await new MissingAgent1ContractClient().invoke(context, 'workcore.quote.draft', {});
  assert.equal(result.status, 'unavailable');
  assert.match(result.errors[0].code, /contract_missing/);
});
