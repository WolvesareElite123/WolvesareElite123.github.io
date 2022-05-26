//Filter Related
function applyFilters()
{

}

function toggleInt()
{

}

function toggleProj()
{

}

function toggleOrg()
{

}


//Sort Related
document.getElementById("compName").addEventListener("click", sortCompany);
document.getElementById("compTime").addEventListener("click", sortTime);
document.getElementById("compTitle").addEventListener("click", sortTitle);
document.getElementById("compGroup").addEventListener("click", sortDept);

document.getElementById("projName").addEventListener("click", sortDept);
document.getElementById("projTime").addEventListener("click", sortDept);
document.getElementById("projTitle").addEventListener("click", sortDept);


function sortCompany()
{
    constructAlert();
}

function sortTime()
{
    constructAlert();
}

function sortTitle()
{
    constructAlert();
}

function sortDept()
{
    constructAlert();
}

function constructAlert()
{
    window.alert("Sorting is currently unavailable");
}