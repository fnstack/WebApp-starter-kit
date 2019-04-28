import * as React from 'react';
import { Row, Col, Button, Divider, List, Popconfirm, Icon, Skeleton, Avatar } from 'antd';
import { IconButtonAction } from 'modules/shared';

interface MenuTestListProps {
  className?: string;
  style?: React.CSSProperties;
  handleRefetch: () => void;
  sources: any[];
  loading: boolean;
  onAdd: () => void;
}

/**
 * The MenuTestList component
 *
 * @returns MenuTestList as react stateless component
 */
const MenuTestList: React.StatelessComponent<MenuTestListProps> = ({
  className,
  style,
  handleRefetch,
  sources,
  loading,
  onAdd
}) => {
  return (
    <>
      <div className={className} style={style}>
        <Row gutter={24}>
          <Col span={8}>
            <Button type="primary" icon="file-add" onClick={onAdd}>
              Ajouter
            </Button>
            <Button type="primary" style={{ marginLeft: 10 }} icon="retweet" ghost onClick={handleRefetch}>
              Rafraîchir
            </Button>
          </Col>
          <Divider style={{ marginTop: '5%', marginBottom: '-0.9%' }} />
        </Row>
        <br />

        <List
          itemLayout="horizontal"
          dataSource={sources}
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
                  size="small"
                  icon="edit"
                  item={item}
                  type="primary"
                  ghost
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
                    size="small"
                    icon="delete"
                    type="danger"
                    shape="circle"
                    ghost
                  />
                </Popconfirm>
              ]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={`${item.firstName} ${item.lastName}`}
                  description={item.email}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export { MenuTestList };
