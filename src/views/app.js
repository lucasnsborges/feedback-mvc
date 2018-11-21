import { wire } from "hyperhtml";
import renderHeader from "./header";
import renderCard from "./card";
import styles from "./app.less";

function renderMakeSuggestion() {
  return wire()`
    <div class="app-idea">
      <p>Envie ideias de novos recursos para implmentações futuras</p>
      <button class="app-button-idea">Nova ideia</button>
    </div>
  `;
}

export default (html, ideas) => html`
  <div class="${styles.container}">
    ${renderHeader(wire())}
    <div class="app-content">
      <div class="app-feed">${ideas.map(renderCard)}</div>
      <div class="app-make-suggestion">${renderMakeSuggestion()}</div>
    </div>
  </div>
`;
