
const FetchFromSessionStorage = (key, defaultValue)=>{
    return sessionStorage.getItem(key) != null ? JSON.parse(sessionStorage.getItem(key))
    :defaultValue;
}

const SaveIntoSessionStorage = (key, value)=>{
    sessionStorage.setItem(key, value);
}

export default FetchFromSessionStorage;
export SaveIntoSessionStorage;