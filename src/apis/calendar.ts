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

export const getDetailLog = async (restId: number) => {
  try {
    const response = await axiosInstance.post(`/sum/detail/rest/${restId}`);
    return response;
  } catch (error) {
    console.error("캘린더 상세기록 가져오기 오류", error);
  }
};
