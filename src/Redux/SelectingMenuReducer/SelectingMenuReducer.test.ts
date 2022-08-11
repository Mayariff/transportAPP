import {pointsType} from "../../Data/Data";
import {SelectingMenuReducer, setPointsAC} from "./SelectingMenuReducer";

let startState: pointsType;

beforeEach(() => {
    startState = {
        'Warehouse_Kutuzovsky': {
            id: '12_LP',
            title: 'Склад на Кутузовском',
            location: 'Россия, Москва, Кутузовский проспект, 30',
            coords: [55.74148, 37.535835],
            is_loadingPoint: true
        },
        'WB_1_Kazenny_Lane': {
            id: '6_LP',
            title: 'Пункт WB, Казённый пер. 10с2',
            location: 'Россия, Москва, Большой Казённый переулок, 10с2',
            coords: [55.759902, 37.656424],
            is_loadingPoint: false
        }
    }
})

test('points for select should be set', () => {
    const action = setPointsAC(startState)
    const endState = SelectingMenuReducer(startState, action)

    expect(Object.keys(endState).length).toBe(2);
    expect(Object.values(endState)[0]).toEqual({
        id: '12_LP',
        title: 'Склад на Кутузовском',
        location: 'Россия, Москва, Кутузовский проспект, 30',
        coords: [55.74148, 37.535835],
        is_loadingPoint: true
    })
    expect(Object.values(endState)[1]).toEqual(startState['WB_1_Kazenny_Lane'])
})