import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Iterators \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}

const keysIterator = () => {
    const list = immutable.fromJS([1, 2, 3, 4, {lol:true, rofl:false}]).toList()
    logOperation('get the keys iterator from a list object')
    logResult(list.keys())
}

const valuesIterator = () => {
    const list = immutable.fromJS([1, 2, 3, 4, {lol:true, rofl:false}]).toList()
    logOperation('get the values iterator from a list object')
    logResult(list.values())
}

const entriesIterator = () => {
    const list = immutable.fromJS([1, 2, 3, 4, {lol:true, rofl:false}]).toList()
    logOperation('get the entries ([key, val] tuple) iterator from a list object')
    logResult(list.entries())
}

const keySeq = () => {
    const list = immutable.fromJS([1, 2, 3, 4, {lol:true, rofl:false}]).toList()
    logOperation('get the keys Seq from a list object')
    logResult(list.keySeq())
}

const valueSeq = () => {
    const list = immutable.fromJS([1, 2, 3, 4, {lol:true, rofl:false}]).toList()
    logOperation('get the value Seq from a list object')
    logResult(list.valueSeq())
}

const entrySeq = () => {
    const list = immutable.fromJS([1, 2, 3, 4, {lol:true, rofl:false}]).toList()
    logOperation('get the entries Seq from a list object')
    logResult(list.entrySeq())
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (keysIterator) ]\n')
    keysIterator()

    logHeaderSpace()
    log('[ (valuesIterator) ]\n')
    valuesIterator()

    logHeaderSpace()
    log('[ (entriesIterator) ]\n')
    entriesIterator()

    logHeaderSpace()
    log('[ (keySeq) ]\n')
    keySeq()

    logHeaderSpace()
    log('[ (valueSeq) ]\n')
    valueSeq()

    logHeaderSpace()
    log('[ (entrySeq) ]\n')
    entrySeq()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
