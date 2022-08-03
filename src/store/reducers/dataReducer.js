const FETCH_DATA = "FETCH_DATA"
const FETCH_MORE_DATA = "FETCH_MORE_DATA"
const defaultState = []

export const dataReducer = (state = defaultState, action) =>{
    switch(action.type){
        case FETCH_DATA:
            return [...action.payload];
        case FETCH_MORE_DATA:
            return [...state, ...action.payload]
        default:
            return state;
    }
}

export const fetchDataAction = (payload) => ({type: FETCH_DATA, payload})
export const fetchMoreDataAction = (payload) => ({type: FETCH_MORE_DATA, payload})