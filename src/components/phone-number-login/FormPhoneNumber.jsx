import { useForm } from "react-hook-form";
// import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  // getAuth,
} from "firebase/auth";
import { auth } from "../../firebase/base";
import { phoneNumberSchema } from "./schema/phoneNumber.schema";

export const FormPhoneNumber = ({ formPhoneNumber, setFormPhoneNumber }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(phoneNumberSchema),
  });
  // const auth = getAuth();
  const generateRecapcha = () => {
    window.RecaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
        },
      },
      auth
    );
  };
  const onSubmitPhoneNumber = (data) => {
    const phoneNumber = data.phoneNumber;
    generateRecapcha();
    const appVerifier = window.RecaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmmationResult) => {
        window.confimrmationResult = confirmmationResult;
        setFormPhoneNumber(!formPhoneNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmitPhoneNumber)}>
      <input placeholder="Số điện thoại" {...register("phoneNumber")} />
      {errors.phoneNumber && <text>{errors.phoneNumber.message}</text>}
      <button type="submit" id="sign-in-button">
        Nhận mã OTP
      </button>
    </form>
  );
};
