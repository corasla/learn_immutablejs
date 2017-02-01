import immutable, { List } from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - List - Transient changes \n********************\n'
prefix += 'Lists are ordered indexed dense collections, much like a JavaScript Array.\n\n'

const logList = (list) => {
    list.forEach(el => logResult(el))
}

const withMutations = () => {
    let list = immutable.fromJS([0, 1, 2, 3, {a:1, b:2}]).toList()
    logOperation('Use withMutations to avoid creation of lists while chaining operations')
    logOperation('This only works with set, merge, push, pop, shift, unshift')
    list = list.withMutations(l => {
        return l.push(4).shift().unshift('first')
    })
    logList(list)
}

const withMutationsPerformanceTest = () => {
    const LIM1 = 100000
    const LIM2 = 10000
    const parseElsNormal = (lst) => {
        for (let i = 0; i < LIM2; i++) {
            lst = lst.push('new item').shift().unshift('new item')
        }
    }
    const parseElsWithMutations = (lst) => {
        lst = lst.withMutations(l => {
            for (let i = 0; i < LIM2; i++) {
                l.push('new item').shift().unshift('new item')
            }

            return l
        })
    }

    let arr = []
    for (let i = 0; i < LIM1; i++) {
        arr.push([1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    }


    let list = immutable.fromJS(arr).toList()

    console.time('parseElsNormal')
    parseElsNormal(list)
    console.timeEnd('parseElsNormal')

    list = immutable.fromJS(arr).toList()
    console.time('parseElsWithMutations')
    parseElsWithMutations(list)
    console.timeEnd('parseElsWithMutations')

}


const asMutablePerformanceTest = () => {
    const LIM1 = 100000
    const LIM2 = 10000
    const parseElsNormal = (lst) => {
        for (let i = 0; i < LIM2; i++) {
            lst = lst.push('new item').shift().unshift('new item')
        }
    }
    const parseElsWithAsMutable = (lst) => {
        lst = lst.asMutable()
        for (let i = 0; i < LIM2; i++) {
            lst = lst.push('new item').shift().unshift('new item')
        }
        lst = lst.asImmutable()
    }

    let arr = []
    for (let i = 0; i < LIM1; i++) {
        arr.push([1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    }


    let list = immutable.fromJS(arr).toList()

    console.time('parseElsNormal')
    parseElsNormal(list)
    console.timeEnd('parseElsNormal')

    list = immutable.fromJS(arr).toList()
    console.time('parseElsWithAsMutable')
    parseElsWithAsMutable(list)
    console.timeEnd('parseElsWithAsMutable')
}

const listToSeq = () => {
    const list = List([1, 2, 3, 4, {lol: true, rofl: false, meme: 9001}]).toList()
    const seq = list.toSeq()
    logOperation('Going to convert partial list/obj to seq / Keyed seq')
    logList(seq)

    const indexedSeq = seq
    console.log(indexedSeq.filter(v => v === 2).toString()) // Seq [ 2 ]
    const keyedSeq = seq.toKeyedSeq()
    console.log(keyedSeq.filter(v => v === 2).toString()) // Seq { 1: 2 }
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ (withMutations) ]\n')
    withMutations()

    logHeaderSpace()
    log('[ (withMutationsPerformanceTest) ]\n')
    withMutationsPerformanceTest()

    logHeaderSpace()
    log('[ (asMutablePerformanceTest) ]\n')
    asMutablePerformanceTest()

    logHeaderSpace()
    log('[ (listToSeq) ]\n')
    listToSeq()
}

const feature = {
    displayFullFeatures,
}

module.exports = feature
