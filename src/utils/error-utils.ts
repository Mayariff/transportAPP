import {setAppErrorAC, setAppStatusAC} from "../Redux/AppReducer/AppReducer";
import {put} from "redux-saga/effects";

export function* handleErrorSaga() {
    yield put(setAppErrorAC('Что-то пошло не так...'))
    yield put(setAppStatusAC('failed'))
}