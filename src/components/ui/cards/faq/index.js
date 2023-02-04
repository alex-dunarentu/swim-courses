import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { styles } from './styles';
import normalize from '/src/assets/styles/normalize.css';

export class FAQ extends LitElement {
  static styles = [styles, normalize];

  static properties = {
    question: { type: String },
    answer: { type: String },
    showAnswer: { type: Boolean },
  };

  render() {
    return html`
      <div class=${`FAQ ${this.showAnswer ? 'ShowAnswer' : ''}`}>
        <div class="Question" @click=${this.toggleAnswer}>
          <p>${this.question}</p>
          <div class="ArrowContainer">
            <span class="Arrow"></span>
          </div>
        </div>
        <div class="Answer">
          <div class="Divider"></div>
          <p>${unsafeHTML(this.answer)}</p>
        </div>
      </div>
    `;
  }

  toggleAnswer() {
    this.showAnswer = !this.showAnswer;

    let answer = this.shadowRoot.querySelector('.Answer');
    if (answer && this.showAnswer) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = 0;
    }
  }
}

customElements.define('sc-faq', FAQ);
