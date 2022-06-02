import * as yup from "yup";

export const otpCodeSchema = yup.object({
  otpCode: yup.string().required("Vui lòng điền mã OTP"),
});
