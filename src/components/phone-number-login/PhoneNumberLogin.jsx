import { useState } from "react";
// import { auth } from "../../firebase/base";
import { FormPhoneNumber } from "./FormPhoneNumber";
import { FormOtpCode } from "./FormOtpCode";

export const PhoneNumberLogin = () => {
  const [formPhoneNumber, setFormPhoneNumber] = useState(false);
  return (
    <>
      {!formPhoneNumber ? (
        <FormPhoneNumber
          formPhoneNumber={formPhoneNumber}
          setFormPhoneNumber={setFormPhoneNumber}
        />
      ) : (
        <FormOtpCode />
      )}
    </>
  );
};
