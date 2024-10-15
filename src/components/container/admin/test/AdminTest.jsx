// App.js
import { Grid, styled } from "@mui/material";
const EditIcon = () => (
  <div style={{ width: "20px", height: "20px", backgroundColor: "blue" }}>
    Edit
  </div>
);
const DeleteIcon = () => (
  <div style={{ width: "20px", height: "20px", backgroundColor: "red" }}>
    Delete
  </div>
);

export const AdminTest = () => {
  return (
    <FormContainer>
      <ButtonContainer>
        <Button variant="contained">+ Add new Test</Button>
      </ButtonContainer>

      <Container>
        <TitleContainer>
          <TestTitle>Test Title</TestTitle>
        </TitleContainer>

        <IconsContainer>
          <Switcher />
          <MyIconButton>
            <StyledEditIcon />
          </MyIconButton>
          <MyIconButton>
            <StyledDeleteIcon />
          </MyIconButton>
        </IconsContainer>
      </Container>
    </FormContainer>
  );
};

const ButtonContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "10px",
}));

const Container = styled(Grid)(() => ({
  display: "flex",
  boxShadow:
    "0px -4px 10px rgba(0, 0, 0, 0.06), 0px 4px 10px rgba(0, 0, 0, 0.06)",
  padding: "24px 16px",
  borderRadius: "8px",
  "&:hover": {
    background: "#f8f8f8",
    boxShadow: "0px 0px 8px 0px rgba(34, 60, 80, 0.47)",
  },
}));

const TitleContainer = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  width: "90%",
}));

const TestTitle = styled("p")(() => ({
  fontFamily: "Poppins, Gilroy",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "18px",
  color: "#000",
}));

const IconsContainer = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
}));

const StyledEditIcon = styled(EditIcon)(() => ({}));

const StyledDeleteIcon = styled(DeleteIcon)(() => ({}));

const FormContainer = ({ children }) => {
  return (
    <MainContainer>
      <InsideContainer>{children}</InsideContainer>
    </MainContainer>
  );
};

const MainContainer = styled("div")(() => ({
  padding: "70px 170px",
}));

const InsideContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  backgroundColor: "#fff",
  padding: "50px 80px",
  borderRadius: "20px",
  boxShadow: "0px 4px 39px rgba(196, 196, 196, 0.6)",
}));

const Button = ({ children, variant, onClick, ...rest }) => {
  const BaseButton = styled("button")(() => ({
    borderRadius: "8px",
    padding: "10px 20px",
  }));

  return (
    <BaseButton onClick={onClick} {...rest}>
      {children}
    </BaseButton>
  );
};

const Switcher = () => {
  return (
    <div style={{ width: "42px", height: "26px", backgroundColor: "gray" }} />
  );
};

const MyIconButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      {children}
    </button>
  );
};
