import { Virtuoso } from 'react-virtuoso';
import { ListProps } from './index.type';

const List = ({ data, itemContent }: ListProps) => {
  return <Virtuoso useWindowScroll data={data} itemContent={itemContent} />;
};

export default List;
