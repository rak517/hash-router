export default function createRouter(container) {
  let routes = [];

  const addRouter = (path, component) => {
    routes.push({ path, component });
  };

  const removeRouter = (path) => {
    routes = routes.filter((route) => route.path !== path);
  };

  const navigate = () => {
    const currentRoute = routes.find((route) => route.path === window.location.hash);

    return currentRoute.component();
  };

  const listen = () => {
    window.addEventListener("hashchange", () => {
      container.innerHTML = navigate();
    });

    container.innerHTML = navigate();
  };

  return {
    addRouter,
    removeRouter,
    listen,
    navigate,
  };
}
