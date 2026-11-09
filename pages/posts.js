import { posts } from "../data/posts.js";

export function Posts(params) {
  return posts.map((post) => `<a href="#/posts/${post.id}">${post.title}</a><br>`).join("");
}
