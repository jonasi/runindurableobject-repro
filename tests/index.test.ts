import { describe, it, expect, beforeEach } from 'vitest';
import { runInDurableObject, env } from 'cloudflare:test';

describe('issue', () => {
	it('should work', async () => {
		const id = env.MY_DURABLE_OBJECT.idFromName('good_name');
		const durableObject = env.MY_DURABLE_OBJECT.get(id);

		await runInDurableObject(durableObject, instance => {
			expect(instance.id).toBe(id.toString())
			expect(instance.name).toBe('good_name')
		});
	})
});
