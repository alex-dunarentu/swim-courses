import { LitElement, html } from "lit";
import { styles } from "./styles";

export class Sidebar extends LitElement {

  static properties = {
    links: { type: Array },
  };

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.links = [
      { url: "/", title: "Acasă" },
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
        <div class="fb-page" data-href="https://www.facebook.com/CursurideinotTmT/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/CursurideinotTmT/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/CursurideinotTmT/">Cursuri Înot TmT</a></blockquote></div>
      </div>
      <div id="backdrop" @click=${this.toggleSidebar}></div>
      <style>
        ${styles}
      </style>
    `;
  }

  firstUpdated() {
    this.backdrop = document.getElementById("backdrop");
    this.sidebar = document.getElementById("sidebar");
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
