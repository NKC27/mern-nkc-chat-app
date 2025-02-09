import jwt from 'jsonwebtoken';
//Generate a token
export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7days',
  });
  // Send it to the user in the form of a cookie (http cookie as its a lot more secure)
  res.cookie('jwt', token, {
    maxAge: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //7days
    httpOnly: true,
    // CSRF Attacks cross-site request forgery attacks
    sameSite: 'strict',
    // Ensures the cookie is only sent over HTTPS
    secure: process.env.NODE_ENV !== 'development', // Ensures the cookie is only sent over HTTPS
  });
  return token;
};
