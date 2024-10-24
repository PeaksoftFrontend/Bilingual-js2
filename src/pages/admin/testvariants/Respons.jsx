import { styled } from "@mui/system";
import { ContentWrapper } from "../../../components/UI/content_wrapper/ContentWrapper";
import { Input } from "../../../components/UI/input/Input";
import { Typography } from "@mui/material";

export const Respons = () => {
  return (
    <ContentWrapper>
      <Typography variant={"h4"}>Question statement</Typography>
      <StyledInput />
      <Typography variant={"h6"} width={80} height={36}>
        Number off Words
      </Typography>
      <StyledInputNumber type={"Number"} />
    </ContentWrapper>
  );
};
const StyledInput = styled(Input)({
  width: "820px",
});
const StyledInputNumber = styled(Input)({
  width: "49px",
  height: "42px",
});
