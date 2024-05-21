import { json, ActionFunction } from '@remix-run/node';
import { UpdateUser } from '~/updateUser.server';

export const action: ActionFunction = async ({ request }) => {
    if (request.method !== 'PATCH') {
        throw new Error('Method Not Allowed');
    }

    try {
        const body = await request.json();
        await UpdateUser(body);
        return json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Error updating user:', error);
        return json({ error: 'Failed to update user' }, { status: 500 });
    }
};
