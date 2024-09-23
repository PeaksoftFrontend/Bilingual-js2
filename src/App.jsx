import { AdminTable } from "./components/UI/admin-table/AdminTable";
import { data } from "./utils/constants/AdminTable";

export const App = () => {
  return (
    <div style={{ width: "800px" }}>
      <h1>Bilingual</h1>
      <AdminTable variant="variant2" data={data} />
    </div>
  );
};
