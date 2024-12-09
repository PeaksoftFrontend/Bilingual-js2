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
import { SelectBestTitle } from "../testvariants/ SelectBestTitle";

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
    selectedValue("");
    setDuration("15:00");
    setTitle("");
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
          setTitle={setTitle}
          setDuration={setDuration}
        />
      )}
      {selectedType === "LISTEN_AND_SELECT_ENGLISH_WORDS" && (
        <ListenEnglishWords
          onReset={handleResetForm}
          title={title}
          duration={duration}
          selectedValue={selectedValue}
          setTitle={setTitle}
          setDuration={setDuration}
        />
      )}
      {selectedType === "TYPE_WHAT_YOU_HEAR" && (
        <VariantAudio
          title={title}
          duration={duration}
          selectedValue={selectedValue}
          setTitle={setTitle}
          setDuration={setDuration}
          // onReset={handleResetForm}
          setSelectedType={setSelectedType}
        />
      )}
      {selectedType === "DESCRIBE_IMAGE" && (
        <UploadImage
          onReset={handleResetForm}
          title={title}
          duration={duration}
          selectedValue={selectedValue}
          setTitle={setTitle}
          setDuration={setDuration}
        />
      )}
      {selectedType === "RECORD_SAYING_STATEMENT" && (
        <RecordStatement
          selectedValue={selectedValue}
          title={title}
          duration={duration}
          onReset={handleResetForm}
          setDuration={setDuration}
          setTitle={setTitle}
        />
      )}
      {selectedType === "RESPOND_AT_LEAST_N_WORDS" && (
        <Respons
          selectedValue={selectedValue}
          title={title}
          duration={duration}
          onReset={handleResetForm}
          setDuration={setDuration}
          setTitle={setTitle}
        />
      )}
      {selectedType === "HIGHLIGHT_THE_ANSWER" && (
        <HighLightTheAnswer
          selectedValue={selectedValue}
          title={title}
          duration={duration}
          onReset={handleResetForm}
          setDuration={setDuration}
          setTitle={setTitle}
        />
      )}
      {selectedType === "SELECT_THE_MAIN_IDEA" && (
        <SelectMainIdea
          selectedValue={selectedValue}
          title={title}
          duration={duration}
          onReset={handleResetForm}
          setDuration={setDuration}
          setTitle={setTitle}
        />
      )}
      {selectedType === "SELECT_THE_BEST_TITLE" && (
        <SelectBestTitle
          selectedValue={selectedValue}
          title={title}
          duration={duration}
          onReset={handleResetForm}
          setDuration={setDuration}
          setTitle={setTitle}
        />
      )}
    </AdminForm>
  );
};
