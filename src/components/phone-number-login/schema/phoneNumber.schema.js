import * as yup from "yup";

export const phoneNumberSchema = yup.object({
  phoneNumber: yup.string().required("Vui lòng điền số điện thoại!"),
});
