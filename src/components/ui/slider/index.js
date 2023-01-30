import { LitElement, html } from 'lit';
import { when } from 'lit/directives/when.js';
import { styles } from './styles';
import BlazeSlider from 'blaze-slider';
import normalize from '/src/assets/styles/normalize.css';

export class Slider extends LitElement {
  static styles = [normalize, styles];

  static properties = {
    transitionDuration: { type: Number },
    includePagination: { type: Boolean },
    includeNavigation: { type: Boolean },
    autoplayInterval: { type: Number },
    enableAutoplay: { type: Boolean },
    slidesToShow: { type: Number },
    slotsCount: { type: Number },
    slideGap: { type: String },
    loop: { type: Boolean },
  };

  render() {
    return html`
      <div class="blaze-slider">
        <div class="blaze-container">
          <div class="blaze-track-container">
            <div class="blaze-track">${[...Array(this.slotsCount).keys([[]])].map((slotNumber) => html` <slot name=${slotNumber + 1}></slot> `)}</div>
          </div>

          ${when(
            this.includeNavigation,
            () => html`
              <!-- navigation buttons -->
              <div class="blaze-navigation">
                <button class="blaze-prev" @mouseenter=${this.handleBackground} @mouseleave=${this.handleBackground}>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    width="32px"
                    height="32px"
                    fill="#000000"
                    transform="matrix(-1, 0, 0, 1, 0, 0)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        class="Background"
                        style="fill:#ebebeb;"
                        d="M256,508C117.04,508,4,394.96,4,256S117.04,4,256,4s252,113.04,252,252S394.96,508,256,508z" />
                      <path
                        style="fill:#4a310a;"
                        d="M256,8c136.752,0,248,111.248,248,248S392.752,504,256,504S8,392.752,8,256S119.248,8,256,8 M256,0 C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0L256,0z" />
                      <g>
                        <polygon
                          style="fill:#4a310a;"
                          points="298.8,332.464 289.232,319.632 374.752,256 289.232,192.368 298.8,179.536 401.568,256 " />
                        <rect x="110.448" y="248" style="fill:#4a310a;" width="277.696" height="16" />
                      </g>
                    </g>
                  </svg>
                </button>
                <button class="blaze-next" @mouseenter=${this.handleBackground} @mouseleave=${this.handleBackground}>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    width="32px"
                    height="32px"
                    fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        class="Background"
                        style="fill:#ebebeb;"
                        d="M256,508C117.04,508,4,394.96,4,256S117.04,4,256,4s252,113.04,252,252S394.96,508,256,508z" />
                      <path
                        style="fill:#4a310a;"
                        d="M256,8c136.752,0,248,111.248,248,248S392.752,504,256,504S8,392.752,8,256S119.248,8,256,8 M256,0 C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0L256,0z" />
                      <g>
                        <polygon
                          style="fill:#4a310a;"
                          points="298.8,332.464 289.232,319.632 374.752,256 289.232,192.368 298.8,179.536 401.568,256 " />
                        <rect x="110.448" y="248" style="fill:#4a310a;" width="277.696" height="16" />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            `,
            () => html``
          )}
          ${when(
            this.includePagination,
            () => html`
              <!-- pagination container -->
              <div class="blaze-pagination"></div>
            `,
            () => html``
          )}
        </div>
      </div>
    `;
  }

  firstUpdated() {
    const el = this.shadowRoot.querySelector('.blaze-slider');

    new BlazeSlider(el, {
      all: {
        transitionDuration: this.transitionDuration,
        autoplayInterval: this.autoplayInterval,
        enableAutoplay: this.enableAutoplay,
        slidesToShow: this.slidesToShow,
        slideGap: this.slideGap,
        loop: this.loop,
      },
    });
  }

  handleBackground(event) {
    if (event.type === 'mouseenter') {
      event.target.querySelector('.Background').style.fill = 'white';
    } else {
      event.target.querySelector('.Background').style.fill = '#ebebeb';
    }
  }
}

customElements.define('sc-slider', Slider);
