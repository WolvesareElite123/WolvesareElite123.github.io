var time = 0;

function initiate()
{
    let tempyear = new Date().getFullYear();
    let tempmonth = new Date().getMonth()+1;
    time = tempyear + tempmonth/12;
    time = (Math.round(time*4)/4).toFixed(2);
    dispLang();
    dispTools();
    dispComp();
    dispSpoken();
}


const lang =[
    ['Assembly', 3,1,'Texas A&M','Low-Level'],
    ['C', 5, 2019, 'Self-Taught', 'Procedural'],
    ['C++', 5, 2018,'Texas A&M / Self-Taught','Object-Oriented'],
    ['C#', 5,2019,'Self-Taught, Texas A&M Systems, Amazon','Object-Oriented, Computer-Oriented'],
    ['CSS', 4,2018,'Self-Taught, Amazon','StyleSheet'],
    ['Haskell', 3,0.5,'Texas A&M','Functional'],
    ['HDL', 3, 0.5,'Texas A&M','Specialized'],
    ['HTML', 5,2015,'Self-Taught','Markup'],
    ['Java', 5,2015,'High School, Texas A&M','Object-Oriented'],
    ['JavaScript', 5,2018,'Self-Taught','Scripting'],
    ['jQuery', 5,2018,'Self-Taught','JavaScript Library'],
    ['MATLAB', 4,2021,'Texas A&M','Object Oriented / Procedural'],
    ['Python', 5,2019,'Texas A&M, Self-Taught','Object Oriented'],
    ['R', 4,1,'Texas A&M','Functional'],
    ['LESS', 5,2020,'Self-Taught','StyleSheet'],
    ['Robot Operating System (ROS)', 4,1,'Self-Taught','Framework'],
    ['TypeScript', 5,1,'Amazon','Scripting'],
    ['SQL Server', 5,2019,'Texas A&M Systems, Self-Taught','Database'],
    ['PostgresSQL', 4,1,'Texas A&M','Database'],
    ['NoSQL', 5,1,'Amazon','Database']
];

const tools = [
    ['AWS', 4, 1, 'Amazon', 'Cloud Platform'],
    ['Github', 5, 2016, 'Self-Taught', 'Software Development Platform'],
    ['Google Colab', 5, 2022.5, 'Texas A&M, Self-Taught', 'Software Development Platform'],
    ['Jupyter Notebook', 5, 2019, 'Texas A&M, Self-Taught', 'Software Development Platform'],
    ['Jenkins', 5, 1, 'Texas A&M Systems', 'Automation/DevOps Tool'],
    ['JetBrains', 5, 2019, 'Self-Taught', 'IDE'],
    ['Keras', 5, 2022.5, 'Texas A&M, Self-Taught', 'Python Library, Deep-Learning'],
    ['Linux', 5, 2019, 'Texas A&M, Self-Taught', 'Operating System'],
    ['LyX', 4, 1.5, 'Texas A&M', 'Document Processor'],
    ['.NET', 5, 2016, 'Self-Taught, Texas A&M Systems', 'Framework'],
    ['Pandas', 5, 2022.5, 'Texas A&M, Self-Taught', 'Python Library, Data Manipulation/Analysis'],
    ['QuickBase', 3, 1, 'Texas A&M Systems', 'Low-Code Application Platform'],
    ['React', 5, 2022.5, 'Texas A&M, Self-Taught, Amazon', 'JavaScript Library'],
    ['Red Gate', 3, 1, 'Texas A&M Systems', 'DevOps Tool'],
    ['Microsoft TFS', 4.5, 1, 'Texas A&M Systems', 'DevOps Tool'],
    ['Sci-kit Learn', 5, 2022, 'Texas A&M, Self-Taught', 'Python Library, Machine Learning'],
    ['TensorFlow', 5, 2022, 'Texas A&M, Self-Taught', 'Python Library, Machine Learning / Aritifical Intelligence'],
    ['Ubuntu', 5, 2019, 'Texas A&M, Self-Taught', 'Operating System, Linux Distribution'],
    ['Unity', 4, 2018, 'High School, Self-Taught, Texas A&M', 'Cross-Platform Game Engine'],
    ['Visual Studio', 5, 2015, 'Self-Taught, Texas A&M Systems', 'IDE'],
    ['Visual Studio Code', 5, 2020, 'Self-Taught', 'IDE']
];

const comp = [
    ['Adobe Creative Cloud', 5, 2015, 'Self-Taught', 'Computer Graphics'],
    ['Professional Project Documentation', 5, 2019, 'Texas A&M, Texas A&M Systems, Amazon', 'Administrative, Documentation'],
    ['Code Documentation', 5, 2015, 'High School, Texas A&M, Texas A&M Systems, Amazon', 'Administrative, Documentation'],
    ['Project Proposals', 5, 2019, 'Texas A&M, Texas A&M Systems, Amazon', 'Administrative, Proposals'],
    ['High Level Designs', 5, 20, 'Amazon', 'Administrative, Designs'],
    ['Agile Development', 5, 20, 'Texas A&M, Texas A&M Systems, Amazon, Intel', 'Methodology'],
    ['Waterfall Development', 4, 20, 'High School, Texas A&M', 'Methodology'],
    ['DevOps', 5, 20, 'Texas A&M Systems', 'Professional Experience, IT Operations'],
    ['Data', 5, 20, 'Self-Taught, High School, Texas A&M, Texas A&M Systems, Amazon, Intel', 'Data Management'],
    ['Full-Stack Development', 5, 20, 'Self-Taught, Texas A&M, Texas A&M Systems, Amazon', 'Professional Experience, Development Style'],
    ['Supply Chain', 4.5, 20, 'Amazon, Intel', 'Professional Experience, Field of Work'],
    ['Machine Learning', 5, 20, 'Texas A&M, Self-Taught', 'Field of Study'],
    ['Statistics', 4.5, 20, 'High School, Texas A&M, Self-Taught', 'Science'],
    ['Web Scraping', 5, 20, 'Self-Taught', 'Data Extraction']
];

const spoke = [
    ['English', 'Native Fluency', 'Professional Business Applications'],
    ['Mandarin Chinese', 'Native Fluency', 'Basic'],
    ['Taiwanese', 'Native Fluency', 'N/A'],
    ['Japanese', 'Elementary', 'Elementary']
];

function dispLang()
{
    let size = lang.length;
    for(let x = 0; x<size; x++)
    {
        var arr = lang[x];
        let language = arr[0];
        let prof = arr[1];
        let exp = arr[2];
        let edu = arr[3];
        let type = arr[4];
        let finalTime = exp;
        if(exp>2000)
        {
            finalTime = time-exp;
        }
        //Safety
        if(finalTime>time-2015)
        {
            finalTime=5; //WARNING!!!
        }
        htmlString = 
            '<tr>'+
                '<th scope="row" class="align-middle">'+language+'</th>'+
                '<td class="align-middle">'+prof+'</td>'+
                '<td class="align-middle">'+finalTime+'</td>'+
                '<td class="align-middle">'+edu+'</td>'+
                '<td class="align-middle">'+type+'</td>'+
            '</tr>';
        $('#langTableBody').append(htmlString);
    }
}

function dispTools()
{
    let size = tools.length;
    for(let x = 0; x<size; x++)
    {
        var arr = tools[x];
        let tool = arr[0];
        let prof = arr[1];
        let exp = arr[2];
        let edu = arr[3];
        let type = arr[4];
        let finalTime = exp;
        if(exp>2000)
        {
            finalTime = time-exp;
        }
        //Safety
        if(finalTime>time-2015)
        {
            finalTime=5; //WARNING!!!
        }
        htmlString =
            '<tr>'+
            '<th scope="row" class="align-middle">'+tool+'</th>'+
            '<td class="align-middle">'+prof+'</td>'+
            '<td class="align-middle">'+finalTime+'</td>'+
            '<td class="align-middle">'+edu+'</td>'+
            '<td class="align-middle">'+type+'</td>'+
            '</tr>';
        $('#toolTableBody').append(htmlString);
    }
}

function dispComp()
{
    let size = comp.length;
    for(let x = 0; x<size; x++)
    {
        var arr = comp[x];
        let skill = arr[0];
        let prof = arr[1];
        let exp = arr[2];
        let edu = arr[3];
        let type = arr[4];
        let finalTime = exp;
        if(exp>2000)
        {
            finalTime = time-exp;
        }
        //Safety
        if(finalTime>time-2015)
        {
            finalTime=5; //WARNING!!!
        }
        htmlString =
            '<tr>'+
            '<th scope="row" class="align-middle">'+skill+'</th>'+
            '<td class="align-middle">'+prof+'</td>'+
            '<td class="align-middle">'+finalTime+'</td>'+
            '<td class="align-middle">'+edu+'</td>'+
            '<td class="align-middle">'+type+'</td>'+
            '</tr>';
        $('#compTableBody').append(htmlString);
    }
}

function dispSpoken()
{
    let size = spoke.length;
    for(let x = 0; x<size; x++)
    {
        var arr = spoke[x];
        let language = arr[0];
        let speak = arr[1];
        let write = arr[2];
        htmlString =
            '<tr>'+
            '<th scope="row" class="align-middle">'+language+'</th>'+
            '<td class="align-middle">'+speak+'</td>'+
            '<td class="align-middle">'+write+'</td>'+
            '</tr>';
        $('#spokenTableBody').append(htmlString);
    }
}