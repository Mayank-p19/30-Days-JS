const moment = require('moment');

console.log(moment());

console.log(moment().format());

console.log(moment().format('M Do YYYY, h:mm:ss a'));

console.log(moment().format('dddd'));

console.log(moment().format("MMM Do YY"));


const now1 = moment();
const future = now1.clone().add(3, 'days').subtract(2, 'hours');

console.log(future.format('MMMM Do YYYY, h:mm A'));

const date = moment().year(2025).month(0).date(1).hour(10).minute(30).second(0);
console.log(date.format('MMMM Do YYYY, h:mm:ss A'));

const newYork = moment.tz("2024-07-10 10:00", "America/New_York");
console.log(newYork.format('MMMM Do YYYY, h:mm A z'));

const london = newYork.clone().tz('Europe/London');
console.log(london.format('MMMM Do YYYY, h:mm A z'));

const start = moment('2024-01-01', 'YYYY-MM-DD');
const end = moment('2024-12-31', 'YYYY-MM-DD');

const daysDiff = end.diff(start, 'days');
console.log(`Difference in days: ${daysDiff}`);


// Event Scheduling
const events = [
    { name: 'Event 1', start: '2024-07-09 10:00', end: '2024-07-09 12:00' },
    { name: 'Event 2', start: '2024-07-10 09:00', end: '2024-07-10 10:30' },
    { name: 'Event 3', start: '2024-07-11 14:00', end: '2024-07-11 15:00' },
    { name: 'Event 4', start: '2024-07-10 11:00', end: '2024-07-10 12:00' }
  ];
  
  const now = moment();
  
  const upcomingEvents = events
    .filter(event => moment(event.end).isAfter(now))
    .sort((a, b) => moment(a.start).diff(moment(b.start)));
  
  console.log(upcomingEvents);