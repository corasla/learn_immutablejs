import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Sequence Algorithms \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}

const mapList = () => {
    let list = List([1, 2, 3, 4])
    logOperation('Initial List')
    logList(list)
    logOperation('map over list and replace all items with diff % 2')
    list = list.map(val => val % 2)
    logList(list)
}

const filter = () => {
    let list = List([1, 2, 3, 4])
    logOperation('Initial List')
    logList(list)

    logOperation('filter list and create list with even numbers only')
    list = list.filter(val => val % 2 === 0)
    logList(list)

    list = List([1, 2, 3, 4])
    logOperation('filter list and create list with even numbers only === false (using filterNot)')
    list = list.filterNot(val => val % 2 === 0)
    logList(list)
}

const reverse = () => {
    let list = List.of(1, 2, 3, 4)
    logOperation('Initial list')
    logList(list)

    logOperation('reverse items in list')
    list = list.reverse()
    logList(list)

    logOperation('Test performance of reversing list')
    console.time('reverseList')
    reverseList()
    console.timeEnd('reverseList')
    function reverseList() {
        for (let i = 0; i < 10000; i++) {
            list = list.reverse().reverse().reverse()
        }
    }
}

const sort = () => {
    let list = List.of(1, 4, 5, 3, 4, 2, -1)
    logOperation('Initial list')
    logList(list)

    logOperation('sort items in list')
    list = list.sort()
    logList(list)

    logOperation('sort items in list by comparing to number 3')
    list = List.of(1, 4, 5, 3, 4, 2, -1)
    list = list.sort(val => val < 3 ? -1 : 1)
    logList(list)

    logOperation('Test performance of sorting a list')
    console.time('sortList')
    sortList()
    console.timeEnd('sortList')
    function sortList() {
        for (let i = 0; i < 1000; i++) {
            list = list.sort()
        }
    }

    logOperation('Test performance of sorting a list multiple times')
    console.time('sortRedundant')
    sortRedundant()
    console.timeEnd('sortRedundant')
    function sortRedundant() {
        for (let i = 0; i < 1000; i++) {
            list = list.sort().sort().sort().sort().sort()
        }
    }
}

const groupBy = () => {
    let list = immutable.fromJS([0, 'omg', {kewl: true}, {kewl:false}, {kewl:true, haha:'omg'}, {unkewl: true}, 1, 3, 4]).toList()
    // let list = immutable.fromJS([{kewl: true}, {kewl:false}, {kewl:true}]).toList()
    logOperation('Initial List')
    logList(list)

    logOperation('Group by key [kewl]')
    let iterable = list.groupBy((val, key, iter) => val.get && val.get('kewl'))
    logList(iterable)
    console.log('\t\t', iterable)
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (mapList) ]\n')
    mapList()

    logHeaderSpace()
    log('[ (filter) ]\n')
    filter()

    logHeaderSpace()
    log('[ (reverse) ]\n')
    reverse()

    logHeaderSpace()
    log('[ (sort) ]\n')
    sort()

    logHeaderSpace()
    log('[ (groupBy) ]\n')
    groupBy()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
