import { json, ActionFunction } from '@remix-run/node';
import { AddUser } from '~/createUser.server';

export const action: ActionFunction = async ({ request }) => {
    if (request.method !== 'POST') {
        throw new Error('Method Not Allowed');
      }
  const formData = await request.json();
  await AddUser(formData);
  return json({ success: true }, {status:200});
};
