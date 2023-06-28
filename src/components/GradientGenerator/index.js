import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Heading,
  CustomDirection,
  CustomColors,
  ColorInput,
  MainBg,
  Button,
  ColorsDiv,
  Ul,
  ColorValue,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    currentGradientDirection: gradientDirectionsList[0].directionId,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientVal: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  changeDirection = direct => {
    this.setState({currentGradientDirection: direct})
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onGenerate = () => {
    const {currentGradientDirection, toColor, fromColor} = this.state
    this.setState({
      gradientVal: `to ${currentGradientDirection}, ${fromColor}, ${toColor}`,
    })
  }

  render() {
    const {
      fromColor,
      toColor,
      gradientVal,
      currentGradientDirection,
    } = this.state
    return (
      <MainBg data-testid="gradientGenerator" gradientVal={gradientVal}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <CustomDirection>Choose Direction</CustomDirection>
        <Ul>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              gradientInfo={eachItem}
              changeDirection={this.changeDirection}
              isActive={currentGradientDirection === eachItem.value}
            />
          ))}
        </Ul>
        <CustomColors>Pick the Colors</CustomColors>
        <ColorsDiv>
          <ColorValue>{fromColor}</ColorValue>
          <ColorInput
            type="color"
            value={fromColor}
            onChange={this.onChangeFromColor}
          />
          <ColorValue>{toColor}</ColorValue>
          <ColorInput
            type="color"
            value={toColor}
            onChange={this.onChangeToColor}
          />
        </ColorsDiv>
        <Button type="button" onClick={this.onGenerate}>
          Generate
        </Button>
      </MainBg>
    )
  }
}

export default GradientGenerator
