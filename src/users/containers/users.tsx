import * as React from 'react';
import { connect } from 'react-redux';
import { User as UserModel, userActions } from '../../users';
import { Table, Card, CardHeader, CardBlock, Button } from 'reactstrap';
import { ApplicationState } from '../../data';
import { Dispatch } from 'redux';
import { ActionDispatcher } from '../../shared';
import Helmet from 'react-helmet';
import { User } from 'oidc-client';

/**
 * The type of Users component props
 *
 * @export
 * @interface UserProps
 */
export interface UserProps {
  loadUsersAction: (model: { accessToken: string }) => any;
  users: UserModel[];
  oidc: { user: User; isLoadingUser: boolean };
}

/**
 * The Users component
 *
 * @class Users
 * @extends {React.PureComponent<UserProps>}
 */
class Users extends React.PureComponent<UserProps> {
  public componentDidMount() {
    const { loadUsersAction, oidc } = this.props;

    loadUsersAction({ accessToken: oidc.user ? oidc.user.access_token : '' });
  }

  public render() {
    const { users } = this.props;

    let userRows: JSX.Element[];

    if (Array.isArray(users)) {
      userRows = users.map((u, i) => (
        <tr key={i}>
          <td>{u.userName}</td>
          <td>{u.name}</td>
          <td>{u.description}</td>
          <td />
        </tr>
      ));
    }

    return (
      <div>
        <Helmet>
          <title>Saturn - Utilisateurs</title>
        </Helmet>

        <div className="animated fadeIn">
          <Card className="card-default">
            <CardHeader>
              <i className="fas fa-users" />&nbsp; Utilisateurs
              <Button className="float-right" color="success">
                <i className="fas fa-plus-square" />&nbsp; Ajouter
              </Button>
            </CardHeader>
            <CardBlock className="card-body">
              <Table striped hover responsive>
                <thead>
                  <tr>
                    <th>Nom d'utilisateur</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th />
                  </tr>
                </thead>
                <tbody>{userRows}</tbody>
              </Table>
            </CardBlock>
          </Card>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserModel>) => {
  const dispatcher = new ActionDispatcher(dispatch);
  return {
    loadUsersAction: dispatcher.dispatchAsyncAction.bind(dispatcher, userActions.loadUsersAsync)
  };
};

const mapStateToProps = (state: ApplicationState) => ({
  users: state.users,
  oidc: state.oidc
});

const users = connect(mapStateToProps, mapDispatchToProps)(Users);

export { users };
