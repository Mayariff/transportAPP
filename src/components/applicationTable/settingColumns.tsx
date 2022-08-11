import {ColumnsType} from "antd/es/table";
import {tableDataType} from "./types";
import {Table} from "antd";
import SelectPoint from "./EdditableSpan/EdditableSpan";
import React from "react";

export const columns: ColumnsType<tableDataType> = [
    Table.EXPAND_COLUMN,
    {
        title: '№',
        dataIndex: 'number_in_table',
        fixed: 'left',
        width: 40,
    },
    {
        title: 'Номер зявки',
        dataIndex: 'application_number',
        width: 80,
    },
    {
        title: 'Точка погрузки',
        dataIndex: 'loading_point',
        render: (point: string, record: tableDataType) => {
            return (
                <SelectPoint point={point} is_loadingPoint={true} item={record}/>);
        }

    },
    {
        title: 'Точка разгрузки',
        dataIndex: 'unloading_point',
        render: (point: string, record: tableDataType) => {
            return (
                <SelectPoint point={point} is_loadingPoint={false} item={record}/>);
        }
    },
];