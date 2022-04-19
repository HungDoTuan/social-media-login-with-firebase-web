import { useState } from "react";
import { useNavigate } from "react-router";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../firebase/base";

export const PhoneNumberLogin = () => {
  const [expandForm, setExpandForm] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const generateRecapcha = () => {
    window.RecaptchaVerifier = new RecaptchaVerifier(
      "login-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
        },
      },
      auth
    );
  };
  const handleRequestOTP = (data) => {
    const phoneNumber = data.phoneNumber;
    if (phoneNumber.length < 14) {
      generateRecapcha();
      const appVerifier = window.RecaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmmationResult) => {
          setExpandForm(true);
          window.confimrmationResult = confirmmationResult;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleOtpCodeChange = (e) => {
    setOtpCode(e.target.value);
    console.log(otpCode);
    if (otpCode.length === 6) {
      let confirmmationResult = window.confimrmationResult;
      confirmmationResult
        .confirm(otpCode)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <form onSubmit={handleSubmit(handleRequestOTP)}>
      <input
        {...register("phoneNumber", {
          maxLength: 14,
        })}
      />
      {errors.phoneNumber?.type === "maxLength" && (
        <p>phone number must be less than 14</p>
      )}
      {!expandForm ? (
        <button id="login-button" type="submit">
          Request OTP
        </button>
      ) : (
        <input value={otpCode} onChange={handleOtpCodeChange} />
      )}
    </form>
  );
};
