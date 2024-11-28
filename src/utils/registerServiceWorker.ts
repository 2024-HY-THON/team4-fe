import { messaging } from "../firebase"; // Firebase 메시징 객체 가져오
import { getToken } from "firebase/messaging";
import { fcmTokenRegister } from "@apis/fcmApi";

const retryCount = 10;
let registration: ServiceWorkerRegistration | null = null;

export const registerServiceWorker = async () => {
  try {
    registration = await navigator.serviceWorker.register("/pwabuilder-sw.js", {
      scope: "/firebase-cloud-messaging-push-scope",
    });
    // sendKeyToServer(registration, 0);
  } catch (error) {
    console.error("Service Worker registration failed:", error);
  }
};

// TODO 토큰 발행 안되거나, 서로 다른 두개의 토큰 발행될때 있음
export async function sendKeyToServer(
  recursiveCount: number,
  memberId: string
) {
  try {
    if (!registration) return;
    const vapidKey = import.meta.env.VITE_VAPID_KEY;
    // FCM 토큰 요청
    const token = await getToken(messaging, {
      vapidKey,
      serviceWorkerRegistration: registration,
    });
    if (token) {
      console.log("FCM Token:", token);

      const response = await fcmTokenRegister(memberId, { fcmToken: token });
      console.log(response);
    } else {
      throw new Error("token invalid");
    }
  } catch {
    console.error("No registration token available.");
    if (recursiveCount < retryCount) {
      sendKeyToServer(0, memberId);
    }
  }
}
