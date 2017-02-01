import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Deep persistent changes \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}

const setInList = () => {
    let list = immutable.fromJS([0, 1, 2, 3, 4, [5, 6, 7]])
    logOperation('Going to set el in list at pos 5, index 1 to custom value 1')
    list = list.setIn([5, 1], 'Custom Value 1')
    logList(list)

    list = List([0, 1, 2, 3, 4])
    list = list.set(5, List([5, 6, 7]))
    logOperation('Going to set el in list at pos 5, index 2 to custom value 2')
    list = list.setIn([5, 2], 'Custom Value 2')
    logList(list)
}

const deleteInList = () => {
    let list = immutable.fromJS([1, 2, 3, 4, [0, 1, 2]]).toList()
    logOperation('Going to delete els in valid keypath [4, 1]')
    list = list.deleteIn([4, 1])
    logList(list)

    list = List([1, 2, 3, 4])
    list = list.set(4, List([5, 6, 7]))
    logOperation('Going to delete els in invalid keypath of halflist [4, 1]')
    list = list.deleteIn([8, 1])
    logList(list)
}

const updateInList = () => {
    let list = immutable.fromJS([1, 2, 3, 4, 5, [6, 7, 8, 9], {a:1, b:2}]).toList()
    logOperation('Going to update element in list using conditional updater function which replaces 1 with 0')
    list = list.updateIn([6, 'a'], 'nothing here', val => {
        if (val === 1) return 0

        return val
    })
    logList(list)
    logOperation('Going to update element in list using def value and updater function on that')
    list = list.updateIn([6, 'c'], 'nothing here', val => {
        if (val === 1) return 0
        if (val === 'nothing here') return 'indeed'
        return val
    })
    logList(list)
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ setInList() ]\n')
    setInList()

    logHeaderSpace()
    log('[ deleteInList() ]\n')
    deleteInList()

    logHeaderSpace()
    log('[ updateInList() ]\n')
    updateInList()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
