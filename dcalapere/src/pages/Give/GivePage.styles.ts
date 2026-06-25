import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";
import welcomeBg from "../../assets/images/welcomeBg.png";

export const A = styled(Link)`
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  border-radius: 2rem;
  border: 0.1rem solid ${theme.colors.white};

  &:hover {
    background: transparent;
    color: ${theme.colors.white};
  }
`;

export const GiveContainer = styled.div`
  background: ${theme.colors.white};

  .desktopBreak {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .tabBreak {
    @media (min-width: 768px) {
      display: block;
    }
  }

  .contactTitleContainer {
    background: ${theme.colors.darkBg};
    color: ${theme.colors.white};
    padding: 5rem 1rem 2rem 1rem;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      padding: 7rem 0 2rem 0;
      font-size: 1rem;
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

  .bibleQuoteContainer {
    background: ${theme.colors.offWhite};
    color: ${theme.colors.black};
    padding: 2.5rem 1rem;

    @media (min-width: 768px) {
      padding: 4rem 2rem;
    }

    @media (min-width: 1024px) {
      padding: 5rem 0;
    }

    .bibleVerse {
      font-family: "Merriweather", serif;
      font-size: 1.3rem;
      line-height: 1.3;
      padding: 1rem 0;

      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
    }

    .bookOfTheBible {
      font-weight: 800;
      font-size: 0.85rem;
    }

    .bibleVersion {
      color: ${theme.colors.grey};
      font-size: 0.85rem;
    }
  }

  .accountContainer {
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: 2.5rem 0.5rem;

    @media (min-width: 768px) {
      padding: 4rem 1rem;
    }

    @media (min-width: 1024px) {
      padding: 5rem 0;
    }

    .title {
      font-size: 1.4rem;
      font-weight: 800;
      padding-bottom: 0.5rem;

      @media (min-width: 768px) {
        font-size: 2rem;
        padding-bottom: 1rem;
      }
    }

    .accountBoxGrid {
      display: grid;
      //   grid-template-rows: 1fr;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      width: fit-content;
      margin: 0 auto;
      padding-top: 3rem;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      .accountDetailsContainer {
        background: ${theme.colors.white};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        padding-left: 1.5rem;
        border-radius: 1rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        width: fit-content;
        margin: 0 auto;

        font-size: 1.5rem;
        line-height: 1.3;
      }
    }
  }

  .questionContainer {
    background-image: url(${welcomeBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${theme.colors.white};
    padding: 3.5rem 1rem;

    @media (min-width: 768px) {
      padding: 4rem 2rem;
    }

    @media (min-width: 1024px) {
      padding: 5rem 0;
    }

    .questionTitle {
      font-size: 1.4rem;
      font-weight: 800;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

    .questionDetail {
      padding: 1.5rem 0 2.5rem 0;

      @media (min-width: 768px) {
        padding: 2.5rem 0 3.5rem 0;
      }
    }
  }
`;
