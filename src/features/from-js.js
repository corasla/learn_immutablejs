import immutable from 'immutable'

const logPrefix = '\n********************\n[ImmutableJS] - feature - FromJS\n********************\n'

const defaultItemsArr = ['JohnDoe', 'Joe Belfiery', 'Some random string', 'ducks are nice', 1, 3, null, 1.23, 3.14]

const simpleFromJS = () => {
    console.log('[simpleFromJS]\n')

    const map = immutable.fromJS({
        name: 'John Doe',
        age: '+9000',
    })

    console.log('[[*]] map over elements and log them')
    console.log(map.get('name'), map.get('age'))
}

const createMapFromArrayAndIterateOver = () => {
    console.log('[createMapFromArrayAndIterateOver]\n')

    const map = immutable.fromJS(defaultItemsArr)

    console.log('[[*]] map.get el by key \'0\' (converted arr index of el)')
    console.log(map.get('0'))

    console.log('[[*]] map over elements and log them')
    map.forEach(item => console.log(item))
}

const displayFullFeatures = () => {
    console.log(logPrefix)
    simpleFromJS()

    console.log('\n\n')
    createMapFromArrayAndIterateOver()

    console.log('\n\n')
}

const feature = {
    displayFullFeatures,
}

module.exports = feature