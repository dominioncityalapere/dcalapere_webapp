import styled from "styled-components";
import { Link } from "react-router-dom";
import welcomeBg from "../../images/welcomeBg.png";

export const PrimaryColor = "#072ac8";
export const WhiteColor = "#FFFFFF";
export const FaintWhiteColor = "#FFFFFF80";
export const OffWhiteColor = "#f9fafb";
export const BlackColor = "#000000";
export const TextColorW = "#FFFFFF";
export const GreyColor = "#777777";
export const BorderLineColor = "rgba(158, 179, 194, 0.2)";
export const TitleBgColor = "#121212";

export const LastestSermon = styled.div`
  background: ${WhiteColor};

  .sermonHeader {
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

  .header {
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

  .latestMessage {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${BlackColor};
    text-align: left;
    padding: 2rem 2rem 0 2rem;

    @media (min-width: 768px) {
      padding: 3rem 2rem 0 2rem;
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      padding: 5rem 2rem 0 2rem;
      margin-left: 10rem;
    }
  }

  .latestSermon {
    display: grid;
    grid-template-columns: auto;
    gap: 3rem;
    padding: 1rem;

    @media (min-width: 768px) {
      padding: 3rem 1rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr repeat(2, 1fr);
      margin: 0 10rem;

      .full {
        grid-column: 1 / -1;
        justify-content: center;
      }
    }
  }

  .sermonDetail {
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

    .playContainer {
      position: relative;
      overflow: hidden;
      width: 100%;

      .eventImageSidebar {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2rem 2rem 0 0;
        display: block;
        height: 26vh;

        @media (min-width: 1024px) {
          border-radius: 2rem 0 0 2rem;
          height: 45vh;
        }
      }

      .videoOverlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.45);
        border-radius: 2rem 2rem 0 0;

        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;

        @media (min-width: 1024px) {
          border-radius: 2rem 0 0 2rem;
        }
      }

      &:hover .videoOverlay {
        opacity: 1;
      }

      .playButton {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.9);
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .sermonTitle {
      font-size: 1rem;
      font-weight: bold;
      text-align: left;
      padding: 0.5rem 1rem;

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }

      @media (min-width: 1024px) {
        width: 70vh;
      }
    }

    .sermonIndivDetail {
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
`;

export const RecentSermon = styled.div`
  background: ${OffWhiteColor};
  padding: 3rem 1rem;
  color: ${BlackColor};
  text-align: left;

  @media (min-width: 1024px) {
    padding: 3rem 10rem;
  }

  .recentSermon {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${BlackColor};
    text-align: left;
    padding: 0 0 2rem 1rem;

    @media (min-width: 768px) {
      padding: 0 0 3rem 2rem;
      font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
      padding: 0 0 3rem 2rem;
    }
  }
`;

export const SermonBox = styled.div`
  background-color: ${WhiteColor};
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 1024px) {
    max-width: 20rem;
  }

  .sermon-image-wrapper {
    position: relative;
    overflow: hidden;
    height: 11rem;
    width: 100%;
    border-radius: 2rem 2rem 0 0;

    .sermonImg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2rem 2rem 0 0;
      display: block;
    }
  }

  .sermonTheme {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .sermonPreacher {
    font-size: 0.9rem;
    color: ${GreyColor};
  }

  .videoOverlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .videoOverlay {
    opacity: 1;
  }

  .playButton {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SermonBoxText = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .sermonTitle {
    font-weight: bold;
  }
`;

export const A = styled(Link)`
  color: ${WhiteColor};
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0 0 0;

  .allSermonButton {
    width: fit-content;
    border: 0.1rem solid ${PrimaryColor};
    border-radius: 2rem;
    color: ${PrimaryColor};
    padding: 0.4rem 1rem;
    font-size: 0.8rem;

    @media (min-width: 768px) {
      font-size: 1rem;
      padding: 0.4rem 2rem;
    }

    &:hover {
      color: ${WhiteColor};
      background: ${PrimaryColor};
    }
  }
`;

export const SermonDetailsContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${welcomeBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
  color: ${BlackColor};

  .closeButton {
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
    cursor: pointer;
    color: ${WhiteColor};

    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      margin: 3rem;
    }

    &:hover {
      transform: scale(1.1);
      font-weight: bold;
    }
  }
`;

export const VideoWrapper = styled.div`
  background: ${FaintWhiteColor};
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  padding-bottom: 1rem;

  .sermonText {
    padding: 0.2rem 1rem;
    font-size: 0.8rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  span {
    font-weight: bold;
    font-size: 0.8rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;
