import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addbook } from '../redux/Books/allbooks';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function ana(e) {
    e.preventDefault();
    dispatch(addbook(Math.floor(Math.random() * 100000), title, author));
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={(e) => { ana(e); }}>
        <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input onChange={(e) => setAuthor(e.target.value)} className="author" placeholder="Author" required />
        <button type="submit">Add book</button>
      </form>
    </>
  );
};

export default AddBook;
