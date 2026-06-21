import styled from "styled-components";
import { theme } from "../styles/theme";
import { Link } from "react-router-dom";

export const A = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${theme.colors.grey};

  @media (min-width: 768px) {
    width: fit-content;
  }

  &:hover {
    color: ${theme.colors.white};
  }
`;

export const Border = styled.div`
  border-bottom: 0.1rem solid ${theme.colors.borderLine};
  margin: auto 1rem;

  @media (min-width: 768px) {
    margin: auto 2rem;
  }

  @media (min-width: 1024px) {
    margin: auto 5rem;
  }
`;

export const BgColor = styled.div`
  background: ${theme.colors.darkBg};

  @media (min-width: 768px) {
  }
`;

export const FooterContentA = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
  padding: 2rem 1rem;
  color: ${theme.colors.white};
  text-align: left;

  .firstGrid {
    display: flex;
    flex-direction: column;
    line-height: 2;
    gap: 1rem;

    .dcLogo {
      width: 2rem;
      padding-right: 0.5rem;
    }

    .firstGridText {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .socialMediaIconsContainer {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    .fa-youtube,
    .fa-facebook,
    .fa-instagram {
      padding: 0.5rem;
      border-radius: 2rem;
      font-size: 1.1rem;
      transition: 0.3s ease;
      background: ${theme.colors.white};
      color: ${theme.colors.black};

      &:hover {
        color: ${theme.colors.white};
        background: transparent;
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: auto auto auto;
    padding: 5rem 2rem 2rem 2rem;
    justify-content: space-between;

    .full {
      grid-column: 1 / -1;
    }

    .socialMediaIconsContainer {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: auto auto auto auto;
    padding: 5rem 5rem 2rem 5rem;
    justify-content: none;

    .full {
      grid-column: auto;
    }
  }

  .secondGrid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .thirdGrid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .fourthGrid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) {
  }
`;

export const FooterContentB = styled.div`
  display: grid;
  grid-template-rows: auto;
  gap: 1rem;
  padding: 2rem 1rem;
  text-align: left;
  color: ${theme.colors.grey};

  .headerContentB {
    padding-bottom: 0.4rem;
    color: ${theme.colors.offWhite};
    font-weight: semi-bold;
  }

  @media (min-width: 768px) {
    grid-template-columns: auto auto auto;
    gap: 1rem;
    padding: 2rem 2rem;

    .headerContentB {
      padding-bottom: 1rem;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: auto auto auto auto;
    gap: 15rem;
    padding: 2rem 5rem;
  }
`;

export const FooterContentC = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 1rem;
  padding: 2rem 1rem;
  color: ${theme.colors.grey};

  .copyright {
    font-size: 0.97rem;
  }

  .textContentC {
    display: flex;
    gap: 1rem;
    justify-content: center;

    a {
      text-decoration: none;
      cursor: pointer;
      color: ${theme.colors.grey};

      &:hover {
        color: ${theme.colors.white};
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    padding: 2rem 2rem;
    justify-content: space-between;
    text-align: left;
  }

  @media (min-width: 1024px) {
    padding: 2rem 5rem;
  }
`;
