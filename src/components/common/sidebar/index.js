import { LitElement, html } from 'lit';
import { styles } from './styles';

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
      { url: '/', title: 'Acasă' },
      { url: '/despre/', title: 'Despre' },
      { url: '/tarife/', title: 'Tarife' },
      { url: '/intrebari-frecvente/', title: 'Întrebări Frecvente' },
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
      <style>
        ${styles}
      </style>
    `;
  }

  firstUpdated() {
    this.backdrop = document.getElementById('backdrop');
    this.sidebar = document.getElementById('sidebar');
    this.menu = document.querySelector('sc-header').menu;
  }

  toggleSidebar() {
    this.menu.classList.toggle('Active');

    if (this.sidebar.classList.contains('FadeInLeft')) {
      this.sidebar.classList.remove('FadeInLeft');
      this.backdrop.classList.remove('FadeIn');

      this.sidebar.classList.add('FadeOutLeft');
      this.backdrop.classList.add('FadeOut');
      document.body.style.overflow = 'auto';
    } else {
      this.sidebar.classList.remove('FadeOutLeft');
      this.backdrop.classList.remove('FadeOut');

      this.sidebar.classList.add('FadeInLeft');
      this.backdrop.classList.add('FadeIn');
      document.body.style.overflow = 'hidden';
    }
  }
}

customElements.define('sc-sidebar', Sidebar);
