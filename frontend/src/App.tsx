import { useQuery, useZero } from '@rocicorp/zero/react';

export default function App() {
  const zero = useZero();

  const [todos] = useQuery(z =>
    z.query.todo.orderBy('created_at', 'desc')
  );

  if (!todos) return <div>Chargement...</div>;

  return (
    <ul>
      {todos.map(t => (
        <li key={t.id}>{t.text}</li>
      ))}
    </ul>
  );
}
