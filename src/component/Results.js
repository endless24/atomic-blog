import { useContext } from "react";
import { PostContext } from "../context/PostProvider";

export function Results() {
  const { posts } = useContext(PostContext);
  return <p>🚀 {posts.length} atomic posts found</p>;
}
