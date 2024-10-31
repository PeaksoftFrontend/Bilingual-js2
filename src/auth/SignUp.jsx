import { Box, styled } from "@mui/material";
import { Input } from "../components/UI/input/Input";
import { Button } from "../components/UI/button/Button";
import { Icons } from "../assets/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UiModal } from "../components/UI/modal/UiModal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openSignInModal, setRole } from "../store/slices/auth/authSlice";
import { SignUpForm, StyledBtn, StyledLink, StyledText, Title } from "./SignIn";

export const SignUp = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        .matches(
          /^[\w.%+-]+@gmail\.com$/,
          "Email must be a valid gmail.com address"
        )
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      const { email } = values;
      if (email === "admin@gmail.com") {
        dispatch(setRole("ADMIN"));
        navigate("/admin");
      } else {
        dispatch(setRole("USER"));
        navigate("/user");
      }
    },
  });

  const handleSwitchSignIn = () => {
    dispatch(openSignInModal());
  };

  return (
    <UiModal open={open} onClose={onClose} role={"ADMIN"}>
      <Background>
        <SignUpForm onSubmit={formik.handleSubmit}>
          <Container>
            <div>
              <Icons.Layer />
            </div>
            <Title>Create an Account</Title>
            <StyledInput
              label="First Name"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
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
              ALREADY HAVE AN ACCOUNT?
              <StyledLink onClick={handleSwitchSignIn}>LOG IN</StyledLink>
            </StyledText>
          </Container>
        </SignUpForm>
      </Background>
    </UiModal>
  );
};

const Background = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "640px",
}));

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& svg": {
    width: "10rem",
  },
}));

const StyledInput = styled(Input)(({ theme, error }) => ({
  height: "52px",
  marginBottom: theme.spacing(4.1),
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
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 100px white inset",
    WebkitTextFillColor: theme.palette.text.primary,
  },
  "& input:-moz-autofill": {
    backgroundColor: "white",
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-root": {
    paddingLeft: "0px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  height: "52px",
  marginTop: theme.spacing(1.25),
  width: "100%",
}));
