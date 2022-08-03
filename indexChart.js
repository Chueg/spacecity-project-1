'use strict';

var DEFAULT_COLORS = ['#f08700', '#f49f0a', '#efca08', '#00a6a6', '#bbdef0'];

var total = function(myChart) {
	var sum = myChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
	return `Total: ${sum}`;
}
// Doughnut with one line of text in the center
var ctx = document.getElementById('chart').getContext('2d');
var Chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [200,300,400,500],
			backgroundColor: DEFAULT_COLORS,
			label: 'Dataset 1'
		}],
		labels: ['Item one', 'Item two', 'Item three', 'Item four']
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
