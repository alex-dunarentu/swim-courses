import { css } from "lit";

export const styles = css`
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      left: -100%;
    }

    to {
      opacity: 1;
      left: 0;
    }
  }

  @keyframes fadeOutLeft {
    0% {
      opacity: 1;
      left: 0;
    }

    to {
      opacity: 0;
      left: -100%;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      z-index: -1;
    }

    to {
      opacity: 1;
      z-index: 98;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      z-index: 98;
    }

    to {
      opacity: 0;
      z-index: -1;
    }
  }

  .FadeOutLeft {
    animation-name: fadeOutLeft;
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }

  .FadeInLeft {
    animation-name: fadeInLeft;
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }

  .FadeIn {
    animation-name: fadeIn;
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }

  .FadeOut {
    animation-name: fadeOut;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    z-index: -1;
  }

  .Sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 99;
    top: 50px;
    width: 320px;
    left: -100%;
    bottom: 0;
    background-color: var(--off-white);
    gap: 10px;
  }

  #backdrop {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
    z-index: -1;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .fb-page {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
