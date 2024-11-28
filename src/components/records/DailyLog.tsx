import { EventType } from "@type/calendar";
import styled, { keyframes } from "styled-components";

export const DailyLog = ({
  date,
  eventList,
  filterRef,
}: {
  date: Date;
  eventList: EventType[];
  filterRef: React.RefObject<HTMLDivElement>;
}) => {
  console.log(date);
  console.log(eventList);

  return (
    <>
      <Dim />
      <Container ref={filterRef}></Container>
    </>
  );
};

const Dim = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  min-width: 375px;
  max-width: 400px;
  height: 600px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 1;
  animation: ${fadeIn} 0.3s ease-out;
`;
