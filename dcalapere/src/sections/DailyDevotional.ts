import styled from "styled-components";

export const PrimaryColor = "#072ac8";
export const WhiteColor = "#FFFFFF";
export const BlackColor = "#000000";
export const YellowColor = "#CA8A04";
export const DevBgColor = "#121212";
export const DevotionalContentBgColor = "rgba(255, 255, 255, 0.69)";

export const A = styled.a`
  color: ${WhiteColor};
  text-decoration: none;
  //   width: 100%;
  color: inherit;
  cursor: pointer;

  //   @media (min-width: 768px) {
  //     width: auto;
  //   }
`;

export const DevotionalBgColor = styled.div`
  background-color: ${DevBgColor};
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 20rem;
  }
`;

export const DevotionalContent = styled.div`
  background-color: ${DevotionalContentBgColor};
  color: ${BlackColor};
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
    background-color: ${YellowColor};
    border-radius: 10rem;
    padding: 0.8rem;
    color: ${WhiteColor};
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
    color: ${YellowColor};
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
    background-color: ${YellowColor};
    padding: 0.5rem 0.8rem;
    border-radius: 1rem;
    color: ${WhiteColor};

    &:hover {
      background-color: ${PrimaryColor} !important;
      color: ${WhiteColor} !important;
    }

    &:active {
      background-color: ${PrimaryColor} !important;
      color: ${WhiteColor} !important;
    }
  }

  .devButtonShare {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background-color: ${WhiteColor};
    padding: 0.5rem 0.8rem;
    border-radius: 1rem;
    color: ${PrimaryColor};
    border: 0.11rem solid ${WhiteColor};

    &:hover {
      background-color: transparent !important;
      color: ${WhiteColor} !important;
    }

    &:active {
      background-color: transparent !important;
      color: ${WhiteColor} !important;
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
