import { NextApiRequest, NextApiResponse } from 'next';
import {
  createUserProfile,
  getUserByValidSessionToken,
} from '../../util/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // check the method to be POST
  if (req.method === 'POST') {
    const user = await getUserByValidSessionToken(req.cookies.sessionToken);

    if (!user) {
      res.status(401).json({ errors: [{ message: 'User not found' }] });
      return;
    }

    console.log(req.body);
    const userProfile = await createUserProfile(
      user.id,
      req.body.gender,
      req.body.interest,
      req.body.firstName,
      req.body.lastName,
      req.body.dateOfBirth,
      req.body.location,
      req.body.email,
      req.body.description,
    );
  }
}
