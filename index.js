import createRouter from "./router.js";
import { Home } from "./pages/home.js";
import { About } from "./pages/about.js";

const container = document.querySelector("#app");

const router = createRouter();

router.addRouter("#/", Home);
router.addRouter("#/about", About);

window.addEventListener("hashchange", () => {
  container.innerHTML = router.navigate();
});

container.innerHTML = router.navigate();
