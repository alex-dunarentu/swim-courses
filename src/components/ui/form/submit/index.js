import { LitElement, html } from "lit";

export class FormSubmit extends LitElement {
  static properties = {
    text: { type: String },
  };

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <button class="Button" type="submit">${this.text}</button>
    `;
  }
}

customElements.define("sc-form-submit", FormSubmit);
