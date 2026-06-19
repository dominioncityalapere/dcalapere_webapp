import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const A = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  //   width: 100%;
  color: inherit;
  cursor: pointer;

  //   @media (min-width: 768px) {
  //     width: auto;
  //   }
`;

export const DevotionalBgColor = styled.div`
  background-color: ${theme.colors.darkBg};
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 20rem;
  }
`;

export const DevotionalContent = styled.div`
  background-color: ${theme.colors.devotionalContentBg};
  color: ${theme.colors.black};
  border-radius: 2rem;
  padding: 2rem;
  font-size: 0.9rem;

  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;

  .devTitle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }

  .devDate {
    background-color: ${theme.colors.yellow};
    border-radius: 10rem;
    padding: 0.8rem;
    color: ${theme.colors.white};
    font-weight: bold;
    font-size: 2rem;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .devFullDate {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .devFullDateMobile {
    color: ${theme.colors.yellow};
    padding-bottom: 0.5rem;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .devButton {
    display: flex;
    gap: 1rem;
  }

  .devButtonListen {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background-color: ${theme.colors.yellow};
    padding: 0.5rem 0.8rem;
    border-radius: 1rem;
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.primary} !important;
      color: ${theme.colors.white} !important;
    }

    &:active {
      background-color: ${theme.colors.primary} !important;
      color: ${theme.colors.white} !important;
    }
  }

  .devButtonShare {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background-color: ${theme.colors.white};
    padding: 0.5rem 0.8rem;
    border-radius: 1rem;
    color: ${theme.colors.primary};
    border: 0.11rem solid ${theme.colors.white};

    &:hover {
      background-color: transparent !important;
      color: ${theme.colors.white} !important;
    }

    &:active {
      background-color: transparent !important;
      color: ${theme.colors.white} !important;
    }
  }

  .readMore {
    &:hover {
      background-color: transparent !important;
      text-decoration: underline;
    }

    &:active {
      background-color: transparent !important;
      text-decoration: underline;
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
  padding-bottom: 1.3rem;
`;
