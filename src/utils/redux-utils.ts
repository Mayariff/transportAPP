import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "../Redux/Store";

export type AppDispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector