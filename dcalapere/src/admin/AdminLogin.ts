import styled from "styled-components";

export const PrimaryColor = "#072ac8";
export const WhiteColor = "#FFFFFF";
export const OffWhiteColor = "#f9fafb";
export const GreyColor = "#777777";
export const BlackColor = "#000000";
export const YellowColor = "#CA8A04";

export const LoginContainer = styled.div`
  background: ${PrimaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  form {
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
    padding-top: 0.6rem;
    width: 100%;

    @media (min-width: 768px) {
      grid-template-columns: auto;
      row-gap: 1rem;
      column-gap: 2rem;
      padding-top: 1rem;
    }

    @media (min-width: 1024px) {
      padding-top: 2rem;
    }
  }

  input {
    background-color: ${WhiteColor};
    color: ${BlackColor};
    border: 0.1rem solid #d1d5db;
    padding: 0.9rem 1rem;
    border-radius: 0.7rem;
    outline: none;
    font-size: 1rem;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #072ac8;
      box-shadow: 0 0 0 3px rgba(7, 42, 200, 0.15);
    }
  }

  button {
    background-color: ${BlackColor};
    color: ${WhiteColor};
    outline: none;
    border-radius: 0.7rem;
    padding: 0.8rem 1rem;
    cursor: pointer;
    font-size: 0.7rem;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .adminHeader {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${WhiteColor};
    font-size: 1.4rem;
  }

  img {
    width: 2rem;
  }

  @media (min-width: 768px) {
    .adminHeader {
      gap: 1rem;
      font-size: 1.4rem;
    }
  }
`;
