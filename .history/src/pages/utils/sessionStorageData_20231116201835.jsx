
const FetchFromSessionStorage = (key, defaultValue)=>{
    const data =  sessionStorage.getItem(key)
    console.log(data)
    return data != null ? JSON.parse(sessionStorage.getItem(key))
    :defaultValue;
}

const SaveIntoSessionStorage = (key, value)=>{
    sessionStorage.setItem(key, JSON.stringify(value));
}

export {FetchFromSessionStorage, SaveIntoSessionStorage};