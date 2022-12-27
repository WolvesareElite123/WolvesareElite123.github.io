
//Kick things off
function initialize()
{
    loadFAQ();
}

const faqGroups = [
    "Academics",
    "Professional",
    "Coding",
    "Personal"
];

const faqQ1 = [
    "What fields so far have interested you the most?",
    "What courses influenced your programming practices the most?"
];
const faqA1 = [
    "So far, I've enjoyed Machine Learning and Artificial Intelligence the most. These are fields I seek to learn more about in the future",
    "The most significant courses that made me shift my coding practices was 1) Data Structures and Algorithms - where I learned of Big-O notation and " +
    "began to focus much of my code into developing more efficient code, and 2) design-related courses - where I discovered the benefits of automating things and making" +
    "my code as dynamic as possible."
];

const faqQ2 = [
    "What type of projects do you have professional experience in?",
    "Which companies/organizations did you work for? How long?",
    "What languages/frameworks did you use?",
    "How many of the internships were in office?"
];
const faqA2 = [
    "For all internships, I primarily work with full-stack development of websites",
    "In chronological order: Texas A&M System Offices (TAMUS) ~11 months, Amazon 12 weeks, Intel 12 weeks",
    "I used primarily MVC .NET and AWS technologies. As for languages, they were typically in C#, HTML, and React",
    "Of my 3 internships, 2 were in person with 1 requiring business casual dress",
];

const faqQ3 = [
    "What are your favorite/preferred languages?",
    "Where do your project ideas come from?",
    "What order did you learn programming languages?"
];
const faqA3 = [
    "I generally prefer to use C++ or Python unless it is not viable. Other languages" +
    " I favor include Java, JavaScript, and C#",
    "Something I've noticed is a lot of successful projects/companies derive from asking what the world needed or even what the founder wanted. While I don't exactly make these projects" +
    "to suddenly become the next tech billionaire, I do find most of my inspiration from random thoughts of things that would (or would have) made my life easier at one point.",
    "I began learning HTML since roughly middle school on my own. My first formal dip was Java in High School, and Python/C++ as a college freshman. Later one in Texas A&M we'd dip back into Java along" +
    " with some languages like HDL, Haskell, and more as well."
];


const faqQ4 = [
    "What are some of your hobbies outside of coding?",
    "What do you plan to do after retirement?",
    "Do you voluteer?"
];
const faqA4 = [
    "In my spare time I enjoy judo, badminton, and some casual gaming. In the near future, I hope to compete 'competitively' within our university for badminton",
    "Open a small coffee shop somewhere. I'd love to give out free food and drinks during finals season.",
    "After the pandemic, I significantly decreased in-person volunteering activities and have shifted more to offering free tutoring services. I do, however, plan to get back into volunteering in-person in the near future."
];


function loadFAQ()
{
    let numCats = faqGroups.length;
    let numFAQs = [faqQ1.length, faqQ2.length, faqQ3.length, faqQ4.length];
    let faqQList = faqQ1.concat(faqQ2, faqQ3, faqQ4);
    let faqAList = faqA1.concat(faqA2, faqA3, faqA4);
    console.log(faqQList);
    console.log(faqAList);
    console.log(numCats);
    console.log(numFAQs);
    let count = 0;
    for(let x = 0; x<numCats; x++)
    {
        let headerString = 
            '<div class="row">'+
            '<div class="col-sm-12">'+
            '<h3 class="text-white text-center">'+ faqGroups[x] +'</h3>'+
            '</div>'+
            '</div>';
        $('#FAQ').append(headerString);
        for(let y = 0; y<numFAQs[x]; y++)
        {
            let question = faqQList[count];
            let answer = faqAList[count];
            
            //Category = x
            //Question = y
            let htmlString = 
                '<div class="row">'+ '<!-- Question'+ y +'-->' +
                    '<div class="col-sm-12">'+
                        '<p>'+
                            '<a class="btn btn-outline-light btn-block" data-toggle="collapse" href="#faq'+ x + '_'+ y + '" role="button" aria-expanded="false" aria-controls="faq'+ x + '_'+ y + '">'+
                                question +
                            '</a>'+
                        '</p>'+
                        '<div class="collapse" id="faq'+ x + '_'+ y + '">' +
                            '<div class="card card-body">' +
                                '<p class="text-muted">' +
                                    answer +
                                '</p>' +
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'
            ;
             
            $('#FAQ').append(htmlString);
            count += 1;
        }
    }
    
}


/*
<div class="container-sm">
    <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <div class="row">
                <div class="col-sm-12">
                    <h3 class="text-white text-center">Academics</h3>
                </div>
            </div>
            <div class="row"> <!--Question1-->
                <div class="col-sm-12">
                    <p>
                        <a class="btn btn-outline-light btn-block" data-toggle="collapse" href="#faq1" role="button" aria-expanded="false" aria-controls="faq1">
                            What
                        </a>
                    </p>
                    <div class="collapse" id="faq1">
                        <div class="card card-body">
                            <p class="text-muted"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row"> <!--Question2-->
                <div class="col-sm-12">
                    <p>
                        <a class="btn btn-outline-light btn-block" data-toggle="collapse" href="#faq2" role="button" aria-expanded="false" aria-controls="faq2">
                            Question 1
                        </a>
                    </p>
                    <div class="collapse" id="faq2">
                        <div class="card card-body">
                            <p class="text-muted">Text!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row"> <!--Question3-->
                <div class="col-sm-12">
                    <p>
                        <a class="btn btn-outline-light btn-block" data-toggle="collapse" href="#faq3" role="button" aria-expanded="false" aria-controls="faq3">
                            Question 1
                        </a>
                    </p>
                    <div class="collapse" id="faq3">
                        <div class="card card-body">
                            <p class="text-muted">Text!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row"> <!--Question4-->
                <div class="col-sm-12">
                    <p>
                        <a class="btn btn-outline-light btn-block" data-toggle="collapse" href="#faq4" role="button" aria-expanded="false" aria-controls="faq4">
                            Question 1
                        </a>
                    </p>
                    <div class="collapse" id="faq4">
                        <div class="card card-body">
                            <p class="text-muted">Text!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row"> <!--Question5-->
                <div class="col-sm-12">
                    <p>
                        <a class="btn btn-outline-light btn-block" data-toggle="collapse" href="#faq5" role="button" aria-expanded="false" aria-controls="faq5">
                            Question 1
                        </a>
                    </p>
                    <div class="collapse" id="faq5">
                        <div class="card card-body">
                            <p class="text-muted">Text!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row"> <!--Question6-->
                <div class="col-sm-12">
                    <p>
                        <a class="btn btn-outline-light btn-block" data-toggle="collapse" href="#faq6" role="button" aria-expanded="false" aria-controls="faq6">
                            Question 1
                        </a>
                    </p>
                    <div class="collapse" id="faq6">
                        <div class="card card-body">
                            <p class="text-muted">Text!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row"> <!--Question7-->
                <div class="col-sm-12">
                    <p>
                        <a class="btn btn-outline-light btn-block" data-toggle="collapse" href="#faq7" role="button" aria-expanded="false" aria-controls="faq7">
                            Question 1
                        </a>
                    </p>
                    <div class="collapse" id="faq7">
                        <div class="card card-body">
                            <p class="text-muted">Text!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row"> <!--Question8-->
                <div class="col-sm-12">
                    <p>
                        <a class="btn btn-outline-light btn-block" data-toggle="collapse" href="#faq8" role="button" aria-expanded="false" aria-controls="faq8">
                            Question 1
                        </a>
                    </p>
                    <div class="collapse" id="faq8">
                        <div class="card card-body">
                            <p class="text-muted">Text!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-2"></div>
    </div>
</div>




 */