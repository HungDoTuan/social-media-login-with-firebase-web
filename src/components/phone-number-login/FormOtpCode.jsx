import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { otpCodeSchema } from "./schema/otpCode.schema";

export const FormOtpCode = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(otpCodeSchema),
  });
  const onSubmitOtpCode = (data) => {
    console.log(data);
    let confirmationResult = window.confimrmationResult;
    confirmationResult
      .confirm(data.otpCode)
      .then(() => console.log("success"))
      .catch(() => console.log("failed"));
  };
  return (
    <form onSubmit={handleSubmit(onSubmitOtpCode)}>
      <input type="text" {...register("otpCode")} />
      {errors.otpCode && <text>{errors.otpCode.message}</text>}
      <button>Đăng nhập</button>
    </form>
  );
};
