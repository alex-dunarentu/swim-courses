import { css } from "lit";

export const styles = css`
  .Header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: var(--off-white);
    box-shadow: 0 3px 5px rgb(0 0 0 / 18%);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Logo {
    max-height: 100%;
    width: auto;
  }

  #menu {
    fill-rule: evenodd;
    clip-rule: evenodd;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 1.5;
    cursor: pointer;
    height: 40px;
    width: auto;
    position: absolute;
    left: 15px;
    top: 5px;
  }

  #menu path {
    fill: none;
    stroke: var(--gray);
    stroke-width: 1px;
  }

  #top,
  #bottom {
    stroke-dasharray: 30, 75.39;
    transition: all 0.6s cubic-bezier(0.6, 0.33, 0.67, 1.29);
  }

  #menu.Active #top,
  #menu.Active #bottom {
    stroke-dasharray: 75.39;
    stroke-dashoffset: -60;
  }

  .Logo > img {
    height: 30px;
    width: auto;
  }

  .Hidden {
    display: none;
  }
`;
