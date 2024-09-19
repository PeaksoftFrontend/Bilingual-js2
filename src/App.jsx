import { ShowSnackbar, Snackbar } from "./components/UI/snackbar/SnackBar";

export const App = () => {
  return (
    <div>
      <h1>React Toastify Snackbar Example</h1>
      <button
        onClick={() =>
          ShowSnackbar("Success message!", "success", "this file succsess")
        }
      >
        Show Success
      </button>
      <button
        onClick={() => ShowSnackbar("Error message!", "error", "this file ")}
      >
        Show Error
      </button>
      <Snackbar />
    </div>
  );
};
