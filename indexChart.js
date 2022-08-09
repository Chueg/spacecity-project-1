'use strict';
//the colors of the doughtnut labels
var labelColors = ['#f08700', '#f49f0a', '#efca08', '#00a6a6', '#bbdef0','#7fb7be', '#357266', '#dacc3e', '#bc2c1a', '#7d1538'
,'#000000','#C0C0C0','#808080','#800000','#008000','#00FFFF','#008080','#FFFF00','#800080','#f5f5dc',
'#5f9ea0','#deb887','#a52a2a','#ffebcd','#dc143c','#bdb76b','#ff8c00','#8fbc8f','#b22222','#1e90ff'];
//variables made from our localstorage and was pushed into two arrays(Expense & Cost) using a forloop
var expenseCosts = JSON.parse(localStorage.getItem("list"))
var expenseLabel = []
var expenseData = []
for(var i = 0; i <expenseCosts.length; i++)
{
    var costs = expenseCosts[i];
    expenseLabel.push(costs[0]);
    expenseData.push(costs[1]);
}
//function that gets the sum of the costs data
var initialValue = 0;
var total = function(Chart) {
	var sum = expenseData.reduce(
		(previousValue, currentValue) => previousValue + Number(currentValue),
	initialValue)
	return `Total: ${sum}`;
};
// Doughnut with one line of text in the center
var ctx = document.getElementById('chart').getContext('2d');
var Chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: expenseData,
			backgroundColor: labelColors,
			label: expenseData
		}],
		labels: expenseLabel
	},
	options: {
		responsive: true,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: true,
			fontSize: 20,
			text: 'Money Spent'
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: total,
						font: {
							size: '60',
							family: 'Arial, Helvetica, sans-serif',
							style: 'italic',
							weight: 'bold'
						},
						color: '#bc2c1a'
					}
				]
			}
		}
	}
});
