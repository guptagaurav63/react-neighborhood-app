import React, { useState } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
import BorrowBook from "./components/BorrowBook";
import './App.css'

function App() {
  const [books, setBooks] = useState([]);

  const handleBookCreated = (newBook) => {
    setBooks((prev) => [newBook, ...prev]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Neighborhood Library</h1>
      <CreateBook onBookCreated={handleBookCreated} />
      <BorrowBook />
      <BookList books={books} />
    </div>
  );
}
export default App;
