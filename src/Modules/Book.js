import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeABook } from '../redux/Books/allbooks';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  function remove() {
    dispatch(removeABook(id));
  }

  return (
    <>
      <h2>{ title }</h2>
      <h3>{ author }</h3>
      <h4>{ category }</h4>
      <button onClick={() => { remove(); }} type="button">Remove</button>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
