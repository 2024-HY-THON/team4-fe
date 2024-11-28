import { axiosInstance } from "./axiosInstance";

export const fcmTokenRegister = async (
  memberId: string,
  data: { fcmToken: string }
) => {
  try {
    const response = await axiosInstance.post(
      `/sum/member/update-fcm-token/member/${memberId}`,
      data
    );
    return response;
  } catch (error) {
    console.error("FCM TOKEN 오류", error);
  }
};
