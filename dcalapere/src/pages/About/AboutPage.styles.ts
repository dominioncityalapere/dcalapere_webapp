import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";

export const A = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const AboutContainer = styled.div`
  background: ${theme.colors.white};

  .aboutTitleContainer {
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

  .aboutContent {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 1rem;
    color: ${theme.colors.black};

    @media (min-width: 768px) {
      padding: 4rem 1rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      padding: 7rem 2rem;
    }

    .leftGridContentA {
      border: 0.2rem solid ${theme.colors.darkBg};
      padding: 3rem 1rem;
      margin-bottom: 2rem;
    }

    .leftGridContentB {
      border: 0.2rem solid ${theme.colors.darkBg};
      background: ${theme.colors.darkBg};
      color: ${theme.colors.white};
      padding: 3rem 1rem;
    }

    .rightGridContentContainer {
      img {
        width: 100%;
        padding-top: 2rem;

        @media (min-width: 1024px) {
          width: 50rem;
          padding-top: 0;
        }
      }

      .rightGridContentB {
        .pstIntro {
          text-align: justify;
          padding-top: 1rem;
        }
      }
    }
  }
`;
