var currentDisplay = 0;
var currentIntern = 0;
var currentProject = 0;
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

//Display Related
function displaySwitch(number)
{
    if(number!==currentDisplay)
    {
        if(number===0)
        {
            //Buttons
            document.getElementById("display0").classList.add('active');
            document.getElementById("display1").classList.remove('active');
            //View
            document.getElementById("internshipDisplay").style.display="block";
            document.getElementById("projectDisplay").style.display="none";
        }
        else if(number===1)
        {
            //Buttons
            document.getElementById("display1").classList.add('active');
            document.getElementById("display0").classList.remove('active');
            //View
            document.getElementById("internshipDisplay").style.display="none";
            document.getElementById("projectDisplay").style.display="block";
        }
        currentDisplay=number;
    }
    
}

function internSwitch(num)
{
    if(num!==currentIntern)
    {
        if(num===0)
        {
            //Buttons
            document.getElementById("intDisplay0").classList.add('active');
            document.getElementById("intDisplay1").classList.remove('active');
            document.getElementById("intDisplay2").classList.remove('active');
            //View
            document.getElementById("Amazon").style.display="block";
            document.getElementById("Intel").style.display="none";
            document.getElementById("TAMUS").style.display="none";
        }
        else if(num===1)
        {
            //Buttons
            document.getElementById("intDisplay0").classList.remove('active');
            document.getElementById("intDisplay1").classList.add('active');
            document.getElementById("intDisplay2").classList.remove('active');
            //View
            document.getElementById("Amazon").style.display="none";
            document.getElementById("Intel").style.display="block";
            document.getElementById("TAMUS").style.display="none";
        }
        else if(num===2)
        {
            //Buttons
            document.getElementById("intDisplay0").classList.remove('active');
            document.getElementById("intDisplay1").classList.remove('active');
            document.getElementById("intDisplay2").classList.add('active');
            //View
            document.getElementById("Amazon").style.display="none";
            document.getElementById("Intel").style.display="none";
            document.getElementById("TAMUS").style.display="block";
        }
        currentIntern = num;
    }
}

function projectSwitch(num)
{
    if(num!==currentProject)
    {
        if(num===0)
        {
            //Buttons
            document.getElementById("projDisplay0").classList.add('active');
            document.getElementById("projDisplay1").classList.remove('active');
            document.getElementById("projDisplay2").classList.remove('active');
            document.getElementById("projDisplay3").classList.remove('active');
            document.getElementById("projDisplay4").classList.remove('active');
            document.getElementById("projDisplay5").classList.remove('active');
            document.getElementById("projDisplay6").classList.remove('active');
            //View
            document.getElementById("Portfolio").style.display="block";
            document.getElementById("tocg").style.display="none";
            document.getElementById("mlap").style.display="none";
            document.getElementById("maze").style.display="none";
            document.getElementById("insom").style.display="none";
            document.getElementById("crypto").style.display="none";
            document.getElementById("machine").style.display="none";
        }
        else if(num===1)
        {
            //Buttons
            document.getElementById("projDisplay0").classList.remove('active');
            document.getElementById("projDisplay1").classList.add('active');
            document.getElementById("projDisplay2").classList.remove('active');
            document.getElementById("projDisplay3").classList.remove('active');
            document.getElementById("projDisplay4").classList.remove('active');
            document.getElementById("projDisplay5").classList.remove('active');
            document.getElementById("projDisplay6").classList.remove('active');
            //View
            document.getElementById("Portfolio").style.display="none";
            document.getElementById("tocg").style.display="block";
            document.getElementById("mlap").style.display="none";
            document.getElementById("maze").style.display="none";
            document.getElementById("insom").style.display="none";
            document.getElementById("crypto").style.display="none";
            document.getElementById("machine").style.display="none";
        }
        else if(num===2)
        {
            //Buttons
            document.getElementById("projDisplay0").classList.remove('active');
            document.getElementById("projDisplay1").classList.remove('active');
            document.getElementById("projDisplay2").classList.add('active');
            document.getElementById("projDisplay3").classList.remove('active');
            document.getElementById("projDisplay4").classList.remove('active');
            document.getElementById("projDisplay5").classList.remove('active');
            document.getElementById("projDisplay6").classList.remove('active');
            //View
            document.getElementById("Portfolio").style.display="none";
            document.getElementById("tocg").style.display="none";
            document.getElementById("mlap").style.display="block";
            document.getElementById("maze").style.display="none";
            document.getElementById("insom").style.display="none";
            document.getElementById("crypto").style.display="none";
            document.getElementById("machine").style.display="none";
        }
        else if(num===3)
        {
            //Buttons
            document.getElementById("projDisplay0").classList.remove('active');
            document.getElementById("projDisplay1").classList.remove('active');
            document.getElementById("projDisplay2").classList.remove('active');
            document.getElementById("projDisplay3").classList.add('active');
            document.getElementById("projDisplay4").classList.remove('active');
            document.getElementById("projDisplay5").classList.remove('active');
            document.getElementById("projDisplay6").classList.remove('active');
            //View
            document.getElementById("Portfolio").style.display="none";
            document.getElementById("tocg").style.display="none";
            document.getElementById("mlap").style.display="none";
            document.getElementById("maze").style.display="block";
            document.getElementById("insom").style.display="none";
            document.getElementById("crypto").style.display="none";
            document.getElementById("machine").style.display="none";
        }
        else if(num===4)
        {
            //Buttons
            document.getElementById("projDisplay0").classList.remove('active');
            document.getElementById("projDisplay1").classList.remove('active');
            document.getElementById("projDisplay2").classList.remove('active');
            document.getElementById("projDisplay3").classList.remove('active');
            document.getElementById("projDisplay4").classList.add('active');
            document.getElementById("projDisplay5").classList.remove('active');
            document.getElementById("projDisplay6").classList.remove('active');
            //View
            document.getElementById("Portfolio").style.display="none";
            document.getElementById("tocg").style.display="none";
            document.getElementById("mlap").style.display="none";
            document.getElementById("maze").style.display="none";
            document.getElementById("insom").style.display="block";
            document.getElementById("crypto").style.display="none";
            document.getElementById("machine").style.display="none";
        }
        else if(num===5)
        {
            //Buttons
            document.getElementById("projDisplay0").classList.remove('active');
            document.getElementById("projDisplay1").classList.remove('active');
            document.getElementById("projDisplay2").classList.remove('active');
            document.getElementById("projDisplay3").classList.remove('active');
            document.getElementById("projDisplay4").classList.remove('active');
            document.getElementById("projDisplay5").classList.add('active');
            document.getElementById("projDisplay6").classList.remove('active');
            //View
            document.getElementById("Portfolio").style.display="none";
            document.getElementById("tocg").style.display="none";
            document.getElementById("mlap").style.display="none";
            document.getElementById("maze").style.display="none";
            document.getElementById("insom").style.display="none";
            document.getElementById("crypto").style.display="block";
            document.getElementById("machine").style.display="none";
        }
        else if(num===6)
        {
            //Buttons
            document.getElementById("projDisplay0").classList.remove('active');
            document.getElementById("projDisplay1").classList.remove('active');
            document.getElementById("projDisplay2").classList.remove('active');
            document.getElementById("projDisplay3").classList.remove('active');
            document.getElementById("projDisplay4").classList.remove('active');
            document.getElementById("projDisplay5").classList.remove('active');
            document.getElementById("projDisplay6").classList.add('active');
            //View
            document.getElementById("Portfolio").style.display="none";
            document.getElementById("tocg").style.display="none";
            document.getElementById("mlap").style.display="none";
            document.getElementById("maze").style.display="none";
            document.getElementById("insom").style.display="none";
            document.getElementById("crypto").style.display="none";
            document.getElementById("machine").style.display="block";
        }
        currentProject = num;
    }
}

//Pop Overs
function pop(key)
{
    if(key===0)
    {
        $('#amznTrain1').popover('toggle');
    }
    
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