function retry(count,callback) {
    let cont = 0
    return async function(...args){
        while (cont <= count+1){
            try {  
                return await callback(...args)
            } catch (error) {
                cont++
                if (cont > count){
                    throw error
                }
            }
            
        }
    }
}

function timeout(delay, callback) {
    return async function(...args) {
        const promiseA = new Promise((resolve) => {
            resolve(callback(...args));
        });
        const promiseB = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error('timeout'));
            }, delay);
        });
        return Promise.race([promiseA, promiseB]);
    }
}