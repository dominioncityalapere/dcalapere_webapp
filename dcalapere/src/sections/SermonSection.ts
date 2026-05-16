import styled from "styled-components";

export const PrimaryColor = "#072ac8";
export const WhiteColor = "#FFFFFF";
export const OffWhiteColor = "#f9fafb";
export const GreyColor = "#777777";
export const BlackColor = "#000000";
export const YellowColor = "#CA8A04";
export const DevotionalContentBgColor = "rgba(255, 255, 255, 0.69)";

export const A = styled.a`
  color: ${WhiteColor};
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SermonBgColor = styled.div`
  background-color: ${OffWhiteColor};
  color: ${BlackColor};
  padding: 1rem;
  max-width: auto;

  .allSermonButton {
    width: fit-content;
    border: 0.15rem solid ${PrimaryColor};
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
      border: none;
    }
  }

  @media (min-width: 768px) {
    padding: 4rem;
  }
`;

export const SectionTitle = styled.div`
  font-size: 2rem;
  padding-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    padding-bottom: 1.3rem;
  }
`;

export const SectionSubTitle = styled.div`
  font-size: 0.9rem;
  padding-bottom: 1.6rem;

  @media (min-width: 768px) {
    padding-bottom: 3rem;
    font-size: 1rem;
  }
`;

export const SermonBoxContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 2rem;
  text-align: left;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 1024px) {
    grid-template-columns: auto auto auto auto;
  }
`;

export const SermonBox = styled.div`
  background-color: ${WhiteColor};
  border-radius: 2rem;
  max-width: 20rem;

  position: relative;
  overflow: hidden;
  cursor: pointer;

  .sermon-image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 2rem 2rem 0 0;
  }

  .sermonImg {
    width: 20rem;
    height: auto;
    border-radius: 2rem 2rem 0 0;
    display: block;
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
    width: 4rem;
    height: 4rem;
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
`;
