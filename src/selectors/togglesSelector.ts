import { RootState } from "@/app/store/store";

export const getToggles = (state: RootState) => state.rootReducer.toggles;
