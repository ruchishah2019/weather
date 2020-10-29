import initialState from './initialState';

export const wheather = (state = initialState.weather, action) => {
    switch (action.type) {
        case 'UPDATESTATUS':
            return { ...state, status: action.value };
        case 'UPDATECITY':
            return { ...state, city: action.value };
        case 'UPDATEDATA':
            return { ...state, data: action.value };
        default:
            return state
    }
}


