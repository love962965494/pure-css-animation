import React from 'react'

const LazyComponent = (path: string) => React.lazy(() => import('../pages' + path))

export default LazyComponent
