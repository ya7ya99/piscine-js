function letterSpaceNumber(str) {
    const rep = /[a-z] [0-9](?![a-z0-9])/ig
     if ( str.match(rep) == null) {
        return []
     }
     return str.match(rep)
}

