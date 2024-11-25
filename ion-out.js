function ionOut(str){
    const reg = /(\w*)t(?=ion)/g
    return str.match(reg) || []
}


