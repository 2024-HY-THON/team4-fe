import { axiosInstance } from "./axiosInstance";

export const setStartRest = async (restId: Number) => {
  try {
    const response = await axiosInstance.post(`/sum/start-rest/${restId}`);

    if (response.data.isSuccess) {
      return response.data.result;
    }
  } catch (e) {
    console.error(e);
    // throw new Error("setStartRest ERROR");
  }
};

/**
 * 초단위로 넘겨줘야한다
 * 해당 API는 휴식을 정지한 시점에 호출하시면 됩니다.
 * 20분이 남은 상태로 정지됩니다. 이 경우 20분 초(seconds) 단위로 입력되어야 합니다. -> 1200 seconds
 * @param restId
 * @returns
 */
export const setStopRest = async (
  restId: Number,
  data: { remainingSeconds: Number }
) => {
  try {
    const response = await axiosInstance.post(`/sum/stop-rest/${restId}`, data);

    if (response.data.isSuccess) {
      return response.data.result;
    }
  } catch {
    throw new Error("setStopRest ERROR");
  }
};

/**
 *
 * @param restId 오늘 기록
 * @param data  TODO todayEmotion 글자수 2-3자로 막아놔야함
 * @returns
 */
export const setTodayRest = async (
  restId: Number,
  data: {
    todayDefinition: string;
    satisfaction: boolean;
    todayEmotion: string;
  }
) => {
  try {
    const response = await axiosInstance.post(
      `/sum/today-rest/${restId}`,
      data
    );
    console.log(response);
    return response.data;
  } catch {
    throw new Error("setTodayRest ERROR");
  }
};
