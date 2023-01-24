import { css } from "lit";

export const styles = css`
  .SidebarLink {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 50px;
    background-color: var(--primary-white);
    border: 2px solid var(--dark-brown);
    border-radius: 8px;
    color: var(--dark-brown);
    cursor: pointer;
    transition: 250ms all ease-in;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  .Active,
  .SidebarLink:hover {
    background-color: var(--dark-brown);
    color: var(--primary-white);
  }
`;
