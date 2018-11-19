import { wire } from "hyperhtml";
import controller from "../controllers/ideas";
import styles from "./header.less";

export default html => html`
  <header class="${styles.container}">
    <div class="header-content">
      <div class="logo">
        <a href="#">
          <img
            class="header-logo-img"
            src="https://pic.pimg.tw/asemia623/1464329611-2882284184.png"
            alt="Marvel"
          />
        </a>
      </div>

      <ul class="header-menu-items">
        <li><a class="header-active" href="/public">Feature requests</a></li>
        <li><a href="/public">Changelog</a></li>
      </ul>
    </div>
  </header>
`;
