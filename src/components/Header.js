import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/Constants";

const Header = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate();
   const user = useSelector((store) =>store.user);
  //  console.log(user.photoURL);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

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
          navigate("/browse")
          // ...
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
      // unsubscribe when component unmount
      return () => unsubscribe();
    }, []);
  
  return (
    <div className="w-full absolute px-14 py-6 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40"
        src={LOGO}
        alt="logo"
      />
      {user && (<div className="flex p-2">
        <img className="w-12 h-12 rounded-full" alt="userIcon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>
      )}
    </div>
  );
};

export default Header;
