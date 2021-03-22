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
];
const T = 2.045229642132703;
const first = [];
const second = [];
let newArr = [];

const getAVG = (mass) => {
    return mass.reduce((a,b) => {
        return a+b;
    })/mass.length;
}

arr.forEach((item,index) => {
    if (index < arr.length/2) {
        first.push(item)
    } else {
        second.push(item);
    }
})
first.sort();
second.sort().reverse();

newArr = newArr.concat(first);
newArr = newArr.concat(second);
newArr.forEach(item => item = Number(item))

const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
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
            text: 'Metrology',
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



console.log('AVG:', getAVG(arr));

export default arr;
