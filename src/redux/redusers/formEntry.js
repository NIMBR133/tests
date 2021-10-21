const initialState = {
    login: 'developer21',
    password: '123456',
    loginEntry: '',
    passwordEntry: '',
    isLogin: false
}

const formEntry = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                loginEntry: action.payload,
                isLogin: (state.login === action.payload && state.password === state.passwordEntry) ? true : false
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                passwordEntry: action.payload,
                isLogin: (state.login === state.loginEntry && state.password === action.payload) ? true : false
            }
        default:
            return state
    }
}

export default formEntry