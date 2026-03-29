import axiosInstance from "./axios";

const deleteEmail = async (emailToDelete) => {
  try {
    const res = await axiosInstance.post("/api/delete-email", {
      email: emailToDelete,
    });

    return res.data;
  } catch (error) {
    console.error(
      "Delete error:",
      error?.response?.data || error.message
    );
    return null;
  }
};

export default deleteEmail;
