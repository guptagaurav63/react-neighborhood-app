import React, { useEffect, useState } from "react";
import { listBooks } from "../api";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    listBooks().then(setBooks).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Available Books</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>ID</th><th>Title</th><th>Author</th><th>Available</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.available_copies}/{b.total_copies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
