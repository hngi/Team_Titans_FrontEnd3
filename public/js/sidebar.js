const sidebar = document.getElementById('sidebar');
const dropdown = document.getElementById('dropdown');

const onDropdownToggleClicked = () => {
    if(sidebar.className === "sidebar sidebar--closed"){
        sidebar.className = "sidebar sidebar--opened"
    }else{
        sidebar.className = "sidebar sidebar--closed"
    }
}

dropdown.addEventListener("click", onDropdownToggleClicked);