import { ModelBase } from './../shared';

/**
 * The user model
 *
 * @interface User
 * @extends {ModelBase}
 */
interface User extends ModelBase {
  userName?: string;
  email: string;
  description?: string;
  name?: string;
}

/**
 * The UserProfileModel for redux-forms
 *
 * @interface UserProfileModel
 * @extends {ModelBase}
 */
interface UserProfileModel extends ModelBase {
  photo: string;
}

export { User, UserProfileModel };
