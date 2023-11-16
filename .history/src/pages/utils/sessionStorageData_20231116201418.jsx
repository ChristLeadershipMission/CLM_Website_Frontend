
const FetchFromSessionStorage = (key, defaultValue)=>{
    const data =  sessionStorage.getItem(key)
    con
    return data != null ? JSON.parse(sessionStorage.getItem(key))
    :defaultValue;
}

const SaveIntoSessionStorage = (key, value)=>{
    sessionStorage.setItem(key, value);
}

export {FetchFromSessionStorage, SaveIntoSessionStorage};