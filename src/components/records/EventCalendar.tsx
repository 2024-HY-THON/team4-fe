import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Value } from "@type/calendar";
import prevArrow from "@assets/common/prev-arrow.svg";
import nextArrow from "@assets/common/next-arrow.svg";

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Value>(null);

  // 날짜 업데이트
  const handleDateChange = (newDate: Value) => {
    setSelectedDate(newDate);
  };

  return (
    <StyledCalendarContainer>
      <StyledCalendar
        locale="en-US"
        calendarType="gregory" // 일요일 부터 시작
        onChange={handleDateChange}
        // MM일 제거 -> 숫자만 보이게
        formatDay={(_locale: string | undefined, date: Date) =>
          moment(date).format("D")
        }
        // 네비게이션에서 2023. 12 이렇게 보이도록 설정
        formatMonthYear={(_locale: string | undefined, date: Date) =>
          moment(date).format("YYYY. MM")
        }
        showNeighboringMonth={true} // 전달, 다음달 날짜 숨기기
        next2Label={null} // 년도 이동 버튼 숨기기
        prev2Label={null} // 년도 이동 버튼 숨기기
        nextLabel={<img src={nextArrow} alt="Next" />}
        prevLabel={<img src={prevArrow} alt="Prev" />}
        minDetail="year" // 10년단위 년도 숨기기
      />
    </StyledCalendarContainer>
  );
};

export default EventCalendar;

const StyledCalendarContainer = styled.div`
  min-width: 375px;
  max-width: 400px;

  .react-calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    transition: height 200ms;
    padding: 24px 10px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 12px;
    border: none;
    overflow: hidden;
  }

  /* 전체 폰트 컬러 */
  .react-calendar__month-view {
    abbr {
      font-family: "Roboto", sans-serif;
      color: #333333;
    }
  }

  /* 년/월 네비게이션 */
  .react-calendar__navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 213px;
    height: 27px;
    margin-bottom: 18px;

    button {
      color: #1d1d1d;
      background: none;
    }

    .react-calendar__navigation__label {
      width: 152px;
      height: 27px;
      flex-grow: 0 !important;
      font-size: 18px;
      font-weight: 400;
      pointer-events: none; // 입력 이벤트 무시
    }

    .react-calendar__navigation__prev-button,
    .react-calendar__navigation__next-button {
      width: 24px;
      height: 24px;
      padding: 0;
    }

    /* 기본 hover 효과 무시 */
    .react-calendar__navigation__prev-button:hover,
    .react-calendar__navigation__next-button:hover,
    .react-calendar__navigation__prev-button:focus,
    .react-calendar__navigation__next-button:focus,
    .react-calendar__navigation__label:hover {
      background-color: rgba(255, 255, 255, 1);
    }
  }

  /* 전체 날짜 */
  .react-calendar__month-view {
    max-width: 360px;
    height: 424px;

    /* 요일  */
    .react-calendar__month-view__weekdays {
      justify-content: center;
      column-gap: 15px;
      text-transform: capitalize;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid #dfdfdf;
    }

    .react-calendar__month-view__weekdays__weekday abbr {
      text-decoration: none;
      font-size: 18px;
      color: #888888;
      font-weight: 500;
    }

    /* 요일, 날짜 크기 및 정렬 */
    .react-calendar__month-view__weekdays > div,
    .react-calendar__month-view__days > button {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 35px;
      height: 35px;
      padding: 0;
    }

    /* 날짜 */
    .react-calendar__month-view__days {
      justify-content: center;
      row-gap: 20px;
      column-gap: 15px;
    }

    .react-calendar__month-view__days__day {
      position: relative;
    }

    .react-calendar__month-view__days__day abbr {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26px;
      height: 26px;
      font-weight: 400;
    }

    /* 요일, 날짜 폰트 */
    .react-calendar__month-view__weekdays__weekday abbr,
    .react-calendar__month-view__days abbr {
      font-size: 16px;
      font-weight: 400;
    }

    /* 기본 hover 효과 제거 */
    .react-calendar__tile:hover {
      background-color: rgba(255, 255, 255, 1);
    }

    .react-calendar__month-view__days__day:hover abbr {
      font-weight: 500;
    }

    /* 오늘 날짜 */
    .react-calendar__tile--now {
      background-color: rgba(255, 255, 255, 1);
    }
    .react-calendar__tile--now abbr {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: rgba(221, 235, 255, 1);
    }

    /* 선택된 날짜 */
    .react-calendar__tile--active {
      background-color: rgba(255, 255, 255, 1);
    }
    .react-calendar__tile--active abbr {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #0487d9;
    }

    /* 이전/다음 달 날짜 */
    .react-calendar__month-view__days__day--neighboringMonth abbr {
      color: rgba(204, 204, 204, 1);
    }
  }
`;

const StyledCalendar = styled(Calendar)``;
