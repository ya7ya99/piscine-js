export const getArchitects = () => {
    const elements = Array.from(document.querySelectorAll("body *"))
    const allArchitects = elements.filter(q => q.tagName==="A")
    const noA = elements.filter(q => q.tagName!=="A")    
    return [allArchitects,noA]
}
export const getClassical = () => {
    const [allArchitects] = getArchitects(); 
    const classical= allArchitects.filter(a => a.classList.contains('classical'))
    const Noclassical= allArchitects.filter(a => !a.classList.contains('classical'))
    return [classical,Noclassical]
}
export const getActive = () => {
    const [classical] = getClassical(); 
    const active= classical.filter(a =>  a.classList.contains('active'))
    const NOactive= classical.filter(a => !a.classList.contains('active'))
    return [active,NOactive]
}

export const getBonannoPisano = () => {
    const [active] = getActive()
    const BonannoPisano = active.find(a => a.id === 'BonannoPisano')
    const NoBonannoPisano = active.filter(a => a.id !== 'BonannoPisano')
    return [BonannoPisano,NoBonannoPisano]
}

