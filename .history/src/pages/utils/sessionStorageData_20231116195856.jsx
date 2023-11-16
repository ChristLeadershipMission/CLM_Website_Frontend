const FetchFromSessionStorage = (key)=>{
    return sessionStorage.getItem(key) != null? JSON.parse(sessionStorage.getItem(key)):
}

export default FetchFromSessionStorage;