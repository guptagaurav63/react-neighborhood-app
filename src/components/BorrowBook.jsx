import React, { useEffect, useState } from "react";
import { listBooks, listMembers, borrowBook } from "../api";

export default function BorrowBook() {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedMember, setSelectedMember] = useState("");

useEffect(() => {
  listBooks()
    .then((data) => {
      if (Array.isArray(data)) setBooks(data);
      else setBooks([]);  // fallback if error
    })
    .catch(() => setBooks([]));

  listMembers()
    .then((data) => {
      if (Array.isArray(data)) setMembers(data);
      else setMembers([]);
    })
    .catch(() => setMembers([]));
}, []);

  const handleBorrow = async () => {
    if (!selectedBook || !selectedMember) {
      alert("Choose a book and member");
      return;
    }
    const loan = await borrowBook(parseInt(selectedBook), parseInt(selectedMember));
    alert(`Book borrowed! Loan ID: ${loan.id}`);
  };

  return (
    <div>
      <h2>Borrow a Book</h2>
      <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
        <option value="">Select book</option>
        {books.map((b) => (
          <option key={b.id} value={b.id}>
            {b.title} ({b.available_copies} available)
          </option>
        ))}
      </select>
      <select value={selectedMember} onChange={(e) => setSelectedMember(e.target.value)}>
        <option value="">Select member</option>
        {members.map((m) => (
          <option key={m.id} value={m.id}>{m.name}</option>
        ))}
      </select>
      <button onClick={handleBorrow}>Borrow</button>
    </div>
  );
}
