import {
    ApplicationsTableReducer,
    changePointAC,
    selectApplicationAC,
    setApplicationAC,
    TranspotApplicationsType
} from "./ApplicationsTableReducer";

let startState: Array<TranspotApplicationsType>
beforeEach(() => {
    startState = [
        {
            id: '1',
            application_number: 'VV12-03',
            loading_point: 'Airport_SHRM',
            unloading_point: 'WB_1_Kazenny_Lane',
            selected: false
        },
        {
            id: '2',
            application_number: 'VV14-05',
            loading_point: 'Airport_DMD',
            unloading_point: 'WB_2_Tverskaya',
            selected: false
        },
    ]
})

test('data for table should be set', () => {
    const action = setApplicationAC({applications: startState})
    const endState = ApplicationsTableReducer([], action)
    expect(endState.length).toBe(2);
    expect(endState[0].id).toBe('1')
    expect(endState[1].id).toBe('2')
})

test('application item in table should selected', () => {
    const action = selectApplicationAC({id: '1'})
    const endState = ApplicationsTableReducer(startState, action)
    expect(endState.length).toBe(2);
    expect(endState[0].selected).toBe(true)
    expect(endState[1].selected).toBe(false)
})

test('application item  should change loading_point', () => {
    const action = changePointAC({id: '1', is_loadingPoint: true, newPoint: 'Warehouse_Warsaw_hw'})
    const endState = ApplicationsTableReducer(startState, action)
    expect(endState.length).toBe(2);
    expect(endState[0].loading_point).toBe('Warehouse_Warsaw_hw')
    expect(endState[1].loading_point).toBe('Airport_DMD')
    expect(endState[0].unloading_point).toBe('WB_1_Kazenny_Lane')
    expect(endState[1].unloading_point).toBe('WB_2_Tverskaya')
})

test('application item  should change unloading_point', () => {
    const action = changePointAC({id: '2', is_loadingPoint: false, newPoint: 'OZN_1_Afonasevskyi'})
    const endState = ApplicationsTableReducer(startState, action)
    expect(endState.length).toBe(2);
    expect(endState[0].loading_point).toBe('Airport_SHRM')
    expect(endState[1].loading_point).toBe('Airport_DMD')
    expect(endState[0].unloading_point).toBe('WB_1_Kazenny_Lane')
    expect(endState[1].unloading_point).toBe('OZN_1_Afonasevskyi')
})