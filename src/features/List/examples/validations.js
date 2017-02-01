import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Validations \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}

const listEquals = () => {
    logOperation('Compare equality of simple lists')
    let listA = List([1, 2, 3])
    let listB = List([1, 2, 3])
    logResult(listA.equals(listB))

    logOperation('Compare equality of complex lists')
    listA = List([1, 2, 3, 4, {a:true}])
    listB = List([1, 2, 3, 4, {a:true}])
    logResult(listA.equals(listB))

    logOperation('Compare equality of complex lists fromJS()')
    console.time(checkListEquals)
    checkListEquals()
    console.timeEnd(checkListEquals)

    function checkListEquals() {
        listA = immutable.fromJS([1, 2, 3, 4, {a:true}]).toList()
        listB = immutable.fromJS([1, 2, 3, 4, {a:true}]).toList()
        let res = false
        const lim = Math.pow(10, 6)
        for (let i = 0; i < lim; i++) {
            res = listA.equals(listB)
        }

        logResult(res)
    }
}

const listHashCode = () => {
    let listA = immutable.fromJS([1, 2, 3, 4, 4, {a: 'lol'}])
    let listB = immutable.fromJS([1, 2, 3, 4, 4, {a: 'lol'}]).toList()

    logOperation('[not fully reliable in validation] - check hash code of 2 different lists')
    logResult(listA.hashCode())
    logResult(listB.hashCode())

    console.time(checkListHashCode)
    checkListHashCode()
    console.timeEnd(checkListHashCode)

    function checkListHashCode() {
        listA = immutable.fromJS([1, 2, 3, 4, {a:true}]).toList()
        listB = immutable.fromJS([1, 2, 3, 4, {a:true}]).toList()
        let res = false
        const lim = Math.pow(10, 7)
        for (let i = 0; i < lim; i++) {
            res = listA.hashCode() === listB.hashCode()
        }
        logResult(res)
    }
}

const immutableISPerf = () => {
    let listA = immutable.fromJS([1, 2, 3, 4, 4, {a: 'lol'}])
    let listB = immutable.fromJS([1, 2, 3, 4, 4, {a: 'lol'}]).toList()

    logOperation('compare 2 different lists using immutable is')
    logResult(listA.hashCode())
    logResult(listB.hashCode())

    console.time(checkImmIsPerf)
    checkImmIsPerf()
    console.timeEnd(checkImmIsPerf)

    function checkImmIsPerf() {
        listA = immutable.fromJS([1, 2, 3, 4, {a:true}]).toList()
        listB = immutable.fromJS([1, 2, 3, 4, {a:true}]).toList()
        let res = false
        const lim = Math.pow(10, 7)
        for (let i = 0; i < lim; i++) {
            res = immutable.is(listA, listB)
        }
        logResult(res)
    }
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (listEquals) ]\n')
    listEquals()

    logHeaderSpace()
    log('[ (listHashCode) ]\n')
    listHashCode()

    logHeaderSpace()
    log('[ (immutableISPerf) ]\n')
    immutableISPerf()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
