import { useSelector } from 'react-redux';
import Book from './Book';

const Booklist = () => {
  const bookArr = useSelector((state) => state.book);
  return (
    bookArr.map((b) => <Book key={b.id} title={b.title} author={b.author} />)
  );
};
export default Booklist;
