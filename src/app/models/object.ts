import { ActionReducer, Action } from '@ngrx/store';

export interface ObjectSpec {
    id: number;
    name: string;
    age: number;
};
export function reducerFunc(state: any = {}, action: Action) {
    switch (action.type) {
        case 'ADD':
            return action.payload;
        case 'EDIT':
            if (state.id !== action.payload.id) {
                return state;
            }
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export const ObjectReducer: ActionReducer<ObjectSpec> = reducerFunc;
