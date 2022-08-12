import React, {useEffect} from 'react';
import Map from "../components/map/Map";
import ApplicationTable from "../components/applicationTable/ApplicationTable";
import s from './App.module.css'
import {Splitter, SplitterPanel} from 'primereact/splitter';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
//import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import {initializedApp} from "../Redux/AppReducer/App-sagas";
import {useDispatch} from "react-redux";
import {fetchApplications} from "../Redux/ApplicationTableReducer/ApplicationTable-sagas";
import {fetchSelectingMenu} from "../Redux/SelectingMenuReducer/SelectingMenuReducer-sagas";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializedApp())
        dispatch(fetchSelectingMenu())
        dispatch(fetchApplications())
    }, [])

    return (
        <div className={s.App}>
            <h1 className={s.mainHeader}>Заявки на перевозку</h1>
            <Splitter gutterSize={8}>
                <SplitterPanel minSize={16} size={60}>
                    <ApplicationTable/>
                </SplitterPanel>
                <SplitterPanel minSize={16} size={40}>
                    <Map/>
                </SplitterPanel>
            </Splitter>
        </div>);
}

export default App;
