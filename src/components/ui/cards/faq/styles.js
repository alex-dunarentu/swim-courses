import { css } from 'lit';

export const styles = css`
  .FAQ {
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #dee2e6;
  }

  .Answer {
    max-height: 0;
    overflow: hidden;
    transition: all 300ms ease;
  }

  .Question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    font-weight: 600;
    font-size: 22px;
    color: var(--primary-black);
    cursor: pointer;
  }

  .Divider {
    margin: 20px 0;
    border-top: 1px solid #dee2e6;
  }

  .ArrowContainer {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ShowAnswer .Arrow {
    transform: rotate(45deg) translate(-5px, -5px);
  }

  .ShowAnswer .Arrow:before {
    transform: translate(10px, 0);
  }

  .ShowAnswer .Arrow:after {
    transform: rotate(90deg) translate(10px, 0);
  }

  .Arrow {
    width: 13px;
    height: 13px;
    display: inline-block;
    position: relative;
    bottom: -3px;
    left: -6px;
    transition: 0.4s ease;
    margin-top: 2px;
    text-align: left;
    transform: rotate(45deg);
  }

  .Arrow:before,
  .Arrow:after {
    position: absolute;
    content: '';
    display: inline-block;
    width: 12px;
    height: 3px;
    background-color: var(--primary-black);
    transition: 0.4s ease;
  }

  .Arrow:after {
    position: absolute;
    transform: rotate(90deg);
    top: -5px;
    left: 5px;
  }
`;
