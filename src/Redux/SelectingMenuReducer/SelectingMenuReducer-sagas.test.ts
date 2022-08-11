import {fetchSelectingMenuWorkerSaga} from "./SelectingMenuReducer-sagas";
import {put} from "redux-saga/effects";
import {setAppErrorAC, setAppStatusAC} from "../AppReducer/AppReducer";
import {setPointsAC} from "./SelectingMenuReducer";
import {data} from "../../Data/Data";

test('fetchSelectingMenu success flow', () => {
    let action = ({type: 'SELECT_MENU/SET-DATA'})
    const gen = fetchSelectingMenuWorkerSaga()
    expect(gen.next().value).toEqual(put(setAppStatusAC('loading')))
    expect(gen.next(data.points).value).toEqual(put(setPointsAC(data.points)))
    expect(gen.next().value).toEqual(put(setAppStatusAC('succeeded')))
})

test('fetchSelectingMenu unsuccess flow', () => {
    const gen = fetchSelectingMenuWorkerSaga()
    expect(gen.next().value).toEqual(put(setAppStatusAC('loading')))
    expect(gen.next(data.points).value).toEqual(put(setPointsAC(data.points)))
    expect(gen.throw({message: "Что-то пошло не так..."}).value).toEqual(put(setAppErrorAC("Что-то пошло не так...")))
    expect(gen.next().value).toEqual( put(setAppStatusAC('failed')))
})