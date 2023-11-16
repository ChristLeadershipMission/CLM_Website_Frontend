
const FetchFromSessionStorage = (key, defaultValue)=>{
    return sessionStorage.getItem(key) != null ? JSON.parse(sessionStorage.getItem(key))
    :defaultValue;
}

const saveIntoSessionStorage = (key, value)=>{
    sessi
}

export default FetchFromSessionStorage;