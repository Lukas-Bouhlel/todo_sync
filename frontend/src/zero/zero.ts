import { Zero } from '@rocicorp/zero';
import { schema, type Schema } from './schema';

export const z = new Zero<Schema>({
  userID: 'demo_user',
  server: 'http://localhost:4848',
  schema,
  kvStore: 'idb',
});

console.log('Zero initialized', z);
