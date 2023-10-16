import { OrchestraPage, OrchestraToggle } from 'libs/orchestra'
import { forwardRef } from 'react'

const Orchestra = forwardRef(function Orchestra({}) {
  return (
    <OrchestraPage>
      <OrchestraToggle icon="⚙️" title="studio" id="studio" />
      <OrchestraToggle icon="📈" title="performance" id="stats" />
      <OrchestraToggle icon="🌐" title="grid" id="grid" />
      <OrchestraToggle
        icon="🚧"
        title="dev"
        id="dev"
        defaultValue={process.env.NODE_ENV === 'development'}
      />
    </OrchestraPage>
  )
})

export default Orchestra
