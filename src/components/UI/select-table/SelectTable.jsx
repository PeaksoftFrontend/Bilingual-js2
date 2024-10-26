import { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

export const AnswerCard = ({
  value,
  selectedValue,
  handleChange,
  number,
  text,
}) => {
  return (
    <Card variant="outlined" sx={{ mb: 2, borderRadius: "10px" }}>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Контейнер для нумерации и текста */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Нумерация */}
          <Typography variant="body1">{number}</Typography>

          {/* Текст с отступом от нумерации */}
          <Typography
            variant="body1"
            sx={{
              marginLeft: "15px",
              color: selectedValue === value ? "black" : "gray",
            }}
          >
            {text}
          </Typography>
        </Box>

        {/* Радиокнопка справа */}
        {handleChange && (
          <FormControlLabel
            value={value}
            control={<Radio />}
            label=""
            onChange={handleChange}
            sx={{
              marginRight: 0, // убираем отступы слева от радиокнопки
            }}
          />
        )}
      </CardContent>
    </Card>
  );
};

export const QuestionCards = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup value={selectedValue}>
        {/* Ручное создание каждой карточки */}
        <AnswerCard
          value={1}
          selectedValue={selectedValue}
          handleChange={handleChange}
          number={1}
          text="Table content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
        />
        <AnswerCard
          value={2}
          selectedValue={selectedValue}
          handleChange={handleChange}
          number={2}
          text="Table content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
        />
        <AnswerCard
          value={3}
          selectedValue={selectedValue}
          handleChange={handleChange}
          number={3}
          text="Table content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
        />
        <AnswerCard
          value={4}
          selectedValue={selectedValue}
          handleChange={handleChange}
          number={4}
          text="Table content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
        />
      </RadioGroup>
    </FormControl>
  );
};
