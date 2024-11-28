import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { EventType, Value } from "@type/calendar";
import prevArrow from "@assets/common/prev-arrow.svg";
import nextArrow from "@assets/common/next-arrow.svg";
import { useCalendarStore } from "@store/calendarStore";
import { DailyLog } from "./DailyLog";
import { getCalendarEventList } from "@apis/calendar";

const EventCalendar = () => {
  const eventList = useCalendarStore((state) => state.eventList);
  const setEventList = useCalendarStore((state) => state.setEventList);
  const [selectedDate, setSelectedDate] = useState<Value>(null);
  const [searchMonth, setSearchMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const filterRef = useRef<HTMLDivElement>(null);

  // 날짜 업데이트
  const handleDateChange = (newDate: Value) => {
    setSelectedDate(newDate);
    console.log(selectedDate);
  };

  // 월 업데이트
  const updateMonth = (activeStartDate: Date | null) => {
    if (activeStartDate) {
      const newMonth = activeStartDate.getMonth() + 1;
      setSearchMonth(newMonth);
    }
  };

  const fetchCalendarEvents = async () => {
    const response = await getCalendarEventList(searchMonth);
    if (response) {
      console.log(response.data.result.reposeCalendarDetailDTOs);
      setEventList(response.data.result.reposeCalendarDetailDTOs);
    }
  };

  // 일정 변동사항 업데이트
  useEffect(() => {
    fetchCalendarEvents();
  }, [searchMonth]);

  const handleTileContent = useCallback(
    ({ date }: { date: Date }) => {
      // 클릭한 날짜 중 이벤트가 있는 날짜 필터링
      const filteredEventList = eventList.filter(
        (event: EventType) => event.date === moment(date).format("YYYY-MM-DD")
      );

      const isSelected =
        selectedDate instanceof Date &&
        selectedDate.getFullYear() === date.getFullYear() &&
        selectedDate.getMonth() === date.getMonth() &&
        selectedDate.getDate() === date.getDate();

      const isToday =
        new Date().getFullYear() === date.getFullYear() &&
        new Date().getMonth() === date.getMonth() &&
        new Date().getDate() === date.getDate();

      return (
        <>
          {isSelected && filteredEventList.length > 0 && (
            <DailyLog filterRef={filterRef} eventList={filteredEventList} />
          )}
          {filteredEventList.length > 0 && (
            <Dot isSelected={isSelected && !isToday} />
          )}
        </>
      );
    },
    [selectedDate, eventList]
  );

  //  모달 밖을 누르면 닫히도록
  useEffect(() => {
    // 아래의 이벤트 리스너에서 'mousedown'이벤트를 명시적으로 사용했으므로
    // 여기서의 event는 MouseEvent라는 보장이 생기는 것 -> 이 이벤트 객체에는 마우스 관련 속성들이 포함되어 있음
    const handleClickOutside = (event: MouseEvent) => {
      if (
        // 필터 메뉴 DOM이 화면에 렌더링 되어 있고
        filterRef.current &&
        // 현재 클릭된 위치가 필터 메뉴 외부일 때
        !filterRef.current.contains(event.target as Node)
      ) {
        setSelectedDate(null);
      }
    };

    // mousedown(마우스 버튼이 눌린 순간) 이벤트가 발생할 때마다 함수
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  return (
    <StyledCalendarContainer>
      <StyledCalendar
        locale="ko-KR"
        calendarType="gregory" // 일요일 부터 시작
        onChange={handleDateChange}
        // MM일 제거 -> 숫자만 보이게
        formatDay={(_locale: string | undefined, date: Date) =>
          moment(date).format("D")
        }
        // 네비게이션에서 2024. 11222 이렇게 보이도록 설정
        formatMonthYear={(_locale: string | undefined, date: Date) =>
          moment(date).format("YYYY. MM")
        }
        // 일정 있는 날짜에 점 UI 추가 및 팝업 마운트
        tileContent={handleTileContent}
        // 달 넘어갈 때 자동 선택된 값(1일)으로 캘린더 height 변화
        onActiveStartDateChange={({ activeStartDate }) =>
          updateMonth(activeStartDate)
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
      max-width: 37px;
      height: 37px;
      padding: 0;
    }

    /* 날짜 */
    .react-calendar__month-view__days {
      justify-content: center;
      row-gap: 30px;
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
      width: 37px;
      height: 37px;
      border-radius: 50%;
      background-color: rgba(128, 221, 242, 0.4);
    }

    /* 선택된 날짜 */
    .react-calendar__tile--active {
      background-color: rgba(255, 255, 255, 1);
    }
    .react-calendar__tile--active abbr {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 37px;
      height: 37px;
      border-radius: 50%;
      background-color: #049dbf;
    }

    /* 이전/다음 달 날짜 */
    .react-calendar__month-view__days__day--neighboringMonth abbr {
      color: rgba(204, 204, 204, 1);
    }
  }
`;

const StyledCalendar = styled(Calendar)``;

const Dot = styled.div<{ isSelected: boolean }>`
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translate(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => (props.isSelected ? "white" : "#049dbf")};
`;
