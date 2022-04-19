// import { useState } from "react";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { addDataGoogle, addDataFacebook } from "../redux/reducer";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/base";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        navigate("/google-account");
        onAuthStateChanged(auth, (user) => {
          dispatch(addDataGoogle(user));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLoginWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        dispatch(addDataFacebook(res._tokenResponse));
        navigate("/facebook-account");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLoginWithPhoneNumber = () => {
    navigate("/phone-number-log-in");
  };
  return (
    <>
      <button onClick={handleLoginWithFacebook}>Login Facebook</button>
      <button onClick={handleLoginWithGoogle}>Login Google</button>
      <button onClick={handleLoginWithPhoneNumber}>
        Login with your phone number
      </button>
    </>
  );
};
