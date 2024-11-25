function sameAmount(str,  reg1, reg2){
    const globalReg1 = new RegExp(reg1.source, 'g');
    const globalReg2 = new RegExp(reg2.source, 'g');

    const array1 = [...str.matchAll(globalReg1)]
    const array2 = [...str.matchAll(globalReg2)]
    return array1.length == array2.length
}
