import styled from '@emotion/styled/macro'
import * as mq from 'styles/media-queries'
import * as color from 'styles/colors'
import {Dialog as ReachDialog} from '@reach/dialog'

const Button = styled.button(({variant}) => {
  let variantStyles = {}

  if (variant === 'primary') {
    variantStyles = {
      background: color.indigo,
      color: color.base,
    }
  } else if (variant === 'secondary') {
    variantStyles = {
      background: color.gray,
      color: color.text,
    }
  }

  const commonStyles = {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  }

  return {...commonStyles, ...variantStyles}
})

const Input = styled.input({
  // Input
  borderRadius: '3px',
  border: `1px solid ${color.gray10}`,
  background: color.gray,
  padding: '8px 12px',
})

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})
const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: color.text,
  border: `1px solid ${color.gray10}`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
  },
})

export {Button, Input, FormGroup, CircleButton, Dialog}
