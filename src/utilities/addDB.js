const addToDB = (key, value) => localStorage.setItem(key, value);

const getDataFromDB = (key) => {
    const value = JSON.parse(localStorage.getItem(key));
    return value;
}

export { addToDB, getDataFromDB }