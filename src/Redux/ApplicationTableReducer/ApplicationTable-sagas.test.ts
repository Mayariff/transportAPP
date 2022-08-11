import {fetchApplicationsWorkerSaga} from "./ApplicationTable-sagas";
import {put} from "redux-saga/effects";
import {setAppErrorAC, setAppStatusAC} from "../AppReducer/AppReducer";
import {data} from "../../Data/Data";
import {setApplicationAC} from "./ApplicationsTableReducer";

test('fetchApplications success flow', () => {
    let action = ({type: 'APPLICATIONS/SET-DATA'})
    const gen = fetchApplicationsWorkerSaga()
    expect(gen.next().value).toEqual(put(setAppStatusAC('loading')))
    expect(gen.next(data.applications).value).toEqual(put(setApplicationAC({applications: data.applications})))
    expect(gen.next().value).toEqual(put(setAppStatusAC('succeeded')))
})

test('fetchApplications unsuccess flow', () => {
    const gen = fetchApplicationsWorkerSaga()
    expect(gen.next().value).toEqual(put(setAppStatusAC('loading')))
    expect(gen.next(data.applications).value).toEqual(put(setApplicationAC({applications: data.applications})))
    expect(gen.throw({message: "Что-то пошло не так..."}).value).toEqual(put(setAppErrorAC("Что-то пошло не так...")))
    expect(gen.next().value).toEqual( put(setAppStatusAC('failed')))
})