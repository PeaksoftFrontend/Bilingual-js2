import { AdminForm } from "../../../components/UI/admin-form/AdminForm";
import { EnglishWords } from "../testvariants/EnglishWords";
import { ListenEnglishWords } from "../testvariants/ListenEnglishWords";
import { useState } from "react";

export const CreateTest = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleSelectChange = (value) => {
    setSelectedType(value);
  };

  return (
    <AdminForm onSelectChange={handleSelectChange}>
      {selectedType === "1" && <EnglishWords />}
      {selectedType === "2" && <ListenEnglishWords />}
    </AdminForm>
  );
};
