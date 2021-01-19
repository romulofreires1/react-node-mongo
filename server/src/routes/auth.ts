import middlewares from '../middlewares';
import AuthController from '../controllers/AuthController';

const routes = app => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post(
    '/auth/signup',
    [
      middlewares.verifySignUp.checkDuplicateUsernameOrEmail,
      middlewares.verifySignUp.checkRolesExisted
    ],
    AuthController.signup
  );

  app.post('/auth/signin', AuthController.signin);
};

export default routes;
