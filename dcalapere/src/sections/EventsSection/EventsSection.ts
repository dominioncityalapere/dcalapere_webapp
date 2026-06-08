import styled from "styled-components";
import { Link } from "react-router-dom";

export const PrimaryColor = "#072ac8";
export const WhiteColor = "#FFFFFF";
export const BlackColor = "#000000";
export const YellowColor = "#CA8A04";
export const OffWhiteColor = "#f9fafb";
export const GreyColor = "#777777";
export const DevotionalContentBgColor = "rgba(255, 255, 255, 0.69)";

interface EventSectionProps {
  thumbnail: string;
}

export const A = styled(Link)`
  color: ${PrimaryColor};
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
`;

export const AEvents = styled.div`
  text-decoration: none;
  cursor: pointer;
  text: center;
  display: inline-flex;
  justify-content: center;
`;

export const BgColor = styled.div`
  background: ${WhiteColor};
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem;
  }
`;

export const EventsContent = styled.div<EventSectionProps>`
  color: ${BlackColor};

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

  .eventWrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  .eventDetail {
    background-image:
      linear-gradient(rgba(37, 64, 185, 0.85)),
      url(${(props) => props.thumbnail});

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    text-align: left;
    color: ${WhiteColor};
    padding: 1.5rem;
    border-radius: 2rem;

    @media (min-width: 1024px) {
      width: 50%;
      padding: 3rem;
    }
  }

  .eventTitle {
    font-size: 1.25rem;
    padding-bottom: 1rem;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 2rem;
      padding-bottom: 1.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 2.25rem;
      line-height: 1;
    }
  }

  .numberDetail {
    display: flex;
    gap: 0.5rem;
    font-size: 0.8rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  .numberDetailSidebar {
    display: flex;
    flex-direction: column;
    color: ${GreyColor};
    font-size: 0.8rem;

    @media (min-width: 768px) {
      flex-direction: row;
      font-size: 1rem;
      padding-bottom: 0.5rem;
      gap: 0.5rem;
    }
  }

  .eventDetailSidebar {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0.5rem;

    .imageAlignText {
      display: flex;
      align-items: center;
      background: ${OffWhiteColor};
      padding: 0.5rem;
      border-radius: 1rem;

      .eventTitleSidebar {
        font-size: 0.8rem;
        font-weight: bold;
        padding-bottom: 0.5rem;

        @media (min-width: 768px) {
          font-size: 1.1rem;
        }
      }

      .textSidebar {
        padding: 0.7rem;
      }
    }

    .eventImageSidebar {
      width: 5rem;
      border-radius: 0.5rem;

      @media (min-width: 768px) {
        width: 15rem;
        padding: 1rem;
        border-radius: 2rem;
      }
    }

    @media (min-width: 1024px) {
      // width: 50%;
    }
  }
`;

export const LearnButton = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  color: ${PrimaryColor};
  background: ${WhiteColor};
  margin-top: 1rem;
  font-size: 0.8rem;
  width: fit-content;
  border: 0.1rem solid ${WhiteColor};

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background: transparent;
    color: ${WhiteColor};
  }
`;

export const EventsButton = styled.div`
  width: fit-content;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
  color: ${PrimaryColor};
  background: transparent;
  border: 0.1rem solid ${PrimaryColor};
  margin-top: 3rem;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background: ${PrimaryColor};
    color: ${WhiteColor};
  }
`;
