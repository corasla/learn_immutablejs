import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Reading values \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}

const getListItem = () => {
    logOperation('Display list')
    let list = List([1, 2, 3, 4])
    logList(list)
    logOperation('Get element at key 1')
    logResult(list.get(1))

    logOperation('Get element at invalid key 6, display custom val if not found')
    logResult(list.get(6, 'missing val'))
}

const checkForKey = () => {
    const list = immutable.fromJS([1, 2, 3, {a:true, b: 4}]).toList()

    logOperation('Display list')
    logList(list)

    logOperation('check if list has key [1]')
    logResult(list.has(1))

    logOperation('check if list has key [6]')
    logResult(list.has(6))
}

const listIncludes = () => {
    const list = immutable.fromJS([1, 2, 3, {a:true, b: 4, c:3}]).toList()
    logOperation('Display list')
    logList(list)

    logOperation('check if list includes value number 2')
    logResult(list.includes(2))
    logOperation('check if list includes value string 2')
    logResult(list.includes('2'))

    logOperation('check if list contains value number 2')
    logResult(list.contains(2))
    logOperation('check if list contains value string 2')
    logResult(list.contains('2'))

    logOperation('check if list contains complex value Map({a:true, b:4}')
    logResult(list.contains(immutable.fromJS({a:true, b:4, c:3})))
}

const getIn = () => {
    const list = immutable.fromJS([1, 2, 3, {a: {compl: 'found me!'}, b: 4, c:3}]).toList()
    logOperation('Display list')
    logList(list)

    logOperation('search for item in path [3, a, compl]')
    logResult(list.getIn([3, 'a', 'compl']))

    logOperation('search for item in path [2, fake]')
    logResult(list.getIn([2, 'fake']))

    logOperation('search for item in path provided by a list')
    logResult(list.getIn(List([3, 'a', 'compl'])))

    logOperation('search for item in path [2, fake] with not found replacement')
    logResult(list.getIn([2, 'fake'], 'you cant trust anybody'))
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (getListItem) ]\n')
    getListItem()

    logHeaderSpace()
    log('[ (checkForKey) ]\n')
    checkForKey()

    logHeaderSpace()
    log('[ (listIncludes) ]\n')
    listIncludes()

    logHeaderSpace()
    log('[ (getIn) ]\n')
    getIn()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
