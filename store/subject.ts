import {create} from "zustand";

type State = {
    subject: string
    setSubject: (subject:string) => void
}

export const useSubjectStore = create<State>()((set) => ({
    subject: '',
    setSubject: (subject:string) => set({subject})
}))