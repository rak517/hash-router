export default function createRouter() {
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

  return {
    addRouter,
    removeRouter,
    navigate,
  };
}
