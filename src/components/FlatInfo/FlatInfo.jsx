/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'

const FlatInfo = ({ flat, hidden }) => {
  const { flatsList } = useSelector((s) => s.mainReducer)
  const currentFlat = flatsList.filter((it) => it.id === Number(flat))

  if (currentFlat.length === 0) {
    return (
      <div className={hidden === false ? 'current-flat-info' : 'current-flat-info hidden'} hidden={hidden}>
        <section>
          <article>Номер квартиры: Нет данных!</article>
          <article>Площадь: Нет данных!</article>
          <article>Собственник: Нет данных!</article>
        </section>
      </div>
    )
  }
  return (
    <div className="current-flat-info" hidden={hidden}>
      <section>
        <article>{`Номер квартиры: ${currentFlat[0].id}`}</article>
        <article>{`Площадь: ${currentFlat[0].square}`}</article>
        <article>{`Собственник: ${currentFlat[0].owner}`}</article>
      </section>
    </div>
  )
}

export default FlatInfo
