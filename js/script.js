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

notificationBadge.textContent = notificationMessages.length;

notificationWrap.addEventListener('click', () => {
	if(notificationList.style.display === "none")	{
   		notificationList.style.display = "flex";
	} else {
		notificationList.style.display = "none";
	}
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
