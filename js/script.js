const closeButton = "<span class=\"close-button\" onclick=\"this.parentNode.style.display='none';\">&times;</span>";

//NOTIFICATION BADGE
const notificationWrap = document.getElementById("notification-wrap");
const notificationList = document.getElementById("notification-list");
const notificationBadge = document.getElementById("notification-badge");
notificationList.style.display = "none";

let notificationMessages = [
	"You have 4 new members",
	"You have 2 new comments",
	"You have 2 likes"
]

for (let i=0; i< notificationMessages.length; i++)	{
	let message = notificationMessages[i];
	let noti_item = document.createElement('li');
	noti_item.className = "notification-item";
	noti_item.innerHTML = message + closeButton;
	notificationList.appendChild(noti_item);
}

notificationWrap.addEventListener('click', (e) => {
   		notificationList.style.display = "flex";
		notificationBadge.style.display = "none";
});

//**********ALERT
const alertBox = document.getElementById("alert");

let alertMessage = "<strong>Alert:</strong> Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.";

alertBox.innerHTML = "<span class='alertMessage'>" + alertMessage + "</span>" + closeButton;

//**********TRAFFIC FILTER

const trafficFilters = document.getElementById("traffic-chartType-list");
const filterChoices = trafficFilters.children;

trafficFilters.addEventListener('click', (e) => {
	for (let i = 0; i< filterChoices.length ; i++) {
		filterChoices[i].classList.remove("active");
	}
	e.target.className = "active";	
});

//**********NEW MEMBERS


$.ajax({
  url: 'https://randomuser.me/api/?format=json&results=5&inc=picture,name,email&nat=gb',
  dataType: 'json',
  success: function(data) {
	let datalist;
	for (let i = 0; i<4 ; i++) {
		let newMember = data.results[i];
		let thumbnail = newMember.picture.thumbnail;
		thumbnail = '<img class="newMember-thumbnail" src="' + thumbnail + '" alt="member profile picture">';
		let email = newMember.email;
		let fullName = newMember.name.first + " " + newMember.name.last;
		
		let memberDiv = '<div class="newMember-wrapper clearfix">';
		memberDiv += thumbnail;
		memberDiv += '<p class="newMember-name">' + fullName + '</p>';
		memberDiv += '<p class="newMember-email">'+ email + '</p>';
		memberDiv += '<p class="joined-date">28/09/2017</p>';
        memberDiv += '</div>';
		  $("#new-members").append(memberDiv);
		
		datalist += '<option value="' + fullName + '">';
		
	}
    $("#current-members").append(datalist);  

  }
});
   
//**********MESSAGE + SETTINGS
const form = document.getElementById("message-form");

//MESSAGE FORM SUBMIT
form.addEventListener('submit', (e) => {
	let userName = document.getElementById("user-searchInput").value;
	let messageContent = document.getElementById("message-content").value;
	
	e.preventDefault();
	
	console.log(userName);
	if (userName == "" || messageContent == "") {
            alert('One of the fields are empty.');
          } else {
            alert('Message has been sent.');
          }
});

//LOCAL STORAGE

//Load from local storage WHEN PAGE UPS
      if (localStorage.length > 1) {
        const emailPreference = JSON.parse(localStorage.getItem("emailNoti"));
		$('#emailNoti').prop('checked', emailPreference);
        const profilePreference = JSON.parse(localStorage.getItem("publicProfile"));
		$('#publicProfile').prop('checked', profilePreference);
        const myTimezone = localStorage.getItem("timezone-dropdown");
		$("#timezone-dropdown").val(myTimezone)
      }

//SAVE BUTTON
$("#saveButton").click(function() {
	if (typeof(localStorage) !== "undefined") {
          
          const emailNotifications = document.getElementById("emailNoti");
          localStorage.setItem("emailNoti", emailNotifications.checked);
          const profileToPublic = document.getElementById("publicProfile");
          localStorage.setItem("publicProfile", profileToPublic.checked);
          const timezoneValue = document.getElementById("timezone-dropdown").value;
          localStorage.setItem("timezone-dropdown", timezoneValue);
		  alert("Settings Saved");
        } else {
            // Sorry! No Web Storage support.
            console.log('Sorry! No Web Storage support.')
          }
	
}) 
      
      
//CANCEL BUTTON
$("#cancelButton").click(function() {
        localStorage.clear();
        location.reload(); //reloads the page
})