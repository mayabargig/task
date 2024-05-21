import { json, ActionFunction } from '@remix-run/node';
import { RegisterUser } from '~/registerUser.server';

export const action: ActionFunction = async ({ request }) => {
    if (request.method !== 'POST') {
        throw new Error('Method Not Allowed');
      }
  const formData = await request.json();
  await RegisterUser(formData);
  return json({ success: true }, {status:200});
};
