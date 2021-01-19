import mongoose from 'mongoose';
import Role from './Role';
import User from './User';
import Indicator from './Indicator';

mongoose.Promise = global.Promise;

const db: any = {};

db.mongoose = mongoose;

db.user = User;
db.role = Role;
db.indicator = Indicator;

db.ROLES = ['user', 'admin', 'moderator'];

export default db;
