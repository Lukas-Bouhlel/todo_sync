import {
  createSchema,
  table,
  string,
  boolean,
  number,
} from '@rocicorp/zero';

export const todo = table('todo')
  .columns({
    id: string(),
    text: string(),
    completed: boolean(),
    created_at: number(),
  })
  .primaryKey('id');

export const schema = createSchema(1, {
  tables: [todo],
});

export type Schema = typeof schema;
