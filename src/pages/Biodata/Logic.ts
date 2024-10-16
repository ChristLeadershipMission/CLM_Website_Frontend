export const InputTypeLogic = (arg)=>{
    const InputType =  arg === "Email Adress"
    ? "email"
    : arg === "Profile Picture"
    ? "file"
    : arg === "DOB (Date of birth)"
    ? "date"
    : "text";
    return InputTypeLogic;
};
export const InputValueLogic = (arg, data)=>{
    const InputValue =   arg === "First Name"
    ? data?.firstname || ""
    : arg === "Last Name"
    ? data?.lastname || ""
    : arg === "Email Adress"
    ? data?.emailAddress || ""
    : arg === "Phone Number"
    ? data?.phoneNumber || ""
    : arg === "DOB (Date of birth)"
    ? data?.dob || ""
    : arg === "Profile Picture"
    ? data?.picture || ""
    : arg === "Marital Status"
    ? data?.maritalStatus || ""
    : "";
    return InputValue;
};