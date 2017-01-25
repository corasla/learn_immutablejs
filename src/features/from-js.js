import immutable from 'immutable'

const prefix = '\n********************\n[ImmutableJS] - feature - FromJS\n********************\n'

const defaultItemsArr = ['JohnDoe', 'Joe Belfiery', 'Some random string', 'ducks are nice', 1, 3, null, 1.23, 3.14]

const simpleFromJS = () => {
    const map = immutable.fromJS({
        name: 'John Doe',
        age: '+9000',
    })

    logOperation('map over elements and log them')
    logResult(map.get('name'), map.get('age'))
}

const createMapFromArrayAndIterateOver = () => {
    const list = immutable.fromJS(defaultItemsArr)

    logOperation('list.get el by key \'0\' (converted arr index of el)')
    logResult(list.get('0'))

    logOperation('list over elements and log them')
    list.forEach(item => logResult(item))
}

const changeMapValueUsingSet = () => {
    /*
     * Here fromJS and .Map do the same thing,
     * since the object is a one-level-deep object
     */
    const map = immutable.Map({
        name: 'Unique data name',
        type: 'somethingElse',
        id: '9001',
        role: 'unbeknownst',
        available: false,
    })

    logOperation('display initial mapped object')
    map.forEach(item => logResult(item))
    logOperation('display modified mapped object')

    const newMap = map.set('name', 'Not so unique name, lol')
    newMap.forEach(item => logResult(item))
}

const fromJsCreatesANestedMapByDefault = () => {
    /*
     * Here fromJS and .Map don't do the same thing,
     * All of the elements on the first level of the object will
     * become maps but anything further will be plain JS Objects when using .Map
     * If we use .fromJS then immutable sees that the object is multi-level-deep and
     * creates a nested map representing the data of the original object that we
     * pass in
     */
    const nestedMap = immutable.fromJS({
        root1: {
            arr: [1, 2, 3, 4, 5],
        },
        root2: {
            node1: {
                isNode: true,
            },
            node2: {
                arr: [1, 2, 3, 4],
            },
        }
    })
    logOperation('.fromJS creating a nested map of a multi-level object')
    console.log(nestedMap)
}

const useReviverWhenCreatingFromJS = () => {
    /*
     * What is not indexed goes to a map on the current level of the Iterable immutable object
     * When we go to the list, we parse again and if the item is not indexed, we create a map, if not, we create a list
     * In the map we can create lists if value is indexed or again a map if it's not indexed. Not 100% sure, yet!
     */
    const customMapAndListAggregate = immutable.fromJS({a: {b: [10, 20, 30]}, c: {d: 40, e: {f: 'lol'} }}, (key, value) => {
        const isIndexed = immutable.Iterable.isIndexed(value)
        return isIndexed ? value.toList() : value.toOrderedMap()
    })
    logOperation('.fromJS creating a custom aggregate of nestedMaps and lists for a multi-level object using a reviver')
    console.log(customMapAndListAggregate)
}

const displayFullFeatures = () => {
    log(prefix)
    log('[ simpleFromJS() ]\n')
    simpleFromJS()

    logHeaderSpace()
    log('[ createMapFromArrayAndIterateOver() ]\n')
    createMapFromArrayAndIterateOver()

    logHeaderSpace()
    log('[ changeMapValueUsingSet() ]\n')
    changeMapValueUsingSet()

    logHeaderSpace()
    log('[ fromJsCreatesANestedMapByDefault() ]\n')
    fromJsCreatesANestedMapByDefault()

    logHeaderSpace()
    log('[ useReviverWhenCreatingFromJS() ]\n')
    useReviverWhenCreatingFromJS()
}

const log = (str) => {
    console.log(str)
}

const logResult = (str) => {
    log('\t\tResult: ' + str)
}

const logOperation = (str) => {
    log('\t--> ' + str)
}

const logHeaderSpace = () => {
    log('\n\n')
}

const feature = {
    displayFullFeatures,
}

module.exports = feature