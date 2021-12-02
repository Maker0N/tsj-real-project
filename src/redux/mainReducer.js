const ADD_FLAT_INFO = 'ADD_FLAT_INFO'

if (!JSON.parse(localStorage.getItem('flatsList'))) {
  localStorage.setItem('flatsList', JSON.stringify([{
    id: 'Нет данных!',
    owner: 'Нет данных!',
    square: 'Нет данных!',
  }]))
}

const initialState = {
  quantFlats: 75,
  currentEditFlat: '',
  flatsList: JSON.parse(localStorage.getItem('flatsList')),
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLAT_INFO:
      return { ...state, flatsList: [state.flatsList, action.payload] }
    default:
      return state
  }
}

export function addFlatInfo(payload) {
  return { type: 'ADD_FLAT_INFO', payload }
}

export default mainReducer
