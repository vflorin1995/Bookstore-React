import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../redux/Books/allbooks';

const Booklist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookArr = useSelector((state) => state.book);
  return (
    bookArr.map((b) => <Book key={b.id} id={b.id} title={b.title} author={b.author} />)
  );
};
export default Booklist;
