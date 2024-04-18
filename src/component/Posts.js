import { useContext } from "react";
import { List } from "./List";
import { PostContext } from "../context/PostProvider";

export function Posts() {
  const { posts } = useContext(PostContext);
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
