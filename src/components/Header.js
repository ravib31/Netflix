import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  //  console.log(user.photoURL);

  const handleSignOut = () => {
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full absolute px-14 py-6 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row  justify-between ">
      <img className="w-40 md:mx-0 mx-auto" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2  m-2  bg-gray-600 text-white rounded-lg "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          ;
          <button
            className="py-2 px-4 mx-4 my-2 bg-red-600 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12 rounded-full"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold py-2 px-8 md:px-4 mx-4 my-2 text-white bg-red-600 rounded-lg">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
