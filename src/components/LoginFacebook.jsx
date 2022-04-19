import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase/base";

export const LoginFacebook = () => {
  const userFb = useSelector((state) => state.data.dataFacebook);
  const navigate = useNavigate();
  const handleLogOutWithFacebook = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <p>name: {userFb.displayName}</p>
      <p>email: {userFb.email}</p>
      <button onClick={handleLogOutWithFacebook}>Sign out Facebook</button>
    </>
  );
};
