import React from 'react';
import { Button, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { LoadMoreSpin } from './loadMoreSpin';
import { isArrayOfAtLeastOneObject } from '../helpers';

const ListItem = List.Item;

interface GenericListProps<TItem> {
  onCreate: (e?) => void;
  loadMore?: () => void;
  hasMore: boolean;
  items: TItem[];
  loading: boolean;
  renderItem: (item: TItem) => JSX.Element;
}

class GenericList<TItem> extends React.PureComponent<GenericListProps<TItem>> {
  public render(): JSX.Element {
    const { onCreate: showHideCreateModal, loadMore, hasMore, items, loading, renderItem } = this.props;

    return (
      <>
        <Button type="dashed" style={{ width: '100%', marginBottom: 8 }} icon="plus" onClick={showHideCreateModal}>
          Créer
        </Button>

        {isArrayOfAtLeastOneObject(items) && (
          <InfiniteScroll initialLoad={false} loadMore={loadMore} hasMore={hasMore} useWindow={true}>
            <List size="large" rowKey="id" dataSource={items} renderItem={renderItem}>
              <LoadMoreSpin isLoading={loading} />
            </List>
          </InfiniteScroll>
        )}

        {!isArrayOfAtLeastOneObject(items) && (
          <List size="large" rowKey="id" dataSource={[]} renderItem={renderItem}>
            <LoadMoreSpin isLoading={loading} />
          </List>
        )}
      </>
    );
  }
}

export { GenericList, ListItem };
