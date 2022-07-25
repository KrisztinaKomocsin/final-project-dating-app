import { deletedUserById } from '../../../util/database';

export default async function handler(req, res) {
  const userId = Number(req.query.userId);
  console.log('userId', userId);
  if (!userId) {
    return res.status(400).json({ error: 'userId must be a valid id' });
  }
  if (req.method === 'DELETE') {
    const deletedUser = await deletedUserById(userId);

    return res.status(200).json(deletedUser);
  }

  // If we are using any method that is not allowed
  res.status(405).json({
    error: 'Method not allowed',
  });
}
