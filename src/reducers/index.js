const initialState = {
  loginType: 0,
  angular: 0,
  react: 0,
  vuejs: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_ANGULAR':
    console.log("angular");
    return Object.assign({}, state, {
      angular: state.angular + 1
    })
    case 'SET_LOGIN_TYPE':
      return Object.assign({}, state, {
        loginType: action.num
      })
    default: 
      return state
  }
}