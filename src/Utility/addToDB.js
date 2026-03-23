import Swal from "sweetalert2";

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
        Swal.fire({
    icon: "error",
    title: "Already Installed",
    text: "This app is already installed!",
    confirmButtonColor: "#632EE3"
  });
    }
    else {
        storeAppData.push(id);
        // console.log(storeAppData);
        const data=JSON.stringify(storeAppData);
        localStorage.setItem("installation",data)
    }
}

export {addToStoreDB,getAvailableApp}