import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../services/FireBase";

const LogOut = () => {
  return (
    <Button
      size="small"
      onClick={() => {
        signOut(auth)
          .then(() => console.log("sucessful"))
          .catch((err) => console.log(err));
      }}
      variant="outlined"
    >
      Logout
    </Button>
  );
};

export default LogOut;
