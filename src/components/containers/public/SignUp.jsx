import { Grid, Typography, styled } from "@mui/material";
import { Input } from "../../UI/input/Input";
import { Button } from "../../UI/button/Button";
import { Icons } from "../../../assets/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

export const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
  });

  return (
    <Background container>
      <SignUpForm onSubmit={formik.handleSubmit}>
        <Container>
          <Icons.Layer />
          <Title>Create an Account</Title>
          <StyledInput
            label="First Name"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <StyledInput
            label="Last Name"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
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
          <StyledButton variant="contained" type="submit">
            Sign Up
          </StyledButton>
          <StyledBtn variant="text">
            <Icons.Google />
            <p>Sign up with google</p>
          </StyledBtn>
          <StyledText>
            ALREADY HAVE AN ACCOUNT? <StyledLink>LOG IN</StyledLink>
          </StyledText>
        </Container>
      </SignUpForm>
    </Background>
  );
};

const Background = styled(Grid)(({ theme }) => ({
  background: "linear-gradient(90.76deg, #6B0FA9 0.74%, #520FB6 88.41%)",
  padding: theme.spacing(5),
}));

const SignUpForm = styled("form")(({ theme }) => ({
  width: "38.5rem",
  background: "#fff",
  borderRadius: theme.shape.borderRadius,
  margin: "0 auto",
  padding: theme.spacing(4),
}));

const Container = styled(Grid)(() => ({
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
  marginBottom: theme.spacing(2.5),
  "& .MuiInputLabel-root": {
    color: error ? "red" : theme.palette.text.primary,
  },
  "& .MuiInputBase-root": {
    borderColor: error ? "red" : theme.palette.grey[400],
  },
  "& .MuiFormHelperText-root": {
    textAlign: "center",
    color: "red",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  height: "52px",
  marginTop: theme.spacing(1.25),
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
