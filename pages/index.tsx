import React, { useEffect } from "react";
import { playround } from "../playround";

function Home() {
  const message: string = "world";
  useEffect(() => {
    playround();
  }, []);
  return <div>Hello {message}</div>;
}

export default Home;
