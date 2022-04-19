import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/base";

export const LoginGoogle = () => {
  const dataGoogle = useSelector((state) => state.data.dataGoogle);
  const navigate = useNavigate();
  const handleLogOutWithGoogle = () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <p>name: {dataGoogle?.displayName}</p>
      <p>email: {dataGoogle?.email}</p>
      <button onClick={handleLogOutWithGoogle}>Log Out</button>
    </div>
  );
};
