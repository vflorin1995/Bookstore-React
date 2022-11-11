import { useDispatch, useSelector } from 'react-redux';
import { checkstatus } from '../redux/Categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const statusMsg = useSelector((state) => state.categoriesReducer);

  function check() {
    dispatch(checkstatus());
  }
  return (
    <div className="categories">
      <button className="primary-btn" onClick={() => check()} type="button">Check status</button>
      <p className="checkMsg">{statusMsg}</p>
    </div>
  );
};

export default Categories;
