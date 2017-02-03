import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Search \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}
const logInitialList = (list) => {
    logOperation('Initial List')
    logList(list)
}
const createInitialList = () => {
    const list = immutable.fromJS([0, 1, 2, 3]).toList()
    logInitialList(list)
    return list
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ () ]\n')
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
