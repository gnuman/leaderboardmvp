import User from '../../models/user/user';
import { createAuth } from '../auth/auth';

export const createUser = (email, password, profileName, profilePic) =>
  new Promise((resolve, reject) => {
    createAuth(email, password)
      .then((authId) =>
        User.create({ authId, profileName, profilePic })
          .then((user) => resolve(user.dataValues))
          .catch((error) => reject(error)),
      )
      .catch((error) => reject(error));
  });

