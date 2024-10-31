import { AdminForm } from "../../../components/UI/admin-form/AdminForm";
import { EnglishWords } from "../testvariants/EnglishWords";
import { ListenEnglishWords } from "../testvariants/ListenEnglishWords";
import { useState } from "react";
import { RecordStatement } from "../testvariants/RecordStatement";
import { SelectMainIdeaSecond } from "../testvariants/ SelectMainIdeaSecond";
import { SelectMainIdea } from "../testvariants/ SelectMainIdea";

export const CreateTest = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleSelectChange = (value) => {
    setSelectedType(value);
  };

  const handleResetForm = () => {
    setSelectedType("");
  };

  return (
    <AdminForm
      onSelectChange={handleSelectChange}
      onResetForm={handleResetForm}
    >
      {selectedType === "1" && <EnglishWords onReset={handleResetForm} />}
      {selectedType === "2" && <ListenEnglishWords onReset={handleResetForm} />}
      {selectedType === "9" && <SelectMainIdea onReset={handleResetForm} />}
      {selectedType === "10" && (
        <SelectMainIdeaSecond onReset={handleResetForm} />
      )}
      {selectedType === "5" && <RecordStatement />}
    </AdminForm>
  );
};
