import { Box, Typography, styled, FormControlLabel } from "@mui/material";
import { Input } from "../../UI/input/Input";
import { Button } from "../../UI/button/Button";
import { Icons } from "../../../assets/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UiModal } from "../../UI/modal/UiModal";

export const SignIn = ({ open, onClose }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
  });

  return (
    <UiModal open={open} onClose={onClose} role={"ADMIN"}>
      <Background>
        <SignUpForm onSubmit={formik.handleSubmit}>
          <Container>
            <Icons.Layer />
            <Title>Sign In</Title>
            <StyledInput
              label="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <StyledInput
              label="Password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabelCheck
              control={<CheckInput type="checkbox" />}
              label="To remember me"
            />
            <StyledButton variant="contained" type="submit">
              Sign Up
            </StyledButton>
            <StyledBtn variant="text">
              <Icons.Google />
              <p>Sign up with google</p>
            </StyledBtn>
            <StyledText>
              Don't have an account? <StyledLink>REGISTER</StyledLink>
            </StyledText>
          </Container>
        </SignUpForm>
      </Background>
    </UiModal>
  );
};

const CheckInput = styled("input")(() => ({
  width: "22px",
  height: "22px",
}));

const FormControlLabelCheck = styled(FormControlLabel)(({ theme }) => ({
  position: "relative",
  zIndex: "10",
  right: "12rem",
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
  background: "transparent",
  lineHeight: "21px",
  "& :hover": {
    background: "transparent",
  },
  marginTop: 0,
  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
    position: "relative",
    zIndex: "10",
    left: "1rem",
    color: "#b8b8b8",
    "&:hover": {
      background: "transparent",
    },
  },
  "&.MuiCheckbox-root": {
    "&:hover": {
      background: "transparent",
    },
  },
}));

const Background = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "550px",
}));

const SignUpForm = styled("form")(({ theme }) => ({
  width: "38.5rem",
  background: "#fff",
  borderRadius: theme.shape.borderRadius,
  margin: "0 auto",
  padding: theme.spacing(4),
}));

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& svg": {
    width: "10rem",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(1.5),
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "1.5rem",
  lineHeight: "2.25rem",
  color: "#4C4859",
  marginBottom: theme.spacing(4),
}));

const StyledInput = styled(Input)(({ theme, error }) => ({
  height: "52px",
  marginBottom: theme.spacing(4.5),
  "& .MuiInputLabel-root": {
    color: theme.palette.text.primary,
  },
  "& .MuiInputBase-root": {
    borderColor: error ? "red" : theme.palette.grey[400],
  },
  "& .MuiFormHelperText-root": {
    textAlign: "start",
    color: "red",
  },
  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
    backgroundColor: "white",
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
      WebkitTextFillColor: theme.palette.text.primary,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  height: "52px",
  marginTop: theme.spacing(4.25),
  width: "100%",
}));

const StyledBtn = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  background: "none",
  gap: "0px",
  boxShadow: "none",
  width: "218px",
  padding: "24px 0",
  border: `1px solid ${theme.palette.grey[400]}`,
  justifyContent: "center",
  borderRadius: "8px",
  "&:hover": {
    background: "none",
  },
  "& p": {
    fontSize: "14px",
    color: theme.palette.text.secondary,
    width: "992px",
  },
  "& svg": {
    marginLeft: theme.spacing(1.5),
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginTop: theme.spacing(3),
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "21px",
  letterSpacing: "0.02em",
  color: theme.palette.text.secondary,
}));

const StyledLink = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "underline",
  cursor: "pointer",
  fontWeight: "bold",
}));
