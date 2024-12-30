import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANG } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showLangugeSelector = useSelector((store) => store.gpt.showgptSearch);

  const handgptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguagechange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

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
          {showLangugeSelector && (
            <div className="">
              <select
                className="bg-black text-white rounded-lg my-4 p-2 "
                onChange={handleLanguagechange}
              >
                {SUPPORTED_LANG.map((language) => (
                  <option
                    className=""
                    key={language.identifier}
                    value={language.identifier}
                  >
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div>
            <button
              className="bg-purple-800 text-white p-2 mx-2 mt-4 rounded-lg"
              onClick={handgptSearchClick}
            >
              {showLangugeSelector ? "Home Page" : "GPT Search"}
            </button>
          </div>
          <div>
            <img className="w-16 h-16 " alt="User-image" src={user?.photoURL} />
            <h1 className=" font-bold text-white">Hi, {user?.displayName}</h1>
          </div>

          <button
            className="mx-2 text-red-600 font-bold"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
