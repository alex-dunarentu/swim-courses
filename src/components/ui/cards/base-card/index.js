import { LitElement, html } from "lit";
import { styles } from "./styles";
import normalize from "/src/assets/styles/normalize.css";

export class Card extends LitElement {
  static styles = [styles, normalize];

  static properties = {
    url: { type: String },
    title: { type: String },
    description: { type: String },
  };

  render() {
    return html`
      <a class="Card" href=${this.url}>
        <span class="CardTitle">${this.title} </span>
        <span class="CardDescription">${this.description} </span>
      </a>
    `;
  }
}

customElements.define("sc-card", Card);
