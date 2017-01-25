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
    const map = immutable.fromJS(defaultItemsArr)

    logOperation('map.get el by key \'0\' (converted arr index of el)')
    logResult(map.get('0'))

    logOperation('map over elements and log them')
    map.forEach(item => logResult(item))
}

const changeMapValueUsingSet = () => {
    const map = immutable.fromJS({
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

const displayFullFeatures = () => {
    log(prefix)
    log('[ simpleFromJS() ]\n')
    simpleFromJS()

    logHeaderSpace()
    log('[ createMapFromArrayAndIterateOver() ]\n')
    createMapFromArrayAndIterateOver()

    logHeaderSpace()
    log('[ createMapFromArrayAndIterateOver() ]\n')
    changeMapValueUsingSet()
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