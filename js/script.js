const data = `[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]`;

const parsedData = JSON.parse(data);

const allPrices = document.querySelectorAll('.spending__amount');
const today = new Date();
let dd = today.getDay() - 1;

if (dd === -1) {
	dd = 6;
}
allPrices.forEach((price, index) => {
	if (parsedData[index].day === price.dataset.id) {
		price.textContent = `$${parsedData[index].amount}`;
	}

	if (parsedData[index].day === parsedData[dd].day) {
		price.previousElementSibling.classList.add('active');
	}
});

const allDays = document.querySelectorAll('.spending__day');
let amounts = [];
parsedData.forEach((data) => {
	amounts.push(data.amount);
});
const maxAmount = Math.max(...amounts);

allDays.forEach((day, index) => {
	const parent = day.closest('div');
	const bar = parent.querySelector('.spending__bar');

	day.textContent = parsedData[index].day;

	if (parsedData[index].amount === maxAmount) {
		bar.style.height = '150px';
	} else {
		bar.style.height = `calc(150px / (${maxAmount} / ${parsedData[index].amount})`;
	}
});

// TODO
// - MEDIAQUERIES ->> czcionki etc.
