import { LitElement, html } from "lit";

export class Input extends LitElement {
  static properties = {
    required: { type: Boolean },
    placeholder: { type: String },
    type: { type: String },
  };

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <input class="Input" ?required=${this.required} placeholder=${this.placeholder} type=${this.type} id=${this.type} name=${this.type} />
    `;
  }
}

customElements.define("sc-form-input", Input);
