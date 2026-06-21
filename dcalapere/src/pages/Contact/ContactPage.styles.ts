import styled from "styled-components";
import { theme } from "../../styles/theme";

export const A = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const ContactContainer = styled.div`
  background: ${theme.colors.white};

  .contactTitleContainer {
    background: ${theme.colors.darkBg};
    color: ${theme.colors.white};
    padding: 5rem 1rem 2rem 1rem;

    @media (min-width: 768px) {
      padding: 7rem 0 2rem 0;
    }

    @media (min-width: 1024px) {
      padding: 10rem 0 3rem 0;
    }

    .title {
      font-size: 2rem;
      font-weight: 800;
      padding-bottom: 1rem;

      @media (min-width: 768px) {
        font-size: 3.5rem;
        padding-bottom: 2rem;
      }

      @media (min-width: 1024px) {
        font-size: 4rem;
      }
    }
  }

  .contactContent {
    display: grid;
    grid-template-rows: 1fr 1fr;
    color: ${theme.colors.black};
    gap: 2rem;
    padding: 4rem 0 1rem 0;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      padding: 6rem 0 1rem 0;
    }

    @media (min-width: 1024px) {
      font-size: 1.3rem;
      line-height: 1.3;
    }

    .ccSubtitle {
      font-weight: bold;
    }
  }

  .followUsTitle {
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.colors.black};
    padding-top: 2.5rem;

    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  .socialMediaIconsContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0 4rem 0;

    .fa-youtube,
    .fa-facebook,
    .fa-instagram {
      padding: 0.5rem;
      border-radius: 2rem;
      font-size: 1.1rem;
      transition: 0.3s ease;
      background: ${theme.colors.black};
      color: ${theme.colors.white};

      &:hover {
        color: ${theme.colors.black};
        background: transparent;
      }
    }

    @media (min-width: 768px) {
      padding: 1rem 0 6rem 0;
    }
  }
`;

export const MapContainer = styled.div`
  margin: 0;
`;
