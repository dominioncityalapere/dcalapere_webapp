import styled from "styled-components";

export const PrimaryColor = "#072ac8";
export const WhiteColor = "#FFFFFF";
export const OffWhiteColor = "#f9fafb";
export const GreyColor = "#777777";
export const BlackColor = "#000000";
export const YellowColor = "#CA8A04";
export const BorderLineColor = "rgba(158, 179, 194, 0.2)";

export const AdminContainer = styled.div`
  background: ${PrimaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;

  form {
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
    padding-top: 0.6rem;
    width: 100%;

    @media (min-width: 768px) {
      grid-template-columns: auto auto;
      row-gap: 1rem;
      column-gap: 2rem;
      padding-top: 1rem;

      .full {
        grid-column: 1 / -1;
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    @media (min-width: 1024px) {
      width: 50%;
      padding-top: 2rem;
    }
  }

  .border {
    border: 0.3rem solid ${BorderLineColor};
    width: 100%;
    margin-top: 4rem;
  }

  input {
    background-color: ${WhiteColor};
    color: ${BlackColor};
    border: 0.1rem solid #d1d5db;
    padding: 0.9rem 1rem;
    border-radius: 0.7rem;
    outline: none;
    font-size: 1rem;
    width:;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #072ac8;
      box-shadow: 0 0 0 3px rgba(7, 42, 200, 0.15);
    }
  }

  .eventTitle {
    width: 100%;
  }

  textarea {
    background-color: ${WhiteColor};
    color: ${BlackColor};
    border: 0.1rem solid #d1d5db;
    padding: 0.9rem 1rem;
    border-radius: 0.7rem;
    outline: none;
    resize: none;
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
      width: fit-content;
      font-size: 0.8rem;
    }
  }
`;

export const Header = styled.div`
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
