const getAvailableApp = () => {
    const availableAppSTR = localStorage.getItem("installation");
    if (availableAppSTR) {
        const storeAppData = JSON.parse(availableAppSTR);
        return storeAppData;
    }
    else {
        return [];
    }
}

const addToStoreDB = (id) => {

    const storeAppData = getAvailableApp();

    if (storeAppData.includes(id)) {
        alert("This app already installed")
    }
    else {
        storeAppData.push(id);
        // console.log(storeAppData);
        const data=JSON.stringify(storeAppData);
        localStorage.setItem("installation",data)
    }
}

export {addToStoreDB}