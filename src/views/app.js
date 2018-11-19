import { wire } from "hyperhtml";
import renderHeader from "./header";
import styles from "./app.less";

const header = wire();

export default (html, ideas) => html`
  <div class="${styles.container}">${renderHeader(header, ideas)}</div>
`;
