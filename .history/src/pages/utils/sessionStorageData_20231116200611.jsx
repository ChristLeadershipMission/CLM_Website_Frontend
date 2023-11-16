
const FetchFromSessionStorage = (key, defaultValue)=>{
    return sessionStorage.getItem(key) != null ? JSON.parse(sessionStorage.getItem(key))
    :defaultValue;
}

export default FetchFromSessionStorage;