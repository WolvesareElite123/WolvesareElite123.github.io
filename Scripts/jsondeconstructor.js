
var brace = '{}';
var sep = ',';
var keysep = ':';
var target = '';
var input = '';

//Cleaned
var targetList = [];
var leftBrace = '{';
var rightBrace = '}';


function run()
{
    resetAll();
    retrieveData();
    cleanData();
    runData();
}

function resetAll()
{
    document.getElementById('out1').value = "";
    document.getElementById('out2').value = "";
    $(' #progress').attr('aria-valuenow', 0).css('width', 0+'%');
}

function retrieveData()
{
    brace = document.getElementById('inputBrace').value;
    sep = document.getElementById('inputSeparator').value;
    keysep = document.getElementById('inputkeySeparator').value;
    target = document.getElementById('targets');
    input = document.getElementById('input').value;
    if(target.value.length==0)
    {
        target.value = "";
    }
    else
    {
        target = target.value;
    }
}

function cleanData()
{
    brace = brace.replace(/\s/g, "");
    sep = sep.replace(/\s/g, "");
    keysep = keysep.replace(/\s/g, "");
    target = target.toString().replace(/\s/g, "");
    input = input.replace(/\s+/g, "").trim();
    input = input.replace(/['"]+/g, '');
    
    //Clean Target
    targetList = target.split(',');
    
    //Clean Brace
    leftBrace = brace.substring(0,brace.length/2)
    rightBrace = brace.substring(brace.length/2)
}

function runData()
{
    let count = 0; //Count layer
    let isKey = true; //False if we're on Value
    let lastKey = '';
    let lastVal = '';
    let currentKeyPath = [];
    let keyID = 0;
    for(let x = 0; x<input.length; x++)
    {
        //Progress Bar
        let currentProgress = ((x+1)/input.length)*100;
        currentProgress = Math.round(currentProgress);
        $('#progress').attr('aria-valuenow', currentProgress).css('width', currentProgress+'%');
        
        //Actual work
        
        //Detect Layer
        let char = input.substring(x,x+1);
        if(char === leftBrace) //New Layer
        {
            if (currentKeyPath.length === 0)
            {
                if(lastKey === '') //empty
                {
                    continue;
                }
            }
            //window.alert("Push1: " + lastKey);
            currentKeyPath.push(lastKey);
            let currentValue = document.getElementById('out1').value;
            document.getElementById('out1').value = currentValue + "\r\n";
            count++;
            // if(currentKeyPath.length>1)
            // {
            //     count++;
            // }
            continue;
        }
        else if(char === rightBrace) //End Layer
        {
            currentKeyPath.pop();
            count--;
            continue;
        }
        
        //Detect Text
        //if(char.toLowerCase()===char.toUpperCase()) //Detect is letter
        if(char.match(/[a-z]/i))
        {
            let keyStr = char;
            let valStr = '';
            let loc = x+1;
            isKey = true;
            while(char!==sep && char!==rightBrace)
            {
                char = input.substring(loc, loc+1);
                
                //New Layer
                if(char === leftBrace)
                {
                    /*
                    if(keyStr.length===0)
                    {
                        runFailed("runData>DetecText", "FAILED TO RECOGNIZE KEY")
                    }
                    window.alert("Push2: " + keyStr);
                    currentKeyPath.push(keyStr);
                    let currentValue = document.getElementById('out1').value;
                    document.getElementById('out1').value = currentValue + "\r\n";
                    count++;
                    x++;
                    */
                    break;
                }

                //Value Found
                if(char===keysep)
                {
                    isKey=false;
                    loc++;
                    continue;
                }
                
                if(isKey)
                {
                    keyStr += char;
                }
                else
                {
                    valStr += char;
                }
                loc++;
            }
            x = loc-1;

            let htmlString ="";
            for(let y = 0; y<count; y++)
            {
                htmlString+=">" + "    ";
            }
            htmlString += ">  " + keyStr + " : " + valStr + "\r\n";
            //$('#out1').append(htmlString);
            let currentValue = document.getElementById('out1').value;
            document.getElementById('out1').value = currentValue + htmlString;
            lastKey = keyStr;
            lastVal = valStr;
            
            
            /*
            let htmlString ="<p class='display-6' id=''>";
            for(let y = 0; y<count; y++)
            {
                htmlString+=">" + "&emsp";
            }
            htmlString +=
                ">" + keyStr + " : " + valStr +
            "</p>";
            $('#out1').append(htmlString);
            lastKey = keyStr;
            lastVal = valStr;
             */
        }
        
        //Target?
        if(targetList.length>0)
        {
            if(targetList.indexOf(lastKey) > -1)
            {
                //Print Path

                let htmlString ="";
                for(let y = 0; y<count; y++)
                {
                    htmlString+= "[" + currentKeyPath[y] + "]" + " > ";
                }
                htmlString += targetList[targetList.indexOf(lastKey)]; //currentKeyPath[currentKeyPath.length-1];
                //$('#out1').append(htmlString);
                let currentValue = document.getElementById('out2').value;
                document.getElementById('out2').value = currentValue + htmlString + ".\r\n";
                
                
                /*
                let htmlString = "<p class='display-6' id=''>";
                for(let y = 0; y<currentKeyPath.length-1; y++)
                {
                    htmlString+= "[" + currentKeyPath[y] + "]" + " > ";
                }
                htmlString += "<mark><u>" + currentKeyPath[currentKeyPath.length-1] + "</u></mark>"
                $('#out2').append(htmlString);
                 */
            }
        }
        
        //ERROR
        if(char.toLowerCase()!==char.toUpperCase())
        {
            runFailed("runData", "UNKNOWN CHARACTER: " + char);
            break;
        }
    }
}

function runFailed(location, msg)
{
    window.alert('FAILURE DETECTED IN: ' + location + ' DUE TO: ' + msg);
    window.alert('IF YOU BELIEVE THERE IS AN ERROR, PLEASE CONTACT THE DEVELOPER');
    return;
}