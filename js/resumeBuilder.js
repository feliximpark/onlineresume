
var bio = {
    name: "Christoph Knoop",
    role: "Journalist / Webdesigner",
    contacts: {
        twitter: "kno_in_wob",
        mobile: 0049277827837,
        adress: "Breslauer Straße 15",
        github: "feliximpark",
        location: "Wolfsburg",
        email: "nonadresse@yeeha.com",
        blog: "www.wolfsburger-nachrichten.de"
    },
    bioPic: "images/fry.jpg",
    welcome: "Hi there, I´m Christoph!",
    skills: ["Programming", "Writing", "Photography", "Piano"]
}



var education = {
    schools: [
            {
            name: "Universität Leipzig",
            location: "Leipzig, Saxony",
            degree: "Diplom",
            majors: "Political Sciene, Journalism",
            dates: 2008,
            url: "http://www.uni-leipzig.de"
        },
        {
            name: "Institute Science Po",
            location: "Aix-en-Provence, France",
            degree: "Programme Etudes d'Étranger",
            majours: "Political Science",
            dates: 2005,
            url: "http://www.sciencespo-aix.fr"
        }
    ]
}



var work = {
    jobs: [
    {
        employer: "Braunschweiger Zeitung",
        title: "Editor",
        dates: "January 2012 - today",
        description: "Leading a team of 14 Editors, we are covering Wolfsburg, Volkswagen and the footballteam of VfL Wolfsburg"
    },
    {
        employer: "das programm",
        title: "Editor",
        dates: "January 2009 - January 2012",
        description: "Video-Editing and work in front of the camera."
    }]
};

var projects = {
    projects: [
    {
        title: "Digital Election Maps",
        dates: 2016,
        description: "Making interactive election maps for the community election.",
        images: [
            // img1,
            // img2
            ]
    },
    {
        title: "VfL Pokal-Feier",
        dates: 2013,
        description: "A social media campaign for the VfL Wolfsburg",
        images: [
        // img1,
        // img2
        ]
    }]
}


// Puts name and role into the header
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Put the contact information in the header

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);


$("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedBlog);




// Puts the biopic in the HTML-document
var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPicture);



// Check wether ther are any skills in bio objekt
// if yes, append every them to the #header
// TO DO wird im Kurs mit while- und for-Schleife gemacht
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(el){
        console.log(el);
        var formattedSkills = HTMLskills.replace("%data%", el);
        $("#skills").append(formattedSkills);
    })

};

// Puts the work-section into the document
$("#workExperience").append(HTMLworkStart);
for (key in work) {
    if (work.hasOwnProperty(key)){
        console.log(work[key]);
        work[key].forEach(function(el){
            console.log(el);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", el.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", el.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", el.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", el.description);
        $(".work-entry:last").append(formattedDescription);



        console.log(work[key]);
    })
}
}






// var education = {};
// education.school = ["Uni Leipzig"];
// education.years = [8];
// education.city = ["Leipzig"];
// $("#main").append(work["position"]);
// $("#main").append(education.school);
