"use client";

import { useState, useEffect } from "react";
import {
  db,
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
} from "../../lib/firebase";

export default function Page() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  const docId = "GJogwB9z5fp3Vu26mPDX";

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const docRef = doc(db, "users", docId);
        const snap = await getDoc(docRef);

        if (!snap.exists()) {
          setLoading(false);
          return;
        }

        const data = snap.data();
        const userEmails = Array.isArray(data.emails)
          ? data.emails
          : [];

        setEmails(userEmails);
      } catch (error) {
        console.error("Error fetching emails:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  const handleDelete = async (emailToDelete) => {
    try {
      const docRef = doc(db, "users", docId);

      // Xóa khỏi Firestore
      await updateDoc(docRef, {
        emails: arrayRemove(emailToDelete),
      });

      // Cập nhật lại state frontend
      setEmails((prev) =>
        prev.filter((email) => email !== emailToDelete)
      );
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!(email === "nguyenquynhib@gmail.com" || email === "phongtx.it@gmail.com")) {
      window.location.href = "/login";
    }
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Đang tải...</p>
      </div>
    );
  }

  if (emails.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Không có email nào</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Danh sách Emails
        </h1>

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
      </div>
    </div>
  );
}
