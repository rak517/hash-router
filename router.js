import { ROUTE_PARAMETER_REGEXP, URL_REGEXP } from "./constants.js";

export default function createRouter(container) {
  let routes = [];

  const addRouter = (path, component) => {
    const params = [];

    const parsed = path.replace(ROUTE_PARAMETER_REGEXP, (_, paramName) => {
      params.push(paramName);
      return URL_REGEXP;
    });
    routes.push({ fragmentRegExp: new RegExp(`^${parsed}$`), component, params });
  };

  const navigate = () => {
    const urlParams = {};
    const currentRoute = routes.find((route) => route.fragmentRegExp.test(window.location.hash));

    if (currentRoute === undefined) {
      window.location.hash = "#/";

      return navigate();
    }

    const matches = window.location.hash.match(currentRoute.fragmentRegExp);
    currentRoute.params.forEach((paramName, index) => {
      urlParams[paramName] = matches[index + 1];
    });

    return currentRoute.component(urlParams);
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
