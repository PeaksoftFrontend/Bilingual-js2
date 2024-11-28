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

export const CreateTest = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [duration, setDuration] = useState("15:00");
  const [title, setTitle] = useState("");

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
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      duration={duration}
      setDuration={setDuration}
      title={title}
      setTitle={setTitle}
    >
      {selectedType === "SELECT_REAL_ENGLISH_WORD" && (
        <EnglishWords
          onReset={handleResetForm}
          duration={duration}
          selectedValue={selectedValue}
          title={title}
        />
      )}
      {selectedType === "LISTEN_AND_SELECT_ENGLISH_WORDS" && (
        <ListenEnglishWords onReset={handleResetForm} />
      )}
      {selectedType === "TYPE_WHAT_YOU_HEAR" && <VariantAudio />}
      {selectedType === "DESCRIBE_IMAGE" && <UploadImage />}
      {selectedType === "RECORD_SAYING_STATEMENT" && <RecordStatement />}
      {selectedType === "RESPOND_AT_LEAST_N_WORDS" && <Respons />}
      {selectedType === "HIGHLIGHT_THE_ANSWER" && <HighLightTheAnswer />}
      {selectedType === "SELECT_THE_MAIN_IDEA" && (
        <SelectMainIdea onReset={handleResetForm} />
      )}
      {selectedType === "SELECT_THE_BEST_TITLE" && (
        <SelectMainIdea onReset={handleResetForm} />
      )}
    </AdminForm>
  );
};
