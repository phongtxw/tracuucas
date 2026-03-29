import axiosInstance from "./axios";

const fetchEmails = async () => {
  try {
    const res = await axiosInstance.get("/api/get-emails");

    if (!res || !res.data) {
      return [];
    }

    return Array.isArray(res.data.emails)
      ? res.data.emails
      : [];
  } catch (error) {
    console.error("Fetch error:", error?.response || error.message);
    return [];
  }
};

export default fetchEmails;
