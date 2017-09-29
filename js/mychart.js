//********************
//TRAFFIC - LINE 
//********************
weekly(); 

const chartSelect = document.getElementById("traffic-chartType-list");

chartSelect.addEventListener('click', (e) => {
	if (e.target.tagName == 'LI')	{
		let filterType = e.target.textContent.toUpperCase();
		
		if (filterType === "HOUR" ) {
			hourly();
		} else if (filterType === "DAILY")	{
			daily();
		} else if (filterType === "WEEKLY")	{
			weekly();
		} else if (filterType === "MONTHLY")	{
			monthly();
		}
	}
})

//******WEEKLY********

function weekly() {
  var ctx = document.getElementById("line-chart");
  var lineChart = new Chart(ctx, {
      type: 'line',

      data: {
          labels: ["16-22", "23-29", "30-5", "6-12", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
          datasets: [{
              label: 'weekly',
              data: [500, 1000, 750, 1750, 1250, 1000, 1500, 2000, 1500, 2000],
              backgroundColor: [
                  "rgba(115, 119, 191, 0.2)",
              ],
              borderColor: [
                  "rgba(115, 119, 191, 1)",
              ],
              borderWidth: 1,
              lineTension: 0,
              pointBorderWidth: 5,
          }]
        },

      options: {
        legend: {
          display: false,
        }
      }
  });
}

//******HOURLY********

function hourly() {
  var ctx = document.getElementById("line-chart");
  console.log(ctx);
  var lineChart = new Chart(ctx, {
      type: 'line',

      data: {
        labels: ["00.00-2.59", "03.00-5.59", "6.00-8.59", "9.00-11.59", "12.00-14.59", "15.00-17.59", "18.00-20.59", "21.00-23.59"],
        datasets: [{
            label: 'hourly',
            data: [3, 0, 15, 6, 11, 9, 76, 58],
            backgroundColor: [
                "rgba(115, 119, 191, 0.2)",
            ],
            borderColor: [
                "rgba(115, 119, 191, 1)",
            ],
            borderWidth: 1,
            lineTension: 0,
            pointBorderWidth: 5,
        }]
      },

      options: {
        legend: {
          display: false,
        }
      }
  });
}

//******DAILY********

function daily() {
  var ctx = document.getElementById("line-chart");
  console.log(ctx);
  var lineChart = new Chart(ctx, {
      type: 'line',

      data: {
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'daily',
            data: [50, 75, 150, 100, 200, 175, 125],
            backgroundColor: [
                "rgba(115, 119, 191, 0.2)",
            ],
            borderColor: [
                "rgba(115, 119, 191, 1)",
            ],
            borderWidth: 1,
            lineTension: 0,
            pointBorderWidth: 5,
        }]
    },

      options: {
        legend: {
          display: false,
        }
      }
  });
}

//******MONTHLY********

function monthly() {
  var ctx = document.getElementById("line-chart");
  console.log(ctx);
  var lineChart = new Chart(ctx, {
      type: 'line',

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: 'monthly',
            data: [3000, 6000, 8000, 10000, 5000, 7000, 5000, 8000, 9000, 8000, 10000, 3000],
            backgroundColor: [
                "rgba(115, 119, 191, 0.2)",
            ],
            borderColor: [
                "rgba(115, 119, 191, 1)",
            ],
            borderWidth: 1,
            lineTension: 0,
            pointBorderWidth: 5,
        }]
      },

      options: {
        legend: {
          display: false,
        }
      }
  });
}

//****************************************
//DAILY TRAFFIC - BAR 
//****************************************
var ctx = document.getElementById("bar-chart");
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Votes',
            data: [50, 75, 150, 100, 200, 175, 125],
            backgroundColor: [
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)",
              "rgba(115, 119, 191, 1)"
            ],
          hoverBackgroundColor: [
              "rgba(115, 119, 191, 0.8)",
              "rgba(115, 119, 191, 0.8)",
              "rgba(115, 119, 191, 0.8)",
              "rgba(115, 119, 191, 0.8)",
              "rgba(115, 119, 191, 0.8)",
              "rgba(129, 201, 191, 0.8)",
              "rgba(116, 177, 191, 0.8)"
            ]
        }]
    },
    options: {
      legend: {
        display: false,
      }
    }
});

//****************************************
//MOBILE USERS - DOUGHNUT
//****************************************

var ctx = document.getElementById("doughnut");
var doughnut = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [
        "Phones",
        "Tablets",
        "Desktops"
    ],
    datasets: [
        {
            data: [100, 50, 300],
            backgroundColor: [
                "rgba(115, 119, 191, 1)",
                "rgba(129, 201, 143, 1)",
                "rgba(116, 177, 191, 1)"
            ],
            hoverBackgroundColor: [
                "rgba(115, 119, 191, 0.8)",
                "rgba(129, 201, 143, 0.8)",
                "rgba(116, 177, 191, 0.8)"
            ]
        }]
},
    options: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 14,
          fontSize: 14,
          fontColor: "#666",
          padding: 20,
        }
      }
  }
});