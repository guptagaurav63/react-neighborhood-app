import React, { useState } from "react";
import { createBook } from "../api";

export default function CreateBook({ onBookCreated }) {
  const [form, setForm] = useState({ title: "", author: "", total_copies: 1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = await createBook(form);
    onBookCreated(book);
    setForm({ title: "", author: "", total_copies: 1 });
  };

  return (
    <div>
      <h2>Create New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          required
        />
        <input
          type="number"
          value={form.total_copies}
          onChange={(e) => setForm({ ...form, total_copies: parseInt(e.target.value) })}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
