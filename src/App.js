import BookList from "./components/BookList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/editbook/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
