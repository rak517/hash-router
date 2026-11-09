import createRouter from "./router.js";
import { Home } from "./pages/home.js";
import { About } from "./pages/about.js";
import { Posts } from "./pages/posts.js";
import { Post } from "./pages/post.js";

const container = document.querySelector("#app");

const router = createRouter(container);

router.addRouter("#/", Home);
router.addRouter("#/about", About);
router.addRouter("#/posts", Posts);
router.addRouter("#/posts/:id", Post);
router.listen();
