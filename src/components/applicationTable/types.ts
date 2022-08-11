import {TranspotApplicationsType} from "../../Redux/ApplicationTableReducer/ApplicationsTableReducer";
import React from "react";

//тип для строк в таблице
export type tableDataType = TranspotApplicationsType & {
    key: React.Key
    number_in_table: number
    loading_point_address: string
    unloading_point_address: string
    selectValue: (value: string) => void
    value: string,
}

//тип для строки/селектора
export type edditableSpanType={
    point:string,
    item:tableDataType,
    is_loadingPoint: boolean
}