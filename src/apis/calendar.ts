import { axiosInstance } from "./axiosInstance";

export const getCalendarEventList = async (searchMonth: number) => {
  try {
    const response = await axiosInstance.get(
      `/sum/calendar?year=2024&month=${searchMonth}`
    );
    return response;
  } catch (error) {
    console.error("캘린더 이벤트 가져오기 오류", error);
  }
};
