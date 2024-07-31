import styled from '@emotion/styled'
import {Dialog as ReachDialog} from '@reach/dialog'

const Button = styled.button(({variant}) => {
  let variantStyles = {}

  if (variant === 'primary') {
    variantStyles = {
      background: '#3f51b5',
      color: 'white',
    }
  } else if (variant === 'secondary') {
    variantStyles = {
      background: '#f1f2f7',
      color: '#434449',
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
  border: '1px solid #f1f1f4',
  background: '#f1f2f7',
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
  color: '#434449',
  border: `1px solid #f1f1f4`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  '@media (max-width: 991px)': {
    width: '100%',
    margin: '10vh auto',
  },
})

export {Button, Input, FormGroup, CircleButton, Dialog}
