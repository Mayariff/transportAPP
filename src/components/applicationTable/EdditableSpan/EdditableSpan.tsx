import React from 'react';
import {Form, Select} from "antd";
import {DefaultOptionType} from 'antd/es/select';
import s from './EdditableSpan.module.css'
import {edditableSpanType} from "../types";
import {displaySelectOptions} from "../../../utils/utils-application-table";
import {selectPointsInfo} from "../../../Redux/selectors";
import {useAppSelector} from "../../../utils/redux-utils";
import 'antd/dist/antd.min.css';

const {Option} = Select;


const EdditableSpan = React.memo(({point, is_loadingPoint, item}: edditableSpanType) => {

    const selectingMenuPoints = useAppSelector(selectPointsInfo)
    const options = displaySelectOptions(selectingMenuPoints, is_loadingPoint)


    //ф-я из antd , просто вынесена из разметки
    const filterOptionHandler = (input: string, option: DefaultOptionType | undefined) => (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())


    //изначальное значение для селектора
    const initialValue = is_loadingPoint ? item.loading_point : item.unloading_point

    const onChangeHandler = (value: string) => {
        item.selectValue(value)
    }

    return (
        <Form.Item name={`${item.id}_${is_loadingPoint}`} initialValue={initialValue} className={s.item_form}>
            {item.selected ?
                <Select className={s.selector}
                        showSearch
                        placeholder="Выбери точку"
                        optionFilterProp="children"
                        onChange={onChangeHandler}
                        value={item.value ? item.value : initialValue}
                        filterOption={filterOptionHandler}>
                    {options.map(op => <Option key={op.id} value={op.title}>{op.title}</Option>)}
                </Select>
                : <span> {initialValue} </span>
            }
        </Form.Item>
    );
});

export default EdditableSpan;