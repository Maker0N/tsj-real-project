import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FlatInfo from '../FlatInfo/FlatInfo'

const Main = () => {
  const [flat, setFlat] = useState(0)
  const [hidden, setHidden] = useState(true)
  const { quantFlats, flatsList } = useSelector((s) => s.mainReducer)
  const flats = Array(quantFlats).fill(0).map((item, index) => index + 1)

  return (
    <div
      className="table-wrapper"
      role="button"
      tabIndex={0}
      onClick={(e) => {
        const thisFlat = e.target.closest('.flat-cart')
        const flatInfo = e.target.closest('.current-flat-info')
        if (thisFlat !== null) {
          setFlat(thisFlat.dataset.flat)
          setHidden(false)
        } else if (flatInfo) {
          setHidden(false)
        } else {
          setHidden(true)
        }
      }}
      onKeyPress={(e) => {
        const thisFlat = e.target.closest('.flat-cart')
        if (thisFlat !== null) {
          if (e.key === 'Enter') {
            setFlat(thisFlat.dataset.flat)
            setHidden(false)
          }
        } else {
          setHidden(true)
        }
      }}
    >
      <div>
        <div className="title">Квартиры</div>
        <div className="table">
          {flats.map((it) => {
            let classFlat = `flat-cart ${it}`
            flatsList.forEach((item) => {
              if (it === item.id) {
                classFlat = `flat-cart ${it} flash`
              }
            })
            return (
              <div
                className={classFlat}
                data-flat={it}
                key={it}
              >
                {it}
              </div>
            )
          })}
        </div>
        <FlatInfo flat={flat} hidden={hidden} />
      </div>
    </div>
  )
}

export default Main
