import { AdminForm } from "../../../components/UI/admin-form/AdminForm";
import { EnglishWords } from "../testvariants/EnglishWords";
import { ListenEnglishWords } from "../testvariants/ListenEnglishWords";
import { useState } from "react";
import { VariantAudio } from "../testvariants/VariantAudio";
import { Respons } from "../testvariants/Respons";
import { RecordStatement } from "../testvariants/RecordStatement";
import { UploadImage } from "../testvariants/UploadImage";
import { SelectMainIdea } from "../testvariants/ SelectMainIdea";
<<<<<<< HEAD
import { SelectBestTitle } from "../testvariants/ SelectBestTitle";
=======
import { HighLightTheAnswer } from "../testvariants/HighLightTheAnswer";
>>>>>>> e1ec3229b2f09827534b74c44c88135e04f8bab4

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
      {selectedType === "7" && <HighLightTheAnswer />}
      {selectedType === "8" && <SelectMainIdea onReset={handleResetForm} />}
      {selectedType === "9" && <SelectMainIdea onReset={handleResetForm} />}
<<<<<<< HEAD
      {selectedType === "10" && <SelectBestTitle onReset={handleResetForm} />}
=======
>>>>>>> e1ec3229b2f09827534b74c44c88135e04f8bab4
    </AdminForm>
  );
};
