const transformDate = (date) => {
    return new Date(date).toString().substring(4, 21);
};

export default transformDate;