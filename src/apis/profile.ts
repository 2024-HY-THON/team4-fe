import { axiosInstance } from "./axiosInstance";

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get(`/sum/member/get-my-profile`);
    return response;
  } catch (error) {
    console.error("유저 정보 가져오기 오류", error);
  }
};
