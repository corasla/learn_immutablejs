import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}

const createList = () => {
    const list = List()
    console.log(list)
}

const compareList = () => {
    const list = List()
    logOperation('Check if empty arr is list')
    logResult(List.isList([]))
    logOperation('Check if List from arr is list')
    logResult(List.isList(List([])))
}

const setOperator = () => {
    let list = List([0])
    list = list.set(3, 'val 3')
    logOperation('Set value of out of bounds key increases list length to include that key val')
    logResult(list.get(3))
    logResult(list.size)

    logOperation('Set value of negative key index, -1 is equivalent with the last item in the list')
    list = list.set(-1, 'val -1')
    logResult(list.get(-1))
    logResult(list.get(3))
}

const deleteInList = () => {
    let list = List([0, 1, 2, 3])
    logList(list)
    logOperation('delete an item at a specified index (1)')
    list = list.delete(1)
    logList(list)

    logOperation('delete an item at -1 index deletes last item')
    list = list.delete(-1)
    logList(list)
}

const insertInList = () => {
    let list = List([0, 1, 2, 3])
    logList(list)
    logOperation('insert an item at a specified index (1)')
    list = list.insert(1, 'val 1')
    logList(list)

    logOperation('insert an item at -1 inserts an item at the end')
    list = list.insert(-1, 'val -1')
    logList(list)
}

const clearList = () => {
    let list = List([0, 1, 2, 3])
    logOperation('clear list')
    list = list.clear()
    logResult(list.size)
}

const pushPopList = () => {
    let list = List([0, 1, 2, 3, 4])
    logOperation('Push item 5')
    list = list.push(5)
    logList(list)
    logOperation('Pop')
    list = list.pop()
    logList(list)
    logOperation('Shift')
    list = list.shift()
    logList(list)
    logOperation('Unshift')
    list = list.unshift('Unshifted')
    logList(list)
}

const updateList = () => {
    let list = List([0, 1, 2, 3, 4])

    logOperation('Update list with an updater function passed in as a single param')
    list = list.update(wholeList => {
        return wholeList.map(val => val % 2)
    })
    logList(list)

    list = List([0, 1, 2, 3, 4])
    logOperation('Update list with index (1) and an updater function that returns +3 ')
    list = list.update(1, val => val + 3)
    logList(list)

    list = List([0, 1, 2, 3, 4])
    logOperation('Update list with unset index (8) and a default of 0 for unsetValue ')
    list = list.update(8, 0, val => { return val === 0 ? 9001 : val })
    logList(list)
}

const mergeList = () => {
    let listA = List([0, 1, 2])
    let listB = List([3, 4])
    logOperation('Merge list of len 3 with list of len 2 -> result has len 3')
    let mergedList = listA.merge(listB)
    logList(mergedList)
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ createList() ]\n')
    createList()

    logHeaderSpace()
    log('[ compareList() ]\n')
    compareList()

    logHeaderSpace()
    log('[ Persistent changes() ]\n')
    log('[ setOperator() ]\n')
    setOperator()

    logHeaderSpace()
    log('[ deleteInList() ]\n')
    deleteInList()

    logHeaderSpace()
    log('[ insertInList() ]\n')
    insertInList()

    logHeaderSpace()
    log('[ clearList() ]\n')
    clearList()

    logHeaderSpace()
    log('[ pushPopList() ]\n')
    pushPopList()

    logHeaderSpace()
    log('[ updateList() ]\n')
    updateList()

    logHeaderSpace()
    log('[ mergeList() ]\n')
    mergeList()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
