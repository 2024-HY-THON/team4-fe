import { axiosInstance } from "./axiosInstance";
import { sendKeyToServer } from "@utils/registerServiceWorker";

export const registerUser = async (data: {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
}) => {
  try {
    const response = await axiosInstance.post("/sum/member/sign-up", data);
    return response;
  } catch (error) {
    console.error("회원가입 오류", error);
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post("/sum/member/sign-in", data);

    // TODO 추후 수정해야함 임시
    const tmpMemberId = "1";
    sendKeyToServer(0, tmpMemberId);
    return response;
  } catch (error) {
    console.error("로그인 오류", error);
  }
};
