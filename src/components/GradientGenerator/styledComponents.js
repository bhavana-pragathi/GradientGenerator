import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
`
export const CustomColors = styled.p`
  color: #ffffff;
`

export const CustomDirection = styled.p`
  color: #ffffff;
`
export const ColorInput = styled.input`
  border: none;
  outline: none;
  margin-right: 10px;
`
export const MainBg = styled.div`
  background-image: linear-gradient(${props => props.gradientVal});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  background-color: #00c9b7;
  border-radius: 3px;
  border: none;
  margin-top: 5px;
  padding: 5px;
  font-size: 12px;
`
export const ColorsDiv = styled.div`
  display: flex;
`
export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`
export const ColorValue = styled.p`
  margin-bottom: 3px;
`
