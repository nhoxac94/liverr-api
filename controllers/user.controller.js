import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const deleteUser = async (req, res) => {
  // const token = req.cookie.accessToken;
  console.log(req.cookies?.accessToken);
  res.send('ok');
  // if (!token) return res.status(401).send('You are not authentication');
  // jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
  //   res.send(payload);
  // });
  // await User.findByIdAndDelete(req.params.id);
};
