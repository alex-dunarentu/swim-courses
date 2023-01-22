import { css } from "lit";

export const styles = css`
  .Card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: var(--primary-white);
    box-shadow: 0 3px 5px rgb(0 0 0 / 18%);
    gap: 16px;
    color: var(--primary-black);
    transition: 180ms all ease-in;
  }

  .CardTitle {
    font-size: 22px;
    color: var(--beige-brown);
  }

  .CardDescription {
    font-size: 18px;
  }

  .Card:hover {
    transform: scale(1.01);
    box-shadow: 0 0 0 3px #966810;
  }
`;
