import React from 'react'
import styled from 'styled-components'
import BtnL from './BtnL'
import BtnM from './BtnM'
import BtnS from './BtnS'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faSun } from '@fortawesome/free-solid-svg-icons'
function Button() {

  return (
    <>
      <h1>Button</h1>
      <BtnWrap>
        <BtnL icon1={<FontAwesomeIcon icon={faChevronRight} />} icon2={<FontAwesomeIcon icon={faSun} />} color={'#55efc4'}/>
        <BtnM color={'#55efc4'}/>
        <BtnS color={'#55efc4'}/>
      </BtnWrap>
    </>
  )
}

const BtnWrap = styled.section`
    display: flex;
    gap: 20px;
`


export default Button