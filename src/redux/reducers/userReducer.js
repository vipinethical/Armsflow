const initialstate = {
    user: { name: 'Abdul Jobbar', age: 55 }
}
const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'USER_OR_NOT': {
            return state
        }
        default: return state;
    }
}
export default userReducer;