export const initialState = {
    user:null,
    nouser:null
};

export const actionTypes = {
    SET_USER : "SET_USER",
    Logout: "Logout"
};

const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                user: action.user,
            };
        
            case actionTypes.Logout:
                return{
                    user:action.nouser
                }

        default:
            return state;
    }
};

export default reducer;