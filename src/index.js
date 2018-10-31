import React from 'react'
import Portal from './suggestion-portal'

function SuggestionsPlugin(opts) {

  const callback = {}

  function onKeyDown(e, editor, next) {
    callback.editor = editor

    if (callback.onKeyDown) {
       return callback.onKeyDown(e, change, next)
    }

    next();
  }

  function onKeyUp(e, editor, next) {
    callback.editor = editor

    if (callback.onKeyUp) {
       return callback.onKeyUp(e, change, next)
    }

    next();
  }

  return {
    onKeyDown,
    onKeyUp,
    SuggestionPortal: (props) =>
      <Portal
        {...props}
        {...opts}
        callback={callback}
      />
  }
}

export default SuggestionsPlugin
