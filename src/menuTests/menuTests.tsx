import * as React from 'react';
import { Query } from 'react-apollo';
import { notification } from 'antd';
import Helmet from 'react-helmet';
import { getAllUsers } from './queries';
import { MenuTestList } from './components';

/**
 * The MenuTest component
 *
 * @class MenuTests
 * @extends {React.PureComponent}
 */
class MenuTests extends React.PureComponent {
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
              return <MenuTestList sources={[]} loading={loading} handleRefetch={handleRefetch} />;
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

                <MenuTestList sources={rows} loading={loading} handleRefetch={handleRefetch} />
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export { MenuTests };
