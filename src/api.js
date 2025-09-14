const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000";

export async function listBooks() {
  const res = await fetch(`${API_BASE}/books`);
  return res.json();
}

export async function listMembers() {
  const res = await fetch(`${API_BASE}/members`);
  return res.json();
}

export async function createBook(book) {
  const res = await fetch(`${API_BASE}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return res.json();
}

export async function borrowBook(bookId, memberId) {
  const res = await fetch(`${API_BASE}/borrow`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ book_id: bookId, member_id: memberId }),
  });
  return res.json();
}
