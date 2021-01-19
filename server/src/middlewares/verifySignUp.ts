import db from '../models';

const User = db.user;
const Roles = db.ROLES;

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({ username: req.body.username }).exec((error, user) => {
    if (error) {
      res.status(500).send({ message: error });
      return;
    }

    if (user) {
      res.status(400).send({ message: 'UsernameIsAlreadyInUse' });
      return;
    }

    // Email
    User.findOne({ email: req.body.email }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: 'EmailIsAlreadyInUse' });
        return;
      }

      next();
    });
  });
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!Roles.includes(req.body.roles[i])) {
        res.status(400).send({
          message: 'RoleNotExist'
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

export default verifySignUp;
