import { useDispatch, useSelector } from 'react-redux';
import { addbook } from '../redux/Books/allbooks';

const AddBook = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  function ana(e) {
    e.preventDefault();
    const title = e.target.querySelector('.title');
    const author = e.target.querySelector('.author');
    dispatch(addbook(books.length, title.value, author.value));
  }
  return (
    <>
      <form onSubmit={(e) => { ana(e); }}>
        <input className="title" placeholder="Title" required />
        <input className="author" placeholder="Author" required />
        <button type="submit">Add book</button>
      </form>
    </>
  );
};

export default AddBook;
