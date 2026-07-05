import styled from "styled-components";
import { theme } from "../../../styles/theme";
import welcomeBg from "../../../assets/images/welcomeBg.png";
import { Link } from "react-router-dom";


export const WhiteColor = "#FFFFFF";

export const A = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`;

export const AdminContainer = styled.div`
  background-image: url(${welcomeBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  color: ${theme.colors.white};
  text-align: left;

  .uploadContainer {
    display: grid;
    grid-template-rows: 1fr;
    gap: 1rem;
    text-align: center;
    padding: 1rem 0;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      padding: 3rem 0;
    }

    .upload {
      background-color: ${theme.colors.black};
      padding: 2rem;
      border: 0.1rem solid ${theme.colors.white};
      border-radius: 1rem;
      font-size: 1.5rem;
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
