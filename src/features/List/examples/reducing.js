import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Reducing a value \n********************\n'
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

const reduce = () => {
    let list = createInitialList()

    logOperation('Reduce list to the sum of its elements')
    logResult(list.reduce((red, val, k, it) => { return red + val }))
}

const everySome = () => {
    let list = createInitialList()

    logOperation('Check wether or not every item in a list is < 5')
    logResult(list.every(a => a < 5))

    logOperation('Check wether or not every item in a list is even')
    logResult(list.every(a => a % 2 === 0))

    logOperation('Check wether or not some items in a list is even')
    logResult(list.some(a => a % 2 === 0))
}

const isEmpty = () => {
    let list = immutable.fromJS([]).toList()
    logInitialList(list)

    logOperation('check if list is empty or not')
    logResult(list.isEmpty())
}

const count = () => {
    let list = createInitialList()

    logOperation('count els in list')
    logResult(list.count())

    logOperation('countBy odd els in list')
    logResult(list.countBy(el => el % 2 === 0))
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (reduce) ]\n')
    reduce()

    logHeaderSpace()
    log('[ (everySome) ]\n')
    everySome()

    logHeaderSpace()
    log('[ (isEmpty) ]\n')
    isEmpty()

    logHeaderSpace()
    log('[ (count) ]\n')
    count()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
