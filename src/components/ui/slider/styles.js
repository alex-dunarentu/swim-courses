import { css } from "lit";

export const styles = css`
  .blaze-slider {
    --slides-to-show: 1;
    --slide-gap: 20px;
    direction: ltr;
  }

  .blaze-container {
    position: relative;
  }

  .blaze-track-container {
    overflow: hidden;
  }

  .blaze-track {
    will-change: transform;
    touch-action: pan-y;
    display: flex;
    gap: var(--slide-gap);
    --slide-width: calc((100% - (var(--slides-to-show) - 1) * var(--slide-gap)) / var(--slides-to-show));
    box-sizing: border-box;
  }

  .blaze-track > * {
    box-sizing: border-box;
    width: var(--slide-width);
    min-height: 100%;
    flex-shrink: 0;
  }

  .blaze-prev,
  .blaze-next {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    outline: none;
    padding: 12px;
  }

  .Background {
    transition: all 300ms ease;
  }

  .blaze-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;
