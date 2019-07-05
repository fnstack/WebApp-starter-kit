import * as React from 'react';
import { Query } from 'react-apollo';
import { notification } from 'antd';
import Helmet from 'react-helmet';
import { getAllUsers } from './queries';
import { MenuTestList } from './components';

interface MenuTestListState {
  showHideAddModal: boolean;
}

/**
 * The MenuTest component
 *
 * @class MenuTests
 * @extends {React.PureComponent}
 */
class MenuTests extends React.PureComponent<{}, MenuTestListState> {
  public state = {
    showHideAddModal: false
  };

  private handleShowHideAddModal = () => {
    this.setState({ showHideAddModal: !this.state.showHideAddModal });
  };
  public render() {
    return (
      <>
        <Query key="getMenuTests" query={getAllUsers}>
          {({ loading, error, data, refetch }) => {
            const handleRefetch = () => refetch();

            if (error) {
              notification.error({
                message: 'Error!',
                description: `L'erreur "${error}", s'est produite pendant le chargement de la MenuTest`
              });
              return (
                <MenuTestList
                  onAdd={this.handleShowHideAddModal}
                  sources={[]}
                  loading={loading}
                  handleRefetch={handleRefetch}
                />
              );
            }

            let rows = [];

            if (data && Array.isArray(data.allUsers)) {
              rows = data.allUsers.map(item => {
                return { ...item, key: item.id };
              });
            }

            return (
              <>
                <Helmet>
                  <title>Webb Starter kit - MenuTests</title>
                </Helmet>

                <MenuTestList
                  sources={rows}
                  loading={loading}
                  handleRefetch={handleRefetch}
                  onAdd={this.handleShowHideAddModal}
                />
              </>
            );
          }}
        </Query>
        {/* {this.registerUserModal()} */}
      </>
    );
  }

  // private registerUserModal = () => {
  //   const { showHideAddModal: showAddModal } = this.state;

  //   /* tslint:disable:jsx-no-lambda */
  //   return (
  //     <Mutation key="registerUser" mutation={registerUser}>
  //       {(registerUser, { loading, error }) => {
  //         if (error) {
  //           this.handleShowHideAddModal();

  //           notification.error({
  //             message: 'Error!',
  //             description: `L'erreur "${error}", s'est produite pendant l'enregistrement de l'utilisateur`
  //           });
  //           return null;
  //         }

  //         return (
  //           <Modal
  //             visible={showAddModal}
  //             title="Ajouter un type de carrier"
  //             onCancel={this.handleShowHideAddModal}
  //             footer={[
  //               <Button key="back" onClick={this.handleShowHideAddModal}>
  //                 Annuler
  //               </Button>,
  //               <Button key="submit" type="primary" htmlType="submit" loading={loading} form="AddUserForm">
  //                 Créer
  //               </Button>
  //             ]}
  //           >
  //             {/* <AddUserForm onSubmit={registerUser} loading={loading}
  //           onCloseModal={this.handleShowHideAddModal} /> */}
  //           </Modal>
  //         );
  //       }}
  //     </Mutation>
  //   );
  // };
}

export { MenuTests };
