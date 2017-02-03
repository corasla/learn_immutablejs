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
    const list = immutable.fromJS([1, 1, 2, 1, 2, 3, 4, 4, 3, 3, 5, 6, 3]).toList()
    logInitialList(list)
    return list
}

const find = () => {
    let list = createInitialList()

    logOperation('find odd el')
    logResult(list.find(el => el % 2 === 0))

    logOperation('findLast odd el')
    logResult(list.findLast(el => el % 2 === 0))

    logOperation('findEntry odd el')
    logResult(list.findEntry(el => el % 2 === 0))

    logOperation('findLastEntry odd el')
    logResult(list.findLastEntry(el => el % 2 === 0))

    logOperation('findKey odd el')
    logResult(list.findKey(el => el % 2 === 0))

    logOperation('findLastKey odd el')
    logResult(list.findLastKey(el => el % 2 === 0))

    logOperation('keyOf el 3')
    logResult(list.keyOf(3))

    logOperation('lastKeyOf el 3')
    logResult(list.lastKeyOf(3))

    logOperation('max el')
    logResult(list.max())

    logOperation('indexOf el 3')
    logResult(list.indexOf(3))

    logOperation('lastIndexOf el 3')
    logResult(list.lastIndexOf(3))
}

const subset = () => {
    const list = createInitialList()
    const list2 = List([1, 1, 2, 1])

    logOperation('list 2')
    logList(list2)

    logOperation('is list2 subset of list?')
    logResult(list2.isSubset(list))

    logOperation('is list superset of list2')
    logResult(list.isSuperset(list2))
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (find) ]\n')
    find()


    logHeaderSpace()
    log('[ (subset) ]\n')
    subset()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
