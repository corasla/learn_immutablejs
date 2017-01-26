export const log = (str) => {
    console.log(str)
}

export const logResult = (str) => {
    log('\t\tResult: ' + str)
}

export const logOperation = (str) => {
    log('\t--> ' + str)
}

export const logHeaderSpace = () => {
    log('\n\n')
}
