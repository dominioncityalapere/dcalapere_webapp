import styled from "styled-components";
import HomeObjectBG_1 from "../images/HomeObjectBG_1.png";
import HomeObjectBG_2_colour from "../images/HomeObjectBG_2_colour.png";

export const PrimaryColor = "#072ac8";
export const TextColorW = "#FFFFFF";
export const ThisWeekBgColor = "rgba(255, 255, 255, 0.4)";
export const MobileMenuBgColor = "#121212";
export const BorderLineColor = "rgba(158, 179, 194, 0.2)";

export const BgImage = styled.div`
  background-image: url(${HomeObjectBG_1});
  width: 100%;
  height: 100vh;
  backgrond-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: -webkit-fill-available;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    background-attachment: scroll;
    min-height: 100dvh;
  }
`;

export const OverlayBgImage = styled.div`
  background-image: url(${HomeObjectBG_2_colour});
  position: absolute;
  width: 100%;
  height: 100vh;
  backgrond-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: -webkit-fill-available;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 100;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 2rem;

  @media (min-width: 1024px) {
    margin-top: 15rem;
  }
`;

export const A = styled.a`
  color: ${TextColorW};
  text-decoration: none;
  width: 100%;
  color: inherit;
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const HeroButton = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0 auto;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const HeroGiveButton = styled.div`
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem 0.3rem 0.6rem;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
    // width: 100%;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const HeroPlanButton = styled.div`
  font-size: 0.7rem;
  padding: 0.35rem 0.6rem 0.35rem 0.6rem;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
    width: auto;
  }

  &:hover {
    background-color: ${TextColorW} !important;
    color: ${PrimaryColor} !important;
  }
`;

export const HeroH1 = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const HeroP = styled.div`
  font-size: 0.7rem;
  padding-top: 0.5rem;

  @media (min-width: 768px) {
    padding-top: 0.9rem;
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    padding-top: 1rem;
  }
`;

export const ThisWeek = styled.div`
  background-color: ${ThisWeekBgColor};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.8rem 0;
  border-radius: 1rem;
  color: ${TextColorW};
  font-size: 1rem;
  width: 100%;

  .thisWeekTitle {
    font-weight: bold;
  }

  .thisWeekDay {
    color: ${PrimaryColor};
    font-weight: bold;
    text-transform: uppercase;
  }

  .thisWeekTime {
    color: #ffd700;
    font-size: 0.7rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    font-size: 1.5rem;
    margin: 3rem;
    padding: 1.5rem;
    gap: 1rem;
    width: auto;

    .thisWeekTime {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    font-size: 1.5rem;
    margin: 3rem;
    padding: 1.5rem;
    gap: 1rem;

    .thisWeekTime {
      font-size: 1rem;
    }
  }
`;

export const ThisWeekTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  line-height: 1.4;

  @media (min-width: 768px) {
    flex-direction: row;
    line-height: 1.4;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 10rem;
    line-height: 1.4;
  }
`;

export const MoveDownArrow = styled.div`
  color: ${TextColorW};
  z-index: 50;

  @media (min-width: 1024px) {
    // margin-top: auto;
    height: 70px;
  }
`;
