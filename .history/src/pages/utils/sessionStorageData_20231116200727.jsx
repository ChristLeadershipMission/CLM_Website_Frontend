
const FetchFromSessionStorage = (key, defaultValue)=>{
    return sessionStorage.getItem(key) != null ? JSON.parse(sessionStorage.getItem(key))
    :defaultValue;
}

const saveIntoSessionStorage = (key, )=>{
    return sessionStorage.getItem(key) != null ? JSON.parse(sessionStorage.getItem(key))
    :defaultValue;
}

export default FetchFromSessionStorage;