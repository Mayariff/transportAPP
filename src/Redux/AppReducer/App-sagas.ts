import {call, put, takeEvery} from "redux-saga/effects";
import {setAppInitializedAC} from "./AppReducer";

export function* initializeAppWorkerSaga(){
    //какие то процессы первичной инициальзации
    yield put(setAppInitializedAC(true));
}

export const initializedApp =()=>({type:'APP/INITIALIZED-APP'})

export function*  appWatcherSaga(){
    yield  takeEvery('APP/INITIALIZED-APP', initializeAppWorkerSaga)
}