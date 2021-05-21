// Your code here
const mapToNegativize = (sourceArray) => {
    return sourceArray.map(x => x * (-1))
}

const mapToNoChange = (sourceArray) => {
    return sourceArray.map(x => x )
}

const mapToDouble = (sourceArray) => {
    return sourceArray.map(x => x * 2 )
}

const mapToSquare = (sourceArray) => {
    return sourceArray.map(x => x*x)
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
    return startingPoint + sourceArray.reduce((total, currentValue) => total + currentValue)
}

const reduceToAllTrue = (sourceArray) => {
    return sourceArray.reduce(
        (total, amount)  => { if (!!total == true && !!amount == true)
    {return true} else {
      return false}
    }
    )
}

const reduceToAnyTrue = (sourceArray) => {
    return sourceArray.reduce(
        (total, amount)  => { if (total == true)
    {return true} else {
      return !!amount}
    }
    )
}