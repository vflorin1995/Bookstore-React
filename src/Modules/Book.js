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
    <div className="book-card">
      <div className="book-info">
        <div className="info">
          <h4 className="category">{category}</h4>
          <h2 className="book-title">{title}</h2>
          <h3 className="book-author">{author}</h3>
        </div>
        <div className="book-controls">
          <button className="secondary-btn" type="button">Comments</button>
          <button className="secondary-btn" onClick={() => { remove(); }} type="button">Remove</button>
          <button className="secondary-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-info">
        <div className="progress-percentage">
          <div className="circle-progress" />
          <div className="percentage-div">
            <span className="percentage">69%</span>
            <span className="completed">Completed</span>
          </div>
        </div>
        <div className="divider" />
        <div className="progress-chapter">
          <div className="progress">
            <span className="current-chapter-title">CURRENT CHAPTER</span>
            <span className="current-chapter">Chapter 16</span>
          </div>
          <button className="primary-btn update-progress" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
