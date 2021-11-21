import React, { useState } from "react";
import { useLoggedIn } from './cart';

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("maria");
  const [password, setPassword] = useState("123");

  if (!loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showLogin" />
      </span>
      {showLogin && (
        <div className="absolute p-5 border-4 border-blue-800" style={{
          width: 300,
          top: "2rem"
        }}>

        </div>
      )}
    </>
  );
}
