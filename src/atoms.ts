import "recoil";
import { atom, selector, useRecoilValue } from "recoil";

export enum Categories {
    "ToDo"="ToDo",
    "Doing"="Doing",
    "Done"="Done"
}  

export interface ISchedule {
  id: number;
  text: string;
  time: string;
  category: Categories;
}

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

const localData = localStorage.getItem("SCHEDULES")
const JSONDATA = JSON.parse(localData as any)

export const scheduleListAtom = atom<ISchedule[]>({
  key: "scheduleList",
  default: JSONDATA||[],
});

export const categoryStateAtom = atom<Categories>({
    key: "categoryState",
    default: Categories.ToDo
});

export const schedulesSelector = selector({
  key: "schedulesSelector",
  get: ({ get }) => {
    const schedules = get(scheduleListAtom);
    const category = get(categoryStateAtom);
    return schedules.filter(data=> data.category === category);
  },
}); // selector doesn't change state