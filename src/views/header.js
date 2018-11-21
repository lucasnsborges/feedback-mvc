import styles from "./header.less";

export default html => html`
  <header class="${styles.container}">
    <div class="header-content">
      <div class="logo">
        <a href="#">
          <img class="header-logo-img" src="../../assets/logo.png" alt="Friday" />
        </a>
      </div>

      <ul class="header-menu-items">
        <li><a class="header-active" href="/public">Feature requests</a></li>
        <li><a href="/public">Changelog</a></li>
      </ul>
    </div>
  </header>
`;
