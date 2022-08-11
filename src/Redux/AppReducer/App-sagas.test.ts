import {initializeAppWorkerSaga} from "./App-sagas";
import {put} from "redux-saga/effects";
import {setAppInitializedAC} from "./AppReducer";

test('initialize is success',()=>{
    const gen = initializeAppWorkerSaga()
    let res = gen.next()
    expect(res.value).toEqual(put(setAppInitializedAC(true)))
})