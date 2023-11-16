const FetchFromSessionStorage = (key)=>{
    return sessionStorage.getItem(key)  JSON.parse(sessionStorage.getItem(key))
}

export default FetchFromSessionStorage;