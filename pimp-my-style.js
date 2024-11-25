import { styles } from './pimp-my-style.data.js';
let Index = 0
function pimp() {
    const button = document.querySelector('.button')
    if (!button.classList.contains('unpimp')){
        button.classList.add(styles[Index])
        Index++
    } else {
        Index--
        button.classList.remove(styles[Index])
        if (Index == 0){
            button.classList.toggle('unpimp')
            //button.classList.remove('unpimp')
        }
    }
    if (Index == styles.length){
        button.classList.toggle('unpimp')
        //button.classList.add('unpimp')
    }
}

export {pimp}