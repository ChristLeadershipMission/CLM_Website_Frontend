const FetchFromSessionStorage = (key, defaultValue)=>{
    return sessionStorage.getItem(key) != null? JSON.parse(sessionStorage.getItem(key)):null;
}

export default FetchFromSessionStorage;