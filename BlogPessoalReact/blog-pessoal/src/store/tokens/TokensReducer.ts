import { Action } from "./Actions";

export interface TokensState {
    tokens: string;
}

const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokensState = initialState, action: Action) => {
    switch (action.type){
        case "ADD_TOKEN":{
            return {tokens: action.payload};
        }

        default:
            return state;
    }
}