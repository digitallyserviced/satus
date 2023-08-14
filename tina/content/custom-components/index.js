import React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'
import { Pane } from 'tweakpane'

const PARAMS = {
  progress: 1,
}

const SliderUI = wrapFieldsWithMeta(({ input }) => {
  const [paneControl, setPaneControl] = React.useState(null)
  const elementRef = React.useRef(null)

  React.useEffect(() => {
    const pane = new Pane({ container: elementRef.current })
    setPaneControl(pane)
    pane.addBinding(PARAMS, 'progress', {
      min: 0,
      max: 1,
      step: 0.01,
    })
  }, [])

  React.useEffect(() => {
    paneControl?.on('change', (ev) => {
      input.onChange(JSON.stringify(ev.value))
    })
  }, [paneControl])

  return <div ref={elementRef}></div>
})

export const slider = () => ({
  name: 'slider',
  label: 'Slider',
  type: 'number',
  ui: {
    parse: (val) => Number(val),
    component: SliderUI,
  },
})
