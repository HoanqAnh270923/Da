import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Learn } from "../pages/Learn";
import config from "../config";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.about, component: About },
  { path: config.routes.learn, component: Learn },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
