import { AdminForm } from "../../../components/UI/admin-form/AdminForm";
import { EnglishWords } from "../testvariants/EnglishWords";
import { ListenEnglishWords } from "../testvariants/ListenEnglishWords";
import { useState } from "react";
import { VariantAudio } from "../testvariants/VariantAudio";
import { Respons } from "../testvariants/Respons";
import { RecordStatement } from "../testvariants/RecordStatement";
import { UploadImage } from "../testvariants/UploadImage";
import { SelectMainIdea } from "../testvariants/ SelectMainIdea";
import { HighLightTheAnswer } from "../testvariants/HighLightTheAnswer";
import { Snackbar } from "../../../components/UI/snackbar/SnackBar";

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
      <Snackbar />
      {selectedType === "1" && <EnglishWords onReset={handleResetForm} />}
      {selectedType === "2" && <ListenEnglishWords onReset={handleResetForm} />}
      {selectedType === "3" && <VariantAudio />}
      {selectedType === "4" && <UploadImage />}
      {selectedType === "5" && <RecordStatement />}
      {selectedType === "6" && <Respons />}
      {selectedType === "7" && <HighLightTheAnswer />}
      {selectedType === "8" && <SelectMainIdea onReset={handleResetForm} />}
      {selectedType === "9" && <SelectMainIdea onReset={handleResetForm} />}
    </AdminForm>
  );
};
