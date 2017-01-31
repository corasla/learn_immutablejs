import immutable from 'immutable'
import { log, logResult, logOperation, logHeaderSpace } from '../../utils/logger'

let prefix = '\n\n\n\n********************\n[ImmutableJS] - feature - Is() \n********************\n'
prefix += 'Value equality check with semantics similar to Object.is, but treats Immutable Iterables as values, equal if the second Iterable includes equivalent values.\n\n'

const simpleComparison = () => {
    const dataObj = {
        a: 1,
        b: 2,
        c: 3,
    }

    const mapA = immutable.fromJS(dataObj)
    const mapB = immutable.fromJS(dataObj)

    logOperation('check if 2 maps of the same object are equal')
    logResult(immutable.is(mapA, mapB))
}

const compareMapOf2SeparateSimilarObjects = () => {
    const dataObjA = {
        a: 1,
        b: 2,
        c: 3,
    }
    const dataObjB = {
        a: 1,
        b: 2,
        c: 3,
    }

    const mapA = immutable.fromJS(dataObjA)
    const mapB = immutable.fromJS(dataObjB)

    logOperation('check if 2 maps of similar objects are equal')
    logResult(immutable.is(mapA, mapB))
}

const compareMapOf2SeparateSimilarComplexObjects = () => {
    const dataObjA = {
        a: 1,
        b: [1, 2, 3],
        c: {
            ca: {
                arr: ['1', 2, 3]
            },
            cb: {
                arr: [1, '2', 3]
            }
        },
    }
    const dataObjB = {
        a: 1,
        b: [1, 2, 3],
        c: {
            ca: {
                arr: ['1', 2, 3]
            },
            cb: {
                arr: [1, '2', 3]
            }
        },
    }

    const mapA = immutable.fromJS(dataObjA)
    const mapB = immutable.fromJS(dataObjB)

    logOperation('check if 2 maps of similar complex objects are equal')
    logResult(immutable.is(mapA, mapB))
}

const compareMapOf2SeparateSlightlyDifferentComplexObjects = () => {
    const dataObjA = {
        a: 1,
        b: [1, 2, 3],
        c: {
            ca: {
                arr: [0, 2, 3, 0]
            },
            cb: {
                arr: [1, '2', 3]
            }
        },
    }
    const dataObjB = {
        a: 1,
        b: [1, 2, 3],
        c: {
            ca: {
                arr: ['0', 2, 3, 0]
            },
            cb: {
                arr: [1, '2', 3]
            }
        },
    }

    const mapA = immutable.fromJS(dataObjA)
    const mapB = immutable.fromJS(dataObjB)

    logOperation('check if 2 maps of slightly diffrent complex objects are equal')
    logResult(immutable.is(mapA, mapB))
}

const displayFullFeatures = () => {
    log(prefix)

    logHeaderSpace()
    log('[ simpleComparison() ]\n')
    simpleComparison()

    logHeaderSpace()
    log('[ compareMapOf2SeparateSimilarObjects() ]\n')
    compareMapOf2SeparateSimilarObjects()

    logHeaderSpace()
    log('[ compareMapOf2SeparateSimilarComplexObjects() ]\n')
    compareMapOf2SeparateSimilarComplexObjects()

    logHeaderSpace()
    log('[ compareMapOf2SeparateSlightlyDifferentComplexObjects() ]\n')
    compareMapOf2SeparateSlightlyDifferentComplexObjects()

}

const feature = {
    displayFullFeatures,
}

module.exports = feature