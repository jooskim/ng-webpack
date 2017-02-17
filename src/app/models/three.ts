import { ActionReducer, Action } from '@ngrx/store';

export interface ThreeSpec {
    id: number;
    name: string;
    description: string;
}
export function reducerFunc(state: Array<ThreeSpec> = [], action: Action) {
    switch (action.type) {
        case 'ADD_ALL':
            return <Array<ThreeSpec>>action.payload;
        case 'APPEND_ONE':
            console.log([...state, action.payload]);
            return [...state, action.payload];
        default:
            return state;
    }
}

export const ThreeReducer: ActionReducer<Array<ThreeSpec>> = reducerFunc;