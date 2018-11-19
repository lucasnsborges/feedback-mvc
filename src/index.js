import { bind as hyper, wire } from "hyperhtml";
import controller from "./controllers/ideas";

const app = wire();
const html = hyper(document.querySelector("#__wrapper__"));
const getApp = () => require("./views/app").default;

const render = renderApp => {
  controller.init(ideas => html`${renderApp(app, ideas)}`);
  controller.update();
};

if (module.hot) {
  module.hot.accept("./views/app", () => render(getApp()));
}

render(getApp());
