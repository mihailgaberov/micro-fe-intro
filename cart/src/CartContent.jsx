import React, { useEffect, useState } from 'react';
import Login from "./Login";
import { jwt } from "./cart";
import MiniCart from "./MiniCart";

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    return jwt.subscribe(val => setToken(val ?? ""));
  }, []);

  return <>
    <Login />
    <MiniCart />
    <div>JWT: {token}</div></>;
}
