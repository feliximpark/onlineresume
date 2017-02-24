//Bio-Section
// creating the bio-object
var bio = {
    name: "Christoph Knoop",
    role: "Journalist / Webdesigner",
    contacts: {
        twitter: "kno_in_wob",
        mobile: "+49277827837",
        adress: "Breslauer Straße 15",
        github: "feliximpark",
        location: "Wolfsburg",
        email: "nonadresse@yeeha.com"
    },
    welcomeMessage: "Hi there, I´m Christoph!",
    skills: ["Programming", "Writing", "Photography", "Trumpet"],
    biopic: "images/knoop.jpg"
};

// creating the display-Methode in the bio-object
bio.nameRoleDisplay = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
};

//creating a method for displaying contact information
bio.contacts.display = function() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub);
};

bio.pictureDisplay = function() {
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPicture);
};

bio.welcomeDisplay = function() {
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
};

bio.skillsDisplay = function() {
    $("#header").append(HTMLskillsStart);
    if (bio.skills.length > 0) {
        bio.skills.forEach(function(el) {
            var formattedSkills = HTMLskills.replace("%data%", el);
            $("#skills").append(formattedSkills);
        });
    }
};

// creating the display-Method for all values of the bio-object
bio.display = function() {
    bio.nameRoleDisplay();
    bio.contacts.display();
    bio.pictureDisplay();
    bio.welcomeDisplay();
    bio.skillsDisplay();
};

// Eductation-Section
// creating education-object
var education = {
    schools: [{
            name: "Universität Leipzig",
            location: "Leipzig, Saxony",
            degree: "Diplom",
            majors: ["Political Sciene, Journalism"],
            dates: "2008",
            url: "http://www.uni-leipzig.de"
        },
        {
            name: "Institute Science Po",
            location: "Aix-en-Provence, France",
            degree: "Programme Etudes d'Étranger",
            majors: ["Political Science", "French"],
            dates: "2005",
            url: "http://www.sciencespo-aix.fr"
        }
    ],
    onlineCourses: [{
            title: "Nanodegree Frontend-Developer",
            school: "Udacity",
            dates: "2017",
            url: "www.udacity.com"
        },
        {
            title: "Data Journalism",
            school: "Funke Digital",
            dates: "2016",
            url: "www.funke-mediengruppe.de"
        }
    ]
};

//creating display-method in the education-object
education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(el) {
        var formattedName = HTMLschoolName.replace("%data%", el.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", el.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", el.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", el.location);
        var formattedMajors = HTMLschoolMajor.replace("%data%", el.majors);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry").append(formattedNameDegree);
        $(".education-entry").append(formattedLocation);
        $(".education-entry").append(formattedDates);
        $(".education-entry").append(formattedMajors);
    });
    $("#education").append("<br>");
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineCourses.forEach(function(el) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", el.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", el.school);
        var formattedTitelSchool = formattedTitle + formattedSchool;
        var formattedDates = HTMLonlineDates.replace("%data%", el.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", el.url);
        $(".education-entry:last").append(formattedTitelSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedUrl);
    });
};

// Creates the work-object
var work = {
    jobs: [{
            employer: "Braunschweiger Zeitung",
            title: "Editor",
            location: "Braunschweig",
            dates: "January 2012 - today",
            description: "Managing a team of 14 Editors, we are covering Wolfsburg, Volkswagen and the footballteam of VfL Wolfsburg"
        },
        {
            employer: "das programm",
            title: "Editor",
            location: "Berlin",
            dates: "January 2009 - January 2012",
            description: "Video-Editing and work in front of the camera."
        }
    ]
};

// Creates the method displayWork of the work-object
work.display = function() {
    work.jobs.forEach(function(el){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", el.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", el.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", el.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", el.description);
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", el.dates);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
            });
};

// Creating the projects-object
var projects = {
    projects: [{
            title: "Digital Election Maps",
            dates: "2016-2017",
            description: "Making interactive election maps for the community election.",
            images: [
                "images/project1.jpg",
                "images/project2.jpg"
            ]
        },
        {
            title: "VfL Pokal-Feier",
            dates: "2013",
            description: "A social media campaign for the VfL Wolfsburg",
            images: [
                "images/project3.jpg",
                "images/project4.jpg"
            ]
        }
    ]
};

// Creating the display-Methode of the projects-object
projects.display = function() {

    projects.projects.forEach(function(el) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", el.title);
        var formattedDate = HTMLprojectDates.replace("%data%", el.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", el.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDate);
        $(".project-entry:last").append(formattedDescription);
        el.images.forEach(function(pic){
                var formattedPicture = HTMLprojectImage.replace("%data%", pic);
                $(".project-entry:last").append(formattedPicture);
        });
    });
};

// creating a function, that bundles all the display-methods
function init() {
    bio.display();
    education.display();
    projects.display();
    work.display();
    $("#mapDiv").append(googleMap);
}

//Invoke the init-function to invoke all the display-methods
init();