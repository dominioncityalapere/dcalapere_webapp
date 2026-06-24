import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import welcomeBg from "../../../../assets/images/welcomeBg.png";
import { Link } from "react-router-dom";


export const A = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  
  @media (min-width: 768px) {
  width: fit-content;
}
`;

export const PlanButton = styled.div`
  font-size: 0.8rem;
  padding: 0.4rem 1rem;
  transition: all 0.3s ease;
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  border: 0.1rem solid ${theme.colors.white};

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 2rem;
  }

  &:hover {
    background: transparent;
    color: ${theme.colors.white};
  }
`;

export const ContactButton = styled.div`
  font-size: 0.8rem;
  padding: 0.4rem 1rem;
  transition: all 0.3s ease;
  border: 0.1rem solid ${theme.colors.white};

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 2rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const BgColor = styled.div`
  background-image: url(${welcomeBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 5rem 3rem;
  }
`;

export const WelcomeContent = styled.div`
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 3rem;
  }

  .welcomeTitle {
    font-size: 1.7rem;
    padding-top: 0.7rem;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 3rem;
      padding-top: 1.5rem;
    }
  }

  .welcomeSubTitle {
    font-size: 1rem;
    padding-top: 1.5rem;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 1.5rem;
      padding-top: 3rem;
      line-height: 1.6;
    }
  }

  .welcomeButton {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 2rem;
    }
  }
`;
