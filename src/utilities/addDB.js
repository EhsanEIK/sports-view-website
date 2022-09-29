// save data to local storage
const addToDB = (key, value) => localStorage.setItem(key, value);

// get data from local storage
const getDataFromDB = (key) => {
    const value = JSON.parse(localStorage.getItem(key));
    return value;
}

export { addToDB, getDataFromDB }