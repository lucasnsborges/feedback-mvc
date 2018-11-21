import { wire } from "hyperhtml";
import styles from "./card.less";

function handleOpen(evt) {
  const nodeName = evt.target.nodeName;

  if (nodeName != "INPUT" && nodeName != "BUTTON") {
    const el = this.querySelector(".card-more");
    const allEl = Array.from(this.parentElement.querySelectorAll(".card-more-visible"));

    if (!el.classList.contains("card-more-visible")) {
      allEl.map(el => el.classList.toggle("card-more-visible"));
    }

    el.classList.toggle("card-more-visible");
  }
}

function renderMore() {
  return wire()`
    <div class="card-more">
      <input placeholder="Escreva um cometário..." />
      <button class="card-more-button">Enviar</button>
    </div>
  `;
}

export default idea => {
  const color = `color:${idea.IdeaStatus.color}`;
  return wire(idea)`
    <div class="card-container" onclick=${handleOpen}>
      <div class="card-votes">
        <div class="card-votes-container">
          <span class="card-votes-count">${idea.voteCount}</span>
        </div>
      </div>

      <div class="card-content">
        <h1 class="card-title">${idea.title}</h1>
        <div class="card-status-wrapper">
          <span class="card-status" style="${color}">
            ${idea.IdeaStatus.icon}
            ${idea.IdeaStatus.name}
          </span>
        </div>

        <div class="card-description">
          <span>${idea.text}</span>
        </div>
        ${renderMore}
      </div>
    </div>
  `;
};
