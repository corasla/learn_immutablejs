import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Creating Subsets \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}

const sliceRestLast = () => {
    let list = List([0, 1, 2, 3, 4])
    logOperation('Initial List')
    logList(list)

    logOperation('slice out the list (1, 3)')
    logList(list.slice(1, 3))

    logOperation('Display rest of list equiv of slicing list from second el to last')
    logList(list.rest())

    logOperation('Display butLast list equiv of slicing list from first el to second to last')
    logList(list.butLast())
}

const skipList = () => {
    let list = List([0, 1, 2, 3, 4])
    logOperation('Initial List')
    logList(list)

    logOperation('use skip(2) to return whole list after skipping x no of entries')
    logList(list.skip(2))

    logOperation('use skipLast(2) to return whole list after skipping from end to start x no of entries')
    logList(list.skipLast(2))

    logOperation('use skipWhile(val < 3) to skip while a condition returns false')
    logList(list.skipWhile(val => val < 3))

    logOperation('use skipUntil(val >= 3) to skip until a condition returns true')
    logList(list.skipUntil(val => val >= 3))
}

const takeList = () => {
    let list = List([0, 1, 2, 3, 4])
    logOperation('Initial List')
    logList(list)

    logOperation('use take(2) to get a new Iterable of the first n items')
    logList(list.take(2))

    logOperation('use takeLast(2) to get a new Iterable of the last n items')
    logList(list.takeLast(2))

    logOperation('use takeUntil(val > 3) to take while a condition is not met')
    logList(list.takeUntil(val => val > 3))

    logOperation('use takeWhile(val < 3) to take while a condition is met')
    logList(list.takeWhile(val => val < 3))
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (sliceRestLast) ]\n')
    sliceRestLast()

    logHeaderSpace()
    log('[ (skipList) ]\n')
    skipList()

    logHeaderSpace()
    log('[ (takeList) ]\n')
    takeList()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
