import {AppRootStateType} from "./Store";

export const selectPointsInfo= (state: AppRootStateType) => state.infoAboutPoints
export const selectDataTable= (state: AppRootStateType) => state.applications