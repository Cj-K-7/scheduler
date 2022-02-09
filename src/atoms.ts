import 'recoil';
import { atom } from 'recoil';

export const isDarkAtom = atom({
    key: "isDark",
    default: false
})

interface ISchedule {
    id: number;
    text: string;
    time: string;
    category: "to_Do"|"Doing"|"Done"
}
export const scheduleList = atom<ISchedule[]>({
    key: "schedule",
    default: []
})