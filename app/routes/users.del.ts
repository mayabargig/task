import { ActionFunction, json } from '@remix-run/node';
import { DeleteUser } from '~/deleteUser.server';

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'DELETE') {
    throw new Error('Method Not Allowed');
  }
  const { id } = await request.json();
  await DeleteUser(id);
  return json({ success: true }, { status: 200 });
};
