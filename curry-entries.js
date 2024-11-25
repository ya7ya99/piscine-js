function defaultCurry(obj1){
    return function(obj2) {
        let result = { ...obj1 }
        for (const [key, value] of Object.entries(obj2)) {
            result[key] = value;
        }
        return result;
    }
}

function mapCurry(func) {
    return function(obj) {
        let result = {}
        for (const [key, v] of Object.entries(obj)) {
            let [newKey, newValue] = func([key, v])
            result[newKey] = newValue
        }
        return result
    }
}

function reduceCurry(func) {
    return function(obj,x=0) {
        let res = x
        for (let key in obj) {
               res = func(res,[key, obj[key]])
        }
        return res
    }
}

function filterCurry(func) {
    return function(obj) {
      return Object.fromEntries(
        Object.entries(obj).filter(func)
      );
    };
  }
  
function reduceScore(personnel, initialValue = 0) {
    return reduceCurry(function(acc, [_, person]) {
        if (person.isForceUser) {
            return acc + person.pilotingScore + person.shootingScore
        }
        return acc
    })(personnel, initialValue)
}

function filterForce(personnel) {
    return filterCurry(function([_, person]) {
        return person.isForceUser && person.shootingScore >= 80
    })(personnel)
}

function mapAverage(personnel) {
    return mapCurry(function([key, person]) {
        return [key, {
            ...person,
            averageScore: (person.pilotingScore + person.shootingScore) / 2
        }]
    })(personnel)
}



console.log(mapCurry(([k, v]) => [`${k}🤙🏼`, `${v}🤙🏼`])({ emoji: 'cool' }), {
    'emoji🤙🏼': 'cool🤙🏼',
  });
