import { LitElement, html } from "lit";

export class FormTextarea extends LitElement {
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
      <textarea
        class="Textarea"
        ?required=${this.required}
        placeholder=${this.placeholder}
        type=${this.type}
        id=${this.type}
        name=${this.type}
      ></textarea>
    `;
  }
}

customElements.define("sc-form-textarea", FormTextarea);
