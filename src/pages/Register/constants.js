import * as Yup from "yup";

export const validationVolunteerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("Password Required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  firstName: Yup.string().required("First Name Required"),
  lastName: Yup.string().required("Last Name Required"),
});

export const validationOrganizationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  organizationName: Yup.string().required("Organization Name Required"),
  password: Yup.string()
    .required("Password Required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const interestsList = [
  "Art",
  "Sports",
  "Technology",
  "Music",
  "Cooking",
  "Travel",
  "Health",
  "Education",
  "Environment",
  "Fashion",
];

export const countries = [
  "Sri Lanka",
  "Afghanistan",
  "Albania",
  "Algeria",
  "India",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  // Add more countries as needed
];
