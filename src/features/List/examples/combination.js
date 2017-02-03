import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Combination \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}
const logInitialList = (list) => {
    logOperation('Initial List')
    logList(list)
}
const createInitialList = () => {
    const list = immutable.fromJS([0, 1, 2, 3, {x:true, lol:false, rofl:{y:true,g:{omg:'lol'}}}]).toList()
    logInitialList(list)
    return list
}

const concat = () => {
    const list = createInitialList()

    logOperation('concat existing list with an array of [5, 6, 7]')
    logList(list.concat([5, 6, 7]))

    logOperation('concat existing list with a list of [5, 6, 7]')
    logList(list.concat(List([5, 6, 7])))
}

const flatten = () => {
    const list = createInitialList()
    logInitialList(list)

    logOperation('Flatten list default flatten()')
    logList(list.flatten())

    logOperation('Flatten list shallow flatten(true)')
    logList(list.flatten(true))

    logOperation('Flatten list to the second level flatten(2)')
    logList(list.flatten(2))
}

const flatMap = () => {
    let list = createInitialList()

    logOperation('flatMap(mapper, context)')
    list = list.flatMap((val, key, iter) => {
        return ['key: ' + key, val]
    }).flatten()

    logList(list)
}

const interpose = () => {
    let list = createInitialList()
    logOperation('interpose list with element between each other el')
    list = list.interpose(List([1, 2, 3]))
    logList(list)
}

const interleave = () => {
    let list = List([0, 1, 2, 3, 4])
    let list2 = List(['a', 'b', 'c', 'd', 'e'])
    logInitialList(list)
    logInitialList(list2)

    logOperation('Interleave elements from multiple lists')

    logList(list.interleave(list2))
}

const zip = () => {
    let list = List([0, 1, 2, 3, 4])
    let list2 = List(['a', 'b', 'c', 'd', 'e'])
    logInitialList(list)
    logInitialList(list2)

    logOperation('zip listA with listB')
    logList(list.zip(list2))

    logOperation('zipWith custom zipper func, listA with listB')
    logList(list.zipWith((a, b) => {
        return [a, '<', a + b, '<', b]
    }, list2))
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (concat) ]\n')
    concat()

    logHeaderSpace()
    log('[ (flatten) ]\n')
    flatten()

    logHeaderSpace()
    log('[ (flatMap) ]\n')
    flatMap()

    logHeaderSpace()
    log('[ (interpose) ]\n')
    interpose()

    logHeaderSpace()
    log('[ (interleave) ]\n')
    interleave()

    logHeaderSpace()
    log('[ (zip) ]\n')
    zip()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
