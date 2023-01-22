import { LitElement, html } from "lit";
import { styles } from "./styles.js";
import normalize from "/src/assets/styles/normalize.css";

export class Header extends LitElement {
  static styles = [styles, normalize];

  render() {
    return html`
      <div class=${`Header ${location.pathname === "/" ? "Hidden" : ""}`}>
        <svg id="menu" width="300" height="300" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg" @click=${this.handleClick} class="">
          <g transform="matrix(1,0,0,1,-389.5,-264.004)">
            <g id="arrow_left2">
              <g transform="matrix(1,0,0,1,0,5)">
                <path id="top" d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"></path>
              </g>
              <g transform="matrix(1,1.22465e-16,1.22465e-16,-1,0.00024296,564.935)">
                <path id="bottom" d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"></path>
              </g>
              <path id="middle" d="M390,284.967L420,284.967"></path>
            </g>
          </g>
        </svg>
        <a class="Logo" href="/">
          <img src="/assets/images/logo.svg" alt="Logo" />
        </a>
      </div>
    `;
  }

  firstUpdated() {
    this.menu = this.shadowRoot.getElementById("menu");
  }

  handleClick() {
    document.querySelector("sc-sidebar").toggleSidebar();
  }
}
customElements.define("sc-header", Header);
