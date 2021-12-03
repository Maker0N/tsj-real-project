/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import { addFlatInfo } from '../../redux/mainReducer'

const EditPage = () => {
  const dispatch = useDispatch()
  const { flatsList } = useSelector((s) => s.mainReducer)
  const currentEditFlat = JSON.parse(localStorage.getItem('currentEditFlat'))
  const currentFlat = flatsList.filter((it) => it.id === Number(currentEditFlat))
  const [squareOwner, setSquareOwner] = useState({
    id: Number(currentEditFlat),
    owner: '',
    square: '',
  })
  const clearInput = () => {
    setSquareOwner({ ...squareOwner, owner: '', square: '' })
  }

  return (
    <main className="main-edit">
      <div className="title">Редактор</div>
      <div className="edit-wrapper">
        <div className="number-info">
          <div className="number">{currentEditFlat}</div>
          <div className="title">Инфо</div>
          <div>
            {currentFlat.length === 0
              ? (
                <div>
                  <section className="edit-info">
                    <article>{`Номер квартиры: ${currentEditFlat}`}</article>
                    <article>Площадь: Нет данных!</article>
                    <article>Собственник: Нет данных!</article>
                  </section>
                </div>
              )

              : (
                <div>
                  <section className="edit-info">
                    <article>{`Номер квартиры: ${currentFlat[0].id}`}</article>
                    <article>{`Площадь: ${currentFlat[0].square}`}</article>
                    <article>{`Собственник: ${currentFlat[0].owner}`}</article>
                  </section>

                </div>
              )}
          </div>
        </div>
        <div className="edit-input">
          <form>
            <label htmlFor="square">
              Площадь
              <input
                id="square"
                className="input"
                type="text"
                value={squareOwner.square}
                onChange={(e) => {
                  setSquareOwner({ ...squareOwner, square: e.target.value })
                }}
              />
            </label>
            <label htmlFor="owner">
              Собственник
              <input
                id="owner"
                className="input"
                type="text"
                value={squareOwner.owner}
                onChange={(e) => {
                  setSquareOwner({ ...squareOwner, owner: e.target.value })
                }}
              />
            </label>
          </form>
          <div className="edit-button">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                if (!JSON.parse(localStorage.getItem('flatsList'))) {
                  localStorage.setItem('flatsList', JSON.stringify([squareOwner]))
                } else {
                  let flatsListArr = JSON.parse(localStorage.getItem('flatsList'))
                  flatsListArr = [...flatsListArr, squareOwner]
                  localStorage.setItem('flatsList', JSON.stringify(flatsListArr))
                }
                dispatch(addFlatInfo(squareOwner))
                clearInput()
              }}
            >
              Внести изменения

            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default EditPage
