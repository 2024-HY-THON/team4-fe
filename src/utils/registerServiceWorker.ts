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

export async function sendKeyToServer(recursiveCount: number) {
  try {
    if (!registration) {
      await registerServiceWorker();
      await sendKeyToServer(0);
      return;
    }
    const vapidKey = import.meta.env.VITE_VAPID_KEY;
    // FCM 토큰 요청
    const token = await getToken(messaging, {
      vapidKey,
      serviceWorkerRegistration: registration,
    });
    if (token) {
      console.log("FCM Token:", token);

      const response = await fcmTokenRegister({ fcmToken: token });
      console.log(response);
    } else {
      throw new Error("token invalid");
    }
  } catch {
    console.error("No registration token available.");
    if (recursiveCount < retryCount) {
      sendKeyToServer(recursiveCount + 1);
    }
  }
}
