module.exports.generateRandomString = (length) =>{
    const characters="QAZWSXEDCRFVTGBYHNUJMIKOLPqazwsxedcrfvtgbyhnujmikolp0987654321";
    let result ="";

    for(let i=0;i<length;i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;

}

module.exports.generateRandomNumber = (length) =>{
    const characters="0987654321";
    let result ="";

    for(let i=0;i<length;i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}