import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate=useNavigate();
   const user = useSelector((store) =>store.user);
  //  console.log(user.photoURL);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="w-screen absolute px-14 py-6 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="logo"
      />
      {user && (<div className="flex p-2">
        <img className="w-12 h-12 rounded-full" alt="userIcon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className="font-bold">(Sign Out)</button>
      </div>
      )}
    </div>
  );
};

export default Header;
