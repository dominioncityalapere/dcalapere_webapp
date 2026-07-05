import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import { Link } from "react-router-dom";

export const A = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SermonBgColor = styled.div`
  background-color: ${theme.colors.offWhite};
  color: ${theme.colors.black};
  padding: 3rem 2rem;
  max-width: auto;

  @media (min-width: 768px) {
    padding: 4rem;
  }

  .allSermonButton {
    width: fit-content;
    border: 0.1rem solid ${theme.colors.primary};
    border-radius: 2rem;
    color: ${theme.colors.primary};
    padding: 0.4rem 1rem;
    font-size: 0.8rem;

    @media (min-width: 768px) {
      font-size: 1rem;
      padding: 0.4rem 2rem;
    }

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }
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
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  text-align: left;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr repeat(1, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr repeat(3, 1fr);
  }
`;

export const SermonBox = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 2rem;
  max-width: 20rem;

  position: relative;
  overflow: hidden;
  cursor: pointer;

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
    color: ${theme.colors.grey};
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
