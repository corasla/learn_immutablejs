import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Reading values \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (listEquals) ]\n')
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
