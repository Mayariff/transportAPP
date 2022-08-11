import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {ApplicationsTableReducer} from "./ApplicationTableReducer/ApplicationsTableReducer";
import {SelectingMenuReducer} from "./SelectingMenuReducer/SelectingMenuReducer";
import {appReducer} from "./AppReducer/AppReducer";
import {appWatcherSaga} from "./AppReducer/App-sagas";
import {all} from 'redux-saga/effects';
import {todolistWatcherSaga} from "./ApplicationTableReducer/ApplicationTable-sagas";
import {fetchSelectingMenuWatcherSaga} from "./SelectingMenuReducer/SelectingMenuReducer-sagas";

const rootReducer = combineReducers({
    applications: ApplicationsTableReducer,
    infoAboutPoints: SelectingMenuReducer,
    app: appReducer,
})


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootWatcher)

//watcher
function* rootWatcher() {
    yield  all([
        appWatcherSaga(),
        todolistWatcherSaga(),
        fetchSelectingMenuWatcherSaga()
    ])
}

