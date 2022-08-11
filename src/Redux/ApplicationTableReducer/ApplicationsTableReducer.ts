import {routingType} from "../../Data/Data";


const initialState: Array<TranspotApplicationsType> = []

export const ApplicationsTableReducer = (state: Array<TranspotApplicationsType> = initialState, action: ActionsType): Array<TranspotApplicationsType> => {
    switch (action.type) {
        case 'APPLICATIONS/SET-APPLICATIONS':
            return action.payload.applications.map(ap =>
                ({...ap, selected: false})
            )
        case 'APPLICATIONS/SELECT_APPLICATION':
            return state.map(ap =>
                ap.id === action.payload.id ? {...ap, selected: true} : {...ap, selected: false}
            )
        case 'APPLICATIONS/CHANGE-POINT':
            const is_loadingPoint = action.payload.is_loadingPoint
            return state.map(ap => ap.id === action.payload.id ? {
                ...ap,
                loading_point: is_loadingPoint ? action.payload.newPoint : ap.loading_point,
                unloading_point: is_loadingPoint ? ap.unloading_point : action.payload.newPoint
            } : ap)

        default:
            return state
    }
}

export const setApplicationAC = (payload: { applications: Array<routingType> }) => ({
    type: 'APPLICATIONS/SET-APPLICATIONS',
    payload
} as const)
export const selectApplicationAC = (payload: { id: string }) => ({
    type: 'APPLICATIONS/SELECT_APPLICATION',
    payload
} as const)
export const changePointAC = (payload: { id: string, is_loadingPoint: boolean, newPoint: string }) => ({
    type: 'APPLICATIONS/CHANGE-POINT',
    payload
} as const)


export type TranspotApplicationsType = routingType & { selected: boolean }
export type ActionsType = ReturnType<typeof setApplicationAC> | ReturnType<typeof selectApplicationAC>
    | ReturnType<typeof changePointAC>



