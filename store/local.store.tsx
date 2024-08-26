import {create} from "zustand";
import {Constants} from "@/common/local/constants";

type State = {
    local: Constants;
    setLocal(local: Constants): void;
}

export const useLocalStore = create<State>()((set) => ({
    local: Constants.EN,
    setLocal: (local) => set({local})
}))