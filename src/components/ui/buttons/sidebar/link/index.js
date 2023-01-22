import { LitElement, html } from "lit";
import { styles } from "./styles";
import normalize from "/src/assets/styles/normalize.css";

export class SidebarLink extends LitElement {
  static styles = [styles, normalize];

  static properties = {
    url: { type: String },
    title: { type: String },
  };

  render() {
    return html`<a class=${`SidebarLink ${location.pathname === this.url ? "Active" : ""}`} href=${this.url}> ${this.title} </a>`;
  }
}

customElements.define("sc-sidebar-link", SidebarLink);
