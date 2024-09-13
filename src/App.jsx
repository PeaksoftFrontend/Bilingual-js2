import { Button } from "./components/UI/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const App = () => {
  return (
    <div>
      <h1>Bilingual</h1>
      <Button variant="contained" icon={<DeleteIcon />}>
        delete
      </Button>
    </div>
  );
};
