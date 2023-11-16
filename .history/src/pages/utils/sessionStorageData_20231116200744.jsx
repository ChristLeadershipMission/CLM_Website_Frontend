
const FetchFromSessionStorage = (key, defaultValue)=>{
    return sessionStorage.getItem(key) != null ? JSON.parse(sessionStorage.getItem(key))
    :defaultValue;
}

const saveIntoSessionStorage = (key, value)=>{
    sessionStorage
}

export default FetchFromSessionStorage;