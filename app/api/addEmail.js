import axiosInstance from "./axios";

const addEmail = async (newEmail) => {
  try {
    const res = await axiosInstance.post("/api/add-email", {
      email: newEmail,
    });

    return res.data;
  } catch (error) {
    console.error(
      "Add error:",
      error?.response?.data || error.message
    );
    return null;
  }
};

export default addEmail;
