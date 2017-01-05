import { ActionReducer, Action } from '@ngrx/store';

export interface ThreeSpec {
    id: number;
    name: string;
    description: string;
}

export const ThreeReducer: ActionReducer<Array<ThreeSpec>> = (state: Array<ThreeSpec> = [], action: Action) => {
    switch (action.type) {
        case 'ADD_ALL':
            return <Array<ThreeSpec>>action.payload;
        case 'APPEND_ONE':
            console.log([...state, action.payload]);
            return [...state, action.payload];
        default:
            return state;
    }
};