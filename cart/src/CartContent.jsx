import React, { useEffect, useState } from 'react';
import { jwt, login } from './cart';

export default function CartContent() {
  const [token, setToken] = useState("");

  return <div>JWT: {token}</div>;
}
