import createRouter from "./router.js";
import { Home } from "./pages/home.js";
import { About } from "./pages/about.js";
import { Posts } from "./pages/posts.js";

const container = document.querySelector("#app");

const router = createRouter(container);

router.addRouter("#/", Home);
router.addRouter("#/about", About);
router.addRouter("#/posts/:id", Posts);
router.listen();
