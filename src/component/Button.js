import React from "react";
import { PostContext } from "../context/PostProvider";
import { useContext } from "react";

export default function Button() {
  const { isFakeDark, setIsFakeDark } = useContext(PostContext);

  return (
    <button
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}
