const importModule = (path: string) => require('../pages' + path).default

export default importModule
