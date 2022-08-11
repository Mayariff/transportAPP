import {put, takeEvery} from "redux-saga/effects";
import {setAppStatusAC} from "../AppReducer/AppReducer";
import {data} from "../../Data/Data";
import {handleErrorSaga} from "../../utils/error-utils";
import {setPointsAC} from "./SelectingMenuReducer";

export const fetchSelectingMenu = () => ({type: 'SELECT_MENU/SET-DATA'})

export function* fetchSelectingMenuWorkerSaga() {
    yield put(setAppStatusAC('loading'))
    try {
        yield put(setPointsAC(data.points))
        yield put(setAppStatusAC('succeeded'))
    } catch (error) {
        yield* handleErrorSaga();
    }
}

export function* fetchSelectingMenuWatcherSaga() {
    yield takeEvery('SELECT_MENU/SET-DATA', fetchSelectingMenuWorkerSaga);
}