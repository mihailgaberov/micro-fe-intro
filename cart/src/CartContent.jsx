import React, { useEffect, useState } from 'react';
import Login from "./Login";
import { jwt } from "./cart";

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    return jwt.subscribe(val => setToken(val ?? ""));
  }, []);

  return <>
    <Login />
    <div>JWT: {token}</div></>;
}
