import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const BgColor = styled.div`
  background-color: ${theme.colors.offWhite};
`;

export const ServiceContent = styled.div`
  padding: 2rem;
  color: ${theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem;
  }

  .sectionTitle {
    padding-bottom: 1.5rem;
    font-weight: bold;
    font-size: 2rem;

    @media (min-width: 768px) {
      padding-bottom: 1.5rem;
      font-size: 3rem;
    }
  }

  .sectionSubTitle {
    padding-bottom: 3rem;
  }

  .servicesTimeWrapper {
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: auto auto auto;
      gap: 1rem;
    }

    @media (min-width: 1024px) {
      gap: 3rem;
    }
  }

  .servicesTime {
    background-color: ${theme.colors.servicesBg};
    padding: 4rem;
    border-radius: 1rem;
  }

  .day {
    color: ${theme.colors.primary};
    font-weight: bold;
  }

  .dayService {
    font-weight: bold;
    font-size: 1.28rem;
    padding: 0.4rem 0;

    @media (min-width: 768px) {
      font-size: 1.45rem;
    }

    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }

  .dayTime {
    color: ${theme.colors.yellow};
    font-weight: bold;
  }
`;

export const PlanButton = styled.div`
  font-size: 0.8rem;
  padding: 0.4rem 1rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  border: 0.1rem solid ${theme.colors.primary};

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 2rem;
    width: fit-content;
  }

  &:hover {
    background-color: ${theme.colors.white} !important;
    color: ${theme.colors.primary} !important;
  }
`;

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
