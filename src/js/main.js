
//Burger
// End Burger

// search
//  End search


// popup
//  End popup



//  calc

// form__input--nuber
function change(objName, min, max, step) {
  let obj = document.getElementById(objName);
  let tmp = +obj.value + step;
  if (tmp<min) tmp=min;
  if (tmp>max) tmp=max;
  obj.value = tmp;
}

//Calendar
const picker = datepicker('.datepicker__element', {
  // Event callbacks.
  // onSelect: instance => {
  //   // Show which date was selected.
  //   console.log(instance.dateSelected)
  // },

  // onMonthChange: instance => {
  //   // Show the month of the selected date.
  //   console.log(instance.currentMonthName)
  // },

  // Customizations.
  formatter: (input, date, instance) => {
    // This will display the date as `1/1/2019`.
    input.value = date.toDateString()
    const value = date.toLocaleDateString()
    input.value = value
  },
  position: 'c', // center. This can be 1 of 5 values: 'tr', 'tl', 'br', 'bl', 'c'
  startDay: 1, // Calendar week starts on a Monday

  // Settings.
  alwaysShow: false, // Never hide the calendar.
  dateSelected: new Date(), // Today is selected.
  startDate: new Date(), // This month.
  showAllDates: true, // Numbers for leading & trailing days outside the current month will show.

})
// more info https://www.npmjs.com/package/js-datepicker#installation
//  End calendar



// get object calculator

let inpColor = document.querySelector('#color');
let inpSize = document.querySelector('#size');
let inpNumber = document.querySelector('#amount');
let inpDate = document.querySelector('.datepicker__element')
let inpCity = document.querySelector('#city');
let inpDelivery = document.querySelector('#delivery');
let buttonCalc = document.querySelector('.form__button');
let inpPrice = document.querySelector('.price__input');
let formCalc = document.querySelector('.calc__form');

let dataFormCalc = {};

buttonCalc.addEventListener('click', (e) => {
  e.preventDefault();

  dataFormCalc.color = inpColor.value;
  dataFormCalc.size = inpSize.value;
  dataFormCalc.numder = inpNumber.value;
  dataFormCalc.date = inpDate.value;
  dataFormCalc.city = inpCity.value;
  dataFormCalc.delivery = inpDelivery.value;

  console.log(dataFormCalc);

  // formCalc.reset();

  inpPrice.value = "$" + 76.55;

});


// End object calculator





