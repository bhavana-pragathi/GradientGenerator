import {Button, Li} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientInfo, changeDirection, isActive} = props
  const {value, displayText} = gradientInfo
  const onClickDirection = () => changeDirection(value)
  return (
    <Li>
      <Button isActive={isActive} type="button" onClick={onClickDirection}>
        {displayText}
      </Button>
    </Li>
  )
}

export default GradientDirectionItem
