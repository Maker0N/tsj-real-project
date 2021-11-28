const initialState = {
  quantFlats: 75,
  flatsList: [
    {
      id: 72,
      owner: 'Макеров В.А.',
      square: 102.8,
    },
  ],
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default mainReducer
