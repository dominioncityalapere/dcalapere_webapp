import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme";

interface EventSectionProps {
  thumbnail: string;
}

export const A = styled(Link)`
  color: ${theme.colors.primary};
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
  background: ${theme.colors.white};
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    padding: 5rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem;
  }
`;

export const EventsContent = styled.div<EventSectionProps>`
  color: ${theme.colors.black};

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
    color: ${theme.colors.white};
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
    color: ${theme.colors.grey};
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
      background: ${theme.colors.offWhite};
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
  color: ${theme.colors.primary};
  background: ${theme.colors.white};
  margin-top: 1rem;
  font-size: 0.8rem;
  width: fit-content;
  border: 0.1rem solid ${theme.colors.white};

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background: transparent;
    color: ${theme.colors.white};
  }
`;

export const EventsButton = styled.div`
  width: fit-content;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
  background: transparent;
  border: 0.1rem solid ${theme.colors.primary};
  margin-top: 3rem;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
