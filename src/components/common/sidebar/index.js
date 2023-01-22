import { LitElement, html } from "lit";
import { styles } from "./styles";
import normalize from "/src/assets/styles/normalize.css";

export class Sidebar extends LitElement {
  static styles = [styles, normalize];

  static properties = {
    links: { type: Array },
  };

  constructor() {
    super();
    this.links = [
      { url: "/despre/", title: "Despre" },
      { url: "/program/", title: "Program" },
      { url: "/tarife/", title: "Tarife" },
    ];
  }

  render() {
    return html`
      <div class="Sidebar" id="sidebar">
        ${this.links.map(
          (link, index) => html` <sc-sidebar-link url=${link.url} title=${link.title} id=${`sidebar-link-${index}`}></sc-sidebar-link> `
        )}
      </div>
      <div id="backdrop" @click=${this.toggleSidebar}></div>
    `;
  }

  firstUpdated() {
    this.backdrop = this.shadowRoot.getElementById("backdrop");
    this.sidebar = this.shadowRoot.getElementById("sidebar");
    this.menu = document.querySelector("sc-header").menu;
  }

  toggleSidebar() {
    this.menu.classList.toggle("Active");

    if (this.sidebar.classList.contains("FadeInLeft")) {
      this.sidebar.classList.remove("FadeInLeft");
      this.backdrop.classList.remove("FadeIn");

      this.sidebar.classList.add("FadeOutLeft");
      this.backdrop.classList.add("FadeOut");
      document.body.style.overflow = "auto";
    } else {
      this.sidebar.classList.remove("FadeOutLeft");
      this.backdrop.classList.remove("FadeOut");

      this.sidebar.classList.add("FadeInLeft");
      this. backdrop.classList.add("FadeIn");
      document.body.style.overflow = "hidden";
    }
  }
}

customElements.define("sc-sidebar", Sidebar);
