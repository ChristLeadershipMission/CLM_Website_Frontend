const FetchFromSessionStorage = (key)=>{
    return JSON.parse(sessionStorage.getItem(key))
}

export default FetchFromSessionStorage;