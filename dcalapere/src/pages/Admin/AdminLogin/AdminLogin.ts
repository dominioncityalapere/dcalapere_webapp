import styled from "styled-components";
import { theme } from "../../../styles/theme";
import welcomeBg from "../../../assets/images/welcomeBg.png";

export const LoginContainer = styled.div`
  background-image: url(${welcomeBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;

  h1 {
    padding-top: 4rem;
  }

  .alert {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 0.1rem;
    border-radius: 1rem;
    font-weight: 500;
  }

  .alert.success {
    background: #e8f8ee;
    color: #0f7b3b;
    border: 0.1rem solid #7bd88f;
  }

  .alert.error {
    background: #fdecec;
    color: #c62828;
    border: 0.1rem solid #ef9a9a;
  }

  .alert.warning {
    background: #fff8e1;
    color: #8a6d00;
    border: 0.1rem solid #ffd54f;
  }

  .alert button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: inherit;
  }

  form {
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
    padding-top: 1rem;
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
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
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
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
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
    color: ${theme.colors.white};
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
