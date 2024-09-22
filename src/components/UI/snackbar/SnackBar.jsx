import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icons } from "../../../assets/icons";

const messageStyles = {
  fontSize: "18px",
  fontWeight: "800",
  color: "black",
};

const styles = {
  default: "toast-default",
  success: "toast-success",
  error: "toast-error",
};

const CustomToast = ({ message, additionalMessage, severity }) => (
  <div className={`custom-toast ${styles[severity]}`}>
    <div style={messageStyles}>{message}</div>{" "}
    {additionalMessage && (
      <div className="additional-message">{additionalMessage}</div>
    )}
  </div>
);

export const ShowSnackbar = (
  message,
  severity = "default",
  additionalMessage = "",
  options = {}
) => {
  const config = {
    position: options.position || "top-right",
    autoClose: options.autoClose || 3000,
    hideProgressBar: options.hideProgressBar || false,
    closeOnClick: options.closeOnClick || true,
    pauseOnHover: options.pauseOnHover || true,
    draggable: options.draggable || true,
    ...options,
    render: () => (
      <CustomToast
        message={message}
        additionalMessage={additionalMessage}
        severity={severity}
      />
    ),
  };

  switch (severity) {
    case "success":
      toast.success(
        <CustomToast
          message={message}
          additionalMessage={additionalMessage}
          severity={severity}
        />,
        config
      );
      break;
    case "error":
      toast.error(
        <CustomToast
          message={message}
          additionalMessage={additionalMessage}
          severity={severity}
        />,
        { ...config, icon: <Icons.ErrorArrow /> }
      );
      break;
    default:
      toast(
        <CustomToast
          message={message}
          additionalMessage={additionalMessage}
          severity={severity}
        />,
        config
      );
      break;
  }
};

export const Snackbar = () => {
  return (
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
  );
};
