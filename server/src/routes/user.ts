import middlewares from '../middlewares';
import UserController from '../controllers/UserController';

const routes = app => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get('/test/all', UserController.allAccess);

  app.get(
    '/test/user',
    [middlewares.authJwt.verifyToken],
    UserController.userBoard
  );

  app.get(
    '/test/mod',
    [middlewares.authJwt.verifyToken, middlewares.authJwt.isModerator],
    UserController.moderatorBoard
  );

  app.get(
    '/test/admin',
    [middlewares.authJwt.verifyToken, middlewares.authJwt.isAdmin],
    UserController.adminBoard
  );
};

export default routes;
