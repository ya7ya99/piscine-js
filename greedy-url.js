function getURL(str) {
    let urlreg = /https?:\/\/\w+((\_\w+)*)?((\-\w+)*)?((\.\w+)*)?(\/\w*((\_\w+)*)?((\-\w+)*)?((\.\w+)*)?((@+\w+)*)?)*(\?\w+\=[^&^\s]*)?((\&\w+\=[^&^\s]*)*)?/gi

    return str.match(urlreg) || []
}

function greedyQuery(str) {
    let urlreg = /https?:\/\/\w+((\_\w+)*)?((\-\w+)*)?((\.\w+)*)?(\/\w*((\_\w+)*)?((\-\w+)*)?((\.\w+)*)?((@+\w+)*)?)*(\?\w+\=[^&^\s]*)((\&\w+\=[^&^\s]+)(\&\w+\=[^&^\s]+))+/gi

    return str.match(urlreg) || []
}

function notSoGreedy(data) {
    let urls = getURL(data)
    return filterURLs(urls, 2, 3)
}

function filterURLs(urls, minParams, maxParams = Infinity) {
    return urls.filter(url => {
        let params = (url.match(/=/g) || []).length
        return params >= minParams && params <= maxParams
    })
}
