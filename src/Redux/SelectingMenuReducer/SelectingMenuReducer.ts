import {pointsType} from "../../Data/Data";

//города и точки погрузок-разгрузок скорее всего будут часто меняться, поэтому я решила их не хардкодить,
// а сыметировать ситуацию, что данные по точкам так же придут с сервера

const initialState: pointsType = {}

export const SelectingMenuReducer = (state: pointsType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SELECT_MENU/SET-POINTS':
            return action.points
        default:
            return state
    }
}
// actions
export const setPointsAC = (points: pointsType) => ({type: 'SELECT_MENU/SET-POINTS', points} as const)


export type ActionsType = ReturnType<typeof setPointsAC>