import { axiosInstance } from "./axiosInstance";

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get(`/sum/member/get-my-profile`);
    return response;
  } catch (error) {
    console.error("유저 정보 가져오기 오류", error);
  }
};

export const getUserRecipe = async () => {
  try {
    const response = await axiosInstance.get(`/sum/get-my-recipe`);
    return response;
  } catch (error) {
    console.error("내 레시피 조회 오류", error);
  }
};
