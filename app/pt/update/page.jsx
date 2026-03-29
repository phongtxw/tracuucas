"use client";

import { useState, useEffect } from "react";

import fetchEmails from "../../api/getEmail";
import addEmail from "../../api/addEmail";
import deleteEmail from "../../api/deleteEmail";

export default function Page() {

  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchEmails();
      setEmails(data);
      setLoading(false);
    };

    loadData();
  }, []);

  const handleAdd = async () => {
    if (!newEmail.trim()) return;

    const result = await addEmail(newEmail);

    if (result) {
      setEmails((prev) => [...prev, newEmail]);
      setNewEmail("");
    }
  };

  const handleDelete = async (emailToDelete) => {
    const result = await deleteEmail(emailToDelete);

    if (result) {
      setEmails((prev) =>
        prev.filter((email) => email !== emailToDelete)
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Đang tải...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Danh sách Emails
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Nhập email mới..."
            className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Thêm
          </button>
        </div>

        {emails.length === 0 ? (
          <p className="text-gray-500 text-center">
            Không có email nào
          </p>
        ) : (
          <ul className="space-y-3">
            {emails.map((email, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition rounded-xl px-4 py-3 border"
              >
                <span className="text-gray-700 break-all">
                  {email}
                </span>

                <button
                  onClick={() => handleDelete(email)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
