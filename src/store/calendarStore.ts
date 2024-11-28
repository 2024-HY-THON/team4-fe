import { EventType } from "@type/calendar";
import { create } from "zustand";

type CalendarStore = {
  eventList: EventType[];
};

type SetCalendarAction = {
  setEventList: (setEventList: EventType[]) => void;
};

export const useCalendarStore = create<CalendarStore & SetCalendarAction>()(
  (set) => ({
    eventList: [],
    setEventList: (eventList) => set(() => ({ eventList: eventList })),
  })
);
