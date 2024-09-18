import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Snackbar = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export const ShowSnackbar = (message, severity) => {
  if (severity === "success") {
    toast.success(message);
  } else if (severity === "error") {
    toast.error(message);
  }
  toast.success(message, {
    icon: "✅",
    style: {
      background: "#28a745",
      color: "white",
      fontSize: "18px",
    },
  });
};
