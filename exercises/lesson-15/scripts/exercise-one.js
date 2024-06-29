import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const today = dayjs();

const dateAfterFiveDays = today.add(5, 'days');
console.log(dateAfterFiveDays.format('MMMM D'));

const dateAfterOneMonth = today.add(1, 'month');
console.log(dateAfterOneMonth.format('MMMM D'));

const datebeforeOneMonth = today.subtract(1, 'month');
console.log(datebeforeOneMonth.format('MMMM D'));

console.log(today.format('dddd'));

function isWeekend(date) {
  if (!date) {
    return;
  }

  const dayOfWeek = date.format('dddd');

  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

console.log(isWeekend(dateAfterFiveDays));