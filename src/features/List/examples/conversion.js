import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Conversion \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}

const toJS = () => {
    logOperation('Display list')
    let list = immutable.fromJS([1, 2, 3, 4, {data: true, vals: [0x0000, 0x0001, 0x0002, 0x0003]}])
    logList(list)
    logOperation('Convert list to js')
    console.log('\t\t', list.toJS())
}

const convertTo = () => {
    logOperation('Display list')
    let list = immutable.fromJS([1, 4, 3, 2, {data: true, vals: [0x0000, 0x0001, 0x0002, 0x0003]}])
    logList(list)
    logOperation('Convert list to array (shallow conversion)')
    logResult(list.toArray())
    logOperation('Convert list to Object (shallow conversion)')
    logResult(list.toObject())
    logOperation('Convert list to Map (shallow conversion)')
    logResult(list.toMap())
    logOperation('Convert list to OrderedMap (shallow conversion)')
    logResult(list.toOrderedMap())
    logOperation('Convert list to Set (shallow conversion)')
    logResult(list.toSet())
    logOperation('Convert list to OrderedSet (shallow conversion)')
    logResult(list.toOrderedSet())
    logOperation('Convert list to Stack (shallow conversion)')
    logResult(list.toStack())
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (toJS) ]\n')
    toJS()

    logHeaderSpace()
    log('[ (convertTo) ]\n')
    convertTo()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
