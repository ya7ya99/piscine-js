function citiesOnly(g) {
   return (g.map( x => x.city))
}

function upperCasingStates(arrays){
    return (arrays.map(c=>capitalize(c)))
}
function capitalize(str){
    let result = []
    const splitedstr = str.split(" ")
    splitedstr.map(g=>result.push(g[0].toUpperCase()+g.slice(1).toLowerCase()))
    return result.join(" ")
}

function fahrenheitToCelsius(tem) {
    return tem.map(f => (Math.floor((f.slice(0,-2)-32)/1.8)+'°C'))
}

function trimTemp(arr) {
    return arr.map( a => ({
        ...a, temperature : a.temperature.replaceAll(' ', '')})
    )
}

function tempForecasts(forecasts) {
    let arr =  forecasts.map(forecast => {
      const fahrenheit = parseFloat(forecast.temperature)
      
      const celsius = Math.floor((fahrenheit - 32) * 5 / 9)
      
      const city = forecast.city.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      const state = forecast.state.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      
      return celsius+'°Celsius in '+city+', '+state
    })
    return arr
    
  }
  
