import EventCalendar from "@components/records/EventCalendar";
import styled from "styled-components";

export const RecordsPage = () => {
  return (
    <Container>
      <EventCalendar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 28px;
`;
