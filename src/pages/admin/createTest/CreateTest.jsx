import { AdminForm } from "../../../components/UI/admin-form/AdminForm";
import { EnglishWords } from "../testvariants/EnglishWords";
import { HighLightTheAnswer } from "../testvariants/HighLightTheAnswer";
import { ListenEnglishWords } from "../testvariants/ListenEnglishWords";
import { useState } from "react";

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
      {selectedType === "3" && <HighLightTheAnswer />}
    </AdminForm>
  );
};
