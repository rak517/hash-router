function createRouter() {
  let routes = [];

  const addRouter = (path, component) => {
    routes.push({ path, component });
  };

  const removeRouter = (path) => {
    routes = routes.filter((route) => route.path !== path);
  };

  return {
    addRouter,
    removeRouter,
  };
}
