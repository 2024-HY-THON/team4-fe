import { axiosInstance } from "./axiosInstance";

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
