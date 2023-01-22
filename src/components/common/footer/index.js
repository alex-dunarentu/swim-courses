import { LitElement, html } from "lit";
import { styles } from "./styles";
import normalize from "/src/assets/styles/normalize.css";

export class Footer extends LitElement {
  static styles = [styles, normalize];

  render() {
    return html`<div class="Footer">© 2023 Cursuri înot TmT • v1.0.0</div>`;
  }
}

customElements.define("sc-footer", Footer);
