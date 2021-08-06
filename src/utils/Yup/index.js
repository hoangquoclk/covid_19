import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  username: yup.string().trim().max(50, "Too long").min(2, "Too short"),
  password: yup.string().max(50, "Too long").min(2, "Too Short"),
});

export const SignUpSchema = yup.object().shape({
  username: yup.string().trim().max(50, "Too long").min(2, "Too short"),
  password: yup.string().max(50, "Too long").min(2, "Too Short"),
  confirmPassword: yup.string().max(50, "Too long").min(2, "Too Short"),
});
