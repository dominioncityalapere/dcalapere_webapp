import styled from "styled-components";

export const PrimaryColor = "#072ac8";
export const WhiteColor = "#FFFFFF";
export const BlackColor = "#000000";
export const TextColorW = "#FFFFFF";
export const GreyColor = "#777777";
export const BorderLineColor = "rgba(158, 179, 194, 0.2)";
export const TitleBgColor = "#121212";

export const EventContainer = styled.div`
  background: ${WhiteColor};

  .eventTitle {
    background: ${TitleBgColor};
    color: ${WhiteColor};
    padding: 5rem 1rem 2rem 1rem;

    @media (min-width: 768px) {
      padding: 7rem 0 2rem 0;
    }

    @media (min-width: 1024px) {
      padding: 10rem 0 3rem 0;
    }
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

  .eventDetail {
    display: grid;
    grid-template-columns: auto;
    gap: 3rem;
    padding: 3rem 1rem;

    @media (min-width: 768px) {
      padding: 7rem 2rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr repeat(2, 1fr);
      padding: 7rem 2rem;
      margin: 0 15rem;

      .full {
        grid-column: 1 / -1;
        justify-content: center;
        display: grid;
      }
    }

    .eventDetailA {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background: ${TitleBgColor};
      border-radius: 2rem;
      color: ${WhiteColor};
      padding-bottom: 2rem;

      @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 0;
      }

      .eventImageSidebar {
        border-radius: 2rem 2rem 0 0;
        width: 100%;

        @media (min-width: 1024px) {
          border-radius: 2rem 0 0 2rem;
          width: auto;
        }
      }

      .eventTitleDetail {
        font-size: 1.1rem;
        font-weight: bold;
        text-align: left;
        padding: 0.5rem 1rem;

        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }

      .numberDetail {
        display: flex;
        gap: 0.5rem;
        padding: 0.2rem 1rem;
        text-align: left;
        font-size: 0.8rem;

        @media (min-width: 768px) {
          font-size: 1rem;
          padding: 0.5rem 1rem;
        }
      }
    }

    .eventDetailB {
      background: ${BorderLineColor};
      padding-bottom: 2rem;
      border-radius: 2rem;
      color: ${BlackColor};

      .eventImageSidebar {
        border-radius: 2rem 2rem 0 0;
        width: 100%;
      }

      .eventTitleDetail {
        font-size: 1.1rem;
        font-weight: bold;
        text-align: left;
        padding: 1rem 1rem;

        @media (min-width: 768px) {
          font-size: 2rem;
        }

        @media (min-width: 1024px) {
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
        }
      }

      .numberDetail {
        color: ${GreyColor};
        display: flex;
        gap: 0.5rem;
        padding: 0 1rem;
        text-align: left;
        font-size: 0.7rem;

        @media (min-width: 768px) {
          font-size: 1rem;
        }

        @media (min-width: 1024px) {
          font-size: 0.7rem;
        }
      }
    }
  }

  .bottomHeader {
    font-size: 1.5rem;
    padding-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      padding-bottom: 2rem;
    }
  }
`;
