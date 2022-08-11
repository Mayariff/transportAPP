import {TranspotApplicationsType} from "../Redux/ApplicationTableReducer/ApplicationsTableReducer";
import {pointsType} from "../Data/Data";
import {tableDataType} from "../components/applicationTable/types";

// для отображения данных
export const display_data = (data: TranspotApplicationsType[],
                             selectingMenuPoints: pointsType,
                             selectValue: (value: string) => void,
                             value: string): tableDataType[] => {
    return data.map((d, i) => ({
            ...d,
            key: d.id,
            number_in_table: i + 1,
            loading_point: selectingMenuPoints[d.loading_point].title,
            unloading_point: selectingMenuPoints[d.unloading_point].title,
            loading_point_address: selectingMenuPoints[d.loading_point].location,
            unloading_point_address: selectingMenuPoints[d.unloading_point].location,
            selectValue: selectValue,
            value: value,
        }
    ))
}

//выводим пункты отправки и выдачи в селекторе
export const displaySelectOptions =(points: pointsType, is_loadingPoint:boolean)=>{
    return  Object.keys(points).map((id) => ({
        ...points[id],
    }))
        .filter(p=>p.is_loadingPoint === is_loadingPoint);
}