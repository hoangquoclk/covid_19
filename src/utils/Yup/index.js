import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  username: yup.string().trim().max(50, "Too long").min(2, "Too short"),
  password: yup.string().max(50, "Too long").min(2, "Too Short"),
});

// export const EditSchema = yup.object().shape({
//   firstName: yup.string().trim().max(20, "Too long").min(2, "Too Short"),
//   lastName: yup.string().trim().max(20, "Too long").min(2, "Too Short"),
//   address: yup.string().trim().max(20, "Too long").min(2, "Too Short"),
//   city: yup.string().trim().max(20, "Too long").min(2, "Too Short"),
// });
