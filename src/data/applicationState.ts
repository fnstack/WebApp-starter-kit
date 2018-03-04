import { RouteComponentProps } from 'react-router-dom';
import { User as UserModel, UserProfileModel } from '../users';
import { User } from 'oidc-client';

// tslint:disable-next-line:no-empty-interface
interface ApplicationState extends RouteComponentProps<any> {
  // Define different state of the store

  users: UserModel[];
  userForm: UserModel;
  profile: UserProfileModel;

  form: {};
  routing: {};
  oidc: {
    user: User;
    isLoadingUser: boolean;
  };
}

export { ApplicationState };
