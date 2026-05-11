import styled from "styled-components";

export const PrimaryColor = "#072ac8";
export const WhiteColor = "#FFFFFF";
export const BlackColor = "#000000";
export const YellowColor = "#CA8A04";
export const ServicesBgColor = "rgba(55, 92, 214, 0.27)";
export const BorderLineColor = "rgba(173, 203, 224, 0.2)";

export const BgColor = styled.div`
  background-color: ${WhiteColor};
`;

export const ServiceContent = styled.div`
  padding: 2rem;
  color: ${BlackColor};
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
    background-color: ${ServicesBgColor};
    padding: 4rem;
    border-radius: 1rem;
  }

  .day {
    color: ${PrimaryColor};
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
    color: ${YellowColor};
    font-weight: bold;
  }
`;

export const PlanButton = styled.div`
  font-size: 0.7rem;
  padding: 0.35rem 0.6rem 0.35rem 0.6rem;
  margin-top: 2rem;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
    width: 15vh;
  }

  &:hover {
    background-color: ${WhiteColor} !important;
    color: ${PrimaryColor} !important;
    border: 0.11rem solid ${PrimaryColor};
  }
`;

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
