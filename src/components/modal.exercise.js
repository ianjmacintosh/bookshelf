/** @jsx jsx */
import {jsx} from '@emotion/core'

import * as React from 'react'
import {Dialog} from './lib'

const callAll =
  (...fns) =>
  (...args) => {
    fns.forEach(fn => {
      if (fn) {
        fn(...args)
      }
    })
  }

const ModalContext = React.createContext()

function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(false)

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

function ModalDismissButton({children: child}) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(child.props.onClick, () => setIsOpen(false)),
  })
}

function ModalOpenButton({children: child}) {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(child.props.onClick, () => setIsOpen(true)),
  })
}

function ModalContents(props) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)
  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  )
}

export {Modal, ModalDismissButton, ModalOpenButton, ModalContents}
