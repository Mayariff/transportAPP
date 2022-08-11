import React, {useCallback, useState} from 'react';
import {Form, Table} from "antd";
//import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import {changePointAC, selectApplicationAC} from "../../Redux/ApplicationTableReducer/ApplicationsTableReducer";
import {display_data} from "../../utils/utils-application-table";
import {tableDataType} from "./types";
import {selectDataTable, selectPointsInfo} from "../../Redux/selectors";
import {columns} from "./settingColumns";
import {useAppDispatch, useAppSelector} from "../../utils/redux-utils";


const ApplicationTable = () => {
    const [form] = Form.useForm();

    const dataTable = useAppSelector(selectDataTable)
    const selectingMenuPoints = useAppSelector(selectPointsInfo)
    const dispatch = useAppDispatch()


    //упрявляемый селектор
    const [value, setSelectedValue] = useState<string>('')
    const selectValue = useCallback((value: string) => {
        setSelectedValue(value)
    }, [setSelectedValue])

    // данные для отображения в таблице
    const data = display_data(dataTable, selectingMenuPoints, selectValue, value)

    // обработчик при выборе строки
    const rowSelection = {
        onSelect: (record: tableDataType, selected: boolean, selectedRows: tableDataType[], nativeEvent: Event) => {
            dispatch(selectApplicationAC({id: record.id}))
        },
    };


    const onChangeHandler = (data: { [key: string]: string }) => {
        //достаем из изменившегося селектора id  заявки
        const id_application = Object.keys(data)[0].split('_')[0]
        //достаем название выбранного option
        const newOption = Object.values(data)[0]
        //по нему ищем новое название точки маршрута
        const newPoint = Object.keys(selectingMenuPoints).find(key => selectingMenuPoints[key].title === newOption) || 'Выберете значение'
        // и  определяем является ли точка -точкой погрузки или разгрузки
        const is_loadingPoint = selectingMenuPoints[newPoint].is_loadingPoint

        dispatch(changePointAC({id: id_application, is_loadingPoint: is_loadingPoint, newPoint}))
    }

    return (
        <Form onValuesChange={onChangeHandler}
              form={form}
              size={'small'}
        >
            <Table
                rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                bordered
                size="small"
                scroll={{x: 'calc(640px + 20%)'}}
                expandable={{
                    expandedRowRender: record => <p style={{margin: 0}}>
                        <b>Заявка:</b> {record.application_number}<br/>
                        <b>Точка погрузки:</b> {record.loading_point_address}<br/>
                        <b>Точка разгрузки:</b> {record.unloading_point_address}
                    </p>,
                }}
            />
        </Form>

    );
};

export default ApplicationTable;