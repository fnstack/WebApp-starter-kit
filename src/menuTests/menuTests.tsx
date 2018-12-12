import * as React from 'react';
import { Query } from 'react-apollo';
import { notification, Row, Button, Col, Divider, List, Popconfirm, Icon, Skeleton } from 'antd';
import Helmet from 'react-helmet';
import { getAllUsers } from './queries';
import { IconButtonAction } from 'shared';

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

            const header = () => (
              <Row gutter={24}>
                <Col span={6}>
                  <Button type="primary" style={{ marginRight: 10 }} icon="retweet" ghost onClick={handleRefetch}>
                    Rafraîchir
                  </Button>
                </Col>
                <Divider style={{ marginTop: '5%', marginBottom: '-0.9%' }} />
              </Row>
            );

            if (error) {
              notification.error({
                message: 'Error!',
                description: `L'erreur "${error}", s'est produite pendant le chargement de la MenuTest`
              });
              return (
                <div>
                  <Row gutter={24}>{header()}</Row>
                </div>
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

                <div>
                  {header()}
                  <br />

                  <List
                    itemLayout="horizontal"
                    dataSource={rows}
                    loading={loading}
                    bordered
                    size="small"
                    // tslint:disable-next-line:jsx-no-lambda
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <IconButtonAction
                            key="edit"
                            title="Modifier"
                            size="default"
                            icon="edit"
                            item={item}
                            type="primary"
                          />,
                          <Popconfirm
                            key="p-d-delete"
                            title={`Êtes-vous de vouloir supprimer ${item.firstName} ${item.lastName}`}
                            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                            okText="Oui"
                            cancelText="Non"
                          >
                            <Button
                              key="d-delete"
                              title="Supprimer"
                              size="default"
                              icon="delete"
                              type="danger"
                              shape="circle"
                            />
                          </Popconfirm>
                        ]}
                      >
                        <Skeleton avatar title={false} loading={item.loading} active>
                          <List.Item.Meta title={`${item.firstName} ${item.lastName}`} />
                        </Skeleton>
                      </List.Item>
                    )}
                  />
                </div>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export { MenuTests };
