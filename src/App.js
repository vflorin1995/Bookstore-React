import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bookpage from './Modules/BookPage';
import Categories from './Modules/Categories';
import Nav from './Modules/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Bookpage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
