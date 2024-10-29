import { AdminForm } from "../../../components/UI/admin-form/AdminForm";
import { EnglishWords } from "../testvariants/EnglishWords";
import { ListenEnglishWords } from "../testvariants/ListenEnglishWords";
import { useState } from "react";
import { SelectBestTitle } from "../testvariants/SelectBestTitle";
import { SelectBestTitleSecond } from "../testvariants/SelectBestTitleSecond";

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
      {selectedType === "9" && <SelectBestTitle onReset={handleResetForm} />}
      {selectedType === "10" && (
        <SelectBestTitleSecond onReset={handleResetForm} />
      )}
    </AdminForm>
  );
};
