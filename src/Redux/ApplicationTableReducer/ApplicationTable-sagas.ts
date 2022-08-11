import {setAppStatusAC} from "../AppReducer/AppReducer";
import {put, takeEvery} from "redux-saga/effects";
import {setApplicationAC} from "./ApplicationsTableReducer";
import {data} from "../../Data/Data";
import {handleErrorSaga} from "../../utils/error-utils";

export const fetchApplications = () => ({type: 'APPLICATIONS/SET-DATA'})

export function* fetchApplicationsWorkerSaga() {
    yield put(setAppStatusAC('loading'))
    try {
        yield put(setApplicationAC({applications: data.applications}))
        yield put(setAppStatusAC('succeeded'))
    } catch (error) {
        yield *handleErrorSaga();
    }
}

export function* todolistWatcherSaga() {
    yield takeEvery('APPLICATIONS/SET-DATA', fetchApplicationsWorkerSaga);
}