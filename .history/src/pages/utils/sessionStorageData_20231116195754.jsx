const FetchFromSessionStorage = (key)=>{
    return JSON.parse(sessionStorage.getItem("userData"))
}

export default FetchFromSessionStorage;