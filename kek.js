const arr = [
    9.0000,
    9.0092,
    9.0037,
    9.0073,
    9.0157,
    9.0019,
    9.0167,
    9.0020,
    9.0016,
    9.0039,
    9.0019,
    9.0043,
    9.0067,
    9.0065,
    9.0049,
    9.0081,
    9.0015,
    9.0032,
    9.0005,
    9.0051,
    9.0023,
    9.0019,
    9.0000,
    9.0048,
    9.0109,
    9.0009,
    9.0092,
    9.0069,
    9.0038,
    9.0054
]

const getAVG = (mass) => {
    return mass.reduce((a,b) => {
        return a+b;
    })/mass.length;
}

console.log(document.getElementById('myChart'))

// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arr,
        datasets: [{
            label: 'Metrology',
            data: arr,
            backgroundColor:  'rgba(216, 27, 96, 0.6)',
            borderColor: [
                'rgba(216, 27, 96, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Life Expectancy by Country',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 9
                }
            }]
        }
    }
});