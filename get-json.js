async function getJSON(path, params) {
    // let q = '?'
    // for (const [key, value] of Object.entries(params)) {
    //     q += `${key}=${value}&`
    // }
    // q = q.replaceAll(' ', '+')
    // q = q.slice(0,-1)
    const searchParams = new URLSearchParams(params);
    // console.log(searchParams.toString());

    const response = await fetch(path + '?' + searchParams.toString())
    //console.log(path + searchParams.toString());
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const jsonData = await response.json();
    if(jsonData.error){
        throw new Error(jsonData.error)
    }
    return jsonData.data
}


console.log(getJSON("/", { query: 'hello world', b: 5 }));
