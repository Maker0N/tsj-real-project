/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const FlatInfo = ({ flat, hidden }) => {
  const { flatsList } = useSelector((s) => s.mainReducer)
  let [currentFlat] = flatsList.filter((it) => it.id === Number(flat))
  if (!currentFlat) {
    [currentFlat] = flatsList
  }
  localStorage.setItem('currentEditFlat', JSON.stringify(flat))

  return (
    <div className="current-flat-info" hidden={hidden}>
      <section>
        <article>{`Номер квартиры: ${currentFlat.id}`}</article>
        <article>{`Площадь: ${currentFlat.square}`}</article>
        <article>{`Собственник: ${currentFlat.owner}`}</article>
      </section>
      <Link to="edit">Изменить данные</Link>
    </div>
  )
}

export default FlatInfo
