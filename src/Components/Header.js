import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO } from "../Utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();
        //console.log(user);
        const { uid, displayName, email, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-screen absolute py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 ml-4" src={LOGO} alt="netflix" />

      {user && (
        <div className="flex mx-4">
          <div>
            <img className="w-16 h-16 " alt="User-image" src={user?.photoURL} />
            <h1 className=" font-bold">Hi, {user?.displayName}</h1>
          </div>

          <button className="text-red-600 font-bold" onClick={handleSignout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
