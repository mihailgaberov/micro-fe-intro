import React, { useEffect, useState } from 'react';
import { jwt, login } from './cart';

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    login("maria", "123");
    return jwt.subscribe(val => setToken(val ?? ""));
  }, []);

  return <div>JWT: {token}</div>;
}
