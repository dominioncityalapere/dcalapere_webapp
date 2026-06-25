import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";
import welcomeBg from "../../assets/images/welcomeBg.png";

export const PlanContainer = styled.div`
  background: ${theme.colors.white};

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

  .expectContainer {
    color: ${theme.colors.black};
    padding: 0 1rem;

    @media (min-width: 768px) {
      padding: 0 2rem;
    }

    @media (min-width: 1024px) {
      padding: 0 10rem;
    }

    .expectTitle {
      font-size: 1.5rem;
      font-weight: 800;
      padding: 4rem 0 0.5rem 0;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

    .desktopBreak {
      display: none;

      @media (min-width: 1024px) {
        display: block;
      }
    }

    .expectContentContainer {
      display: grid;
      grid-template-rows: auto;
      gap: 2rem;
      text-align: left;
      padding: 4rem 0;
      font-size: 0.9rem;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      .eachExpectContent {
        background: ${theme.colors.offWhite};
        padding: 2rem;
        border-radius: 2rem;

        .eachExpectContentTitle {
          font-weight: bold;
          font-size: 1.2rem;
          padding: 0.8rem 0;
        }
      }
    }
  }

  //  SERVICE TIME

  .serviceTimeContainer {
    background: ${theme.colors.darkBg};
    color: ${theme.colors.white};

    .serviceTimeTitle {
      font-size: 1.5rem;
      font-weight: 800;
      padding: 4rem 0 0.5rem 0;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

    .serviceTimeContentContainer {
      color: ${theme.colors.black};
      display: grid;
      grid-template-rows: 1fr;
      gap: 2rem;
      padding: 3rem 1rem;

      @media (min-width: 768px) {
      }

      @media (min-width: 1024px) {
        padding: 3rem 25rem;
      }

      .eachserviceTimeContent {
        background: ${theme.colors.white};
        padding: 1.5rem 0.8rem;
        border-radius: 1rem;
        font-size: 0.9rem;

        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        text-align: left;
        width: fit-content;
        margin: 0 auto;

        @media (min-width: 1024px) {
          padding: 1.5rem 2rem;
          font-size: 1rem;
        }

        .eachExpectContentTitle {
          font-weight: bold;
          font-size: 1.1rem;
        }

        .eachExpectContentTime {
          color: ${theme.colors.yellow};
          padding: 0.4rem 0;
        }
      }
    }
  }

  //   LOCATION & DIRECTION

  .locationContainer {
    display: grid;
    grid-template-rows: 1fr;
    gap: 4rem;
    padding: 4rem 1rem;

    @media (min-width: 768px) {
      padding: 4rem 2rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      padding: 4rem 10rem;
    }

    .locationContentContainer {
      color: ${theme.colors.black};
      text-align: left;
      font-size: 0.9rem;

      @media (min-width: 768px) {
        font-size: 1rem;
      }

      .locationTitle {
        padding-bottom: 1.5rem;
        font-weight: 800;
        font-size: 1.8rem;
      }

      .eachLocationContent {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-bottom: 1rem;
      }

      .directionButton {
        padding-top: 1.5rem;

        a {
          background: ${theme.colors.darkBg};
          color: ${theme.colors.white};
          text-decoration: none;
          padding: 0.7rem 1rem;
          border-radius: 2rem;

          .buttonFlex {
            display: inline-flex;
            width: fit-content;
            align-items: center;
            gap: 1rem;
          }
        }
      }
    }

    .embeddedMap {
      iframe {
        border-radius: 1rem;
      }
    }
  }

  //   Meet You

  .meetYouContainer {
    background-image: url(${welcomeBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 3rem 1rem;

    @media (min-width: 768px) {
      padding: 5rem 3rem;
    }

    .meetYouContent {
      color: ${theme.colors.white};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 3rem;
      }
    }

    .meetYouTitle {
      padding: 2rem 0;
      font-size: 1.5rem;
      font-weight: 800;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }

    .meetYouButtons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding-top: 2rem;
      width: 100%;

      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        width: auto;
      }

      .contactButton {
        background: ${theme.colors.white};
        transition: all 0.3s ease;
        color: ${theme.colors.primary};
        border: 0.1rem solid ${theme.colors.white};
        border-radius: 2rem;

        font-size: 0.9rem;
        padding: 0.4rem 1rem;

        @media (min-width: 768px) {
          font-size: 1rem;
          padding: 0.5rem 2rem;
        }

        &:hover {
          background: transparent;
          color: ${theme.colors.white};
        }
      }

      .watchOnlineButton {
        font-size: 0.9rem;
        padding: 0.4rem 1rem;
        transition: all 0.3s ease;
        border: 0.1rem solid ${theme.colors.white};
        border-radius: 2rem;

        @media (min-width: 768px) {
          font-size: 1rem;
          padding: 0.5rem 2rem;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
`;

export const A = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`;
