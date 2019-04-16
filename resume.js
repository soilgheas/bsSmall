

var resume = {
"name":"Amanda S. Garfield",
"phone":"801-231-1756",
"email":"amandasue3@gmail.com",

"sections": 
[
	{
		"skills":
		[
			"A+ Certification",
			"Computer repair", 
			"Hardware",
			"Networking", 
			"HTML", 
			"Java Script/jQuery",
			"cPanel"
		]
	},
	{
		"jobs": [
			{
				"employeer":"Server Plus",
				"posistion": "Supervisor",
				"dateRange":"March 2014 – September 2015",
				"accomps": [
					"Implemented cultural changes to the workplace to help keep retention, such as making cotton candy, seeking out suggestions from techs and helping techs who wanted a promotion to get the experience they needed to do so.",
					"Helped with the general running of the floor, communication between the customer's and the respective companies that we represented.",
					"Implemented training that encompassed basics of how the internet works, mail servers, routers, DNS, DHCP, mail clients, TCP/IP, MIMO etc.",
					"Managed one local office and three off site offices."
				]
				
			},
			{
				"employeer":"Bluehost",
				"posistion": "Web Hosting Support Technician",
				"dateRange":"November 2011 - October 2013",
				"accomps": [
					"Created a FAQ/Guide for Reseller hosting support to help assist and train fellow technicians.",
					"Assisted in Training of new Employees.",
					"Created over 300 customer chat templates (pre-made responses) for dozens of different technicalissues as well as guides and explanations of systems for customers.",
					"Hosted and managed fellow employee team building exercises."
				]
			}
		]
	}
]
};

let displayFlags = {
	skills:true,
	experienceSelector:true
}

let toggel = function(id){
	for (i in displayFlags)
	{
		if ( i != id) {
			document.getElementById(i).style.display = 'none';
			i = false;
		}
	}
	document.getElementById(id).style.display = 'block';
	
}

let displayContact = function(){
	var contact = document.getElementById('contactSelect');
	contact.innerHTML = resume.name
	+ '<br>' + resume.phone
	+ '<br>' + resume.email;
	
}

let displaySkills = function() {
	var skills = document.getElementById('skills');
	var listSkills = resume.sections[0].skills;
	
	skills.innerHTML = '<ul class="text-dark">';
	for (var i = 0; i < listSkills.length; i++) {
		skills.innerHTML += '<li>' + listSkills[i] + '</li>';
	}
	skills.innerHTML += '</ul>';
}

let displayExperience = function(){
	var experience = document.getElementById('experienceSelector');
	var listExperance = resume.sections[1].jobs;
	
	for ( var i = 0; i < listExperance.length; i++)
	{	
		experience.innerHTML += '<p class="text-dark">'
		experience.innerHTML += listExperance[i].employeer
		+ '<br>' + listExperance[i].posistion
		+ '<br>' + listExperance[i].dateRange
		+ '<ul>';
		for (var j = 0; j < listExperance[i].accomps.length; j++){
			experience.innerHTML += '<li>' + listExperance[i].accomps[j] + '</li>';
		}
		experience.innerHTML += '</ul>';
		experience.innerHTML += '</p>'
	}
	
}
function displayFromJson() {
	displayContact();
	displaySkills();
	displayExperience();
}
window.addEventListener("DOMContentLoaded", displayFromJson);
