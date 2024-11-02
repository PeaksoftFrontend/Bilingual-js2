import { AdminForm } from "../../../components/UI/admin-form/AdminForm";
import { EnglishWords } from "../testvariants/EnglishWords";
import { ListenEnglishWords } from "../testvariants/ListenEnglishWords";
import { useState } from "react";
import { VariantAudio } from "../testvariants/VariantAudio";
import { Respons } from "../testvariants/Respons";
import { RecordStatement } from "../testvariants/RecordStatement";
import { UploadImage } from "../testvariants/UploadImage";
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
      {selectedType === "3" && <VariantAudio />}
      {selectedType === "4" && <UploadImage />}
      {selectedType === "5" && <RecordStatement />}
      {selectedType === "6" && <Respons />}
      {selectedType === "9" && <SelectMainIdea onReset={handleResetForm} />}
      {selectedType === "10" && <SelectMainIdea onReset={handleResetForm} />}
    </AdminForm>
  );
};
