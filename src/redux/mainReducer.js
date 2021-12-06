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
      if (state.flatsList.map((it) => it.id).includes(action.payload.id)) {
        return {
          ...state,
          flatsList: state.flatsList.map((it) => (it.id === action.payload.id
            ? action.payload
            : it)),
        }
      }
      return {
        ...state,
        currentEditFlat: action.payload.id,
        flatsList: [...state.flatsList, action.payload],
      }

    default:
      return state
  }
}

export function addFlatInfo(payload) {
  let flatsList = JSON.parse(localStorage.getItem('flatsList'))
  const flatsListId = flatsList.map((it) => it.id)
  if (flatsListId.includes(payload.id)) {
    flatsList = flatsList.map((it) => (it.id === payload.id ? payload : it))
  } else {
    flatsList = [...flatsList, payload]
  }
  localStorage.setItem('flatsList', JSON.stringify(flatsList))
  return { type: 'ADD_FLAT_INFO', payload }
}

export default mainReducer
