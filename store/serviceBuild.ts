import {create} from "zustand";

type State = {
    show: boolean
    onClickHandler: (show:boolean) => void
}

export const useServiceBuildStore = create<State>()((set) => ({
    show: false,
    onClickHandler: (show:boolean) => set({show})
}))
