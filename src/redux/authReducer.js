const IS_LOGIN = 'IS_LOGIN'

const initialState = { isLogin: false }

if (!localStorage.getItem('auth')) {
  localStorage.setItem('auth', JSON.stringify(initialState))
}

const localAuth = JSON.parse(localStorage.getItem('auth'))

const authReducer = (state = localAuth, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return { ...state, isLogin: action.payload }
    default:
      return state
  }
}

export function isLoginFunc(payload) {
  localStorage.setItem('auth', JSON.stringify({ isLogin: payload }))
  return { type: IS_LOGIN, payload };
}

export default authReducer
