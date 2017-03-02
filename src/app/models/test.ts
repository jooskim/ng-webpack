import { ActionReducer, Action } from '@ngrx/store';

export interface TestSpec {
    numbers: number[];
};

export function reducerFunc(state: number[] = [], action: Action) {
    switch (action.type) {
        case 'REPLACE':
            return action.payload;
        case 'MERGE':
            return state.concat(action.payload);
        default:
            return state;
    }
}

export const TestReducer: ActionReducer<number[]> = reducerFunc;
