let calendar = document.getElementById('calendar');

function createCalendar(elem, year, month) {
  const fullDate = new Date(`${year}.${month}`);
  const days = fullDate.getDay();
  const monthFromZero = fullDate.getMonth() + 1;
  let daysInMonth = 0;
  
  // Calculating days in month
  
  switch(monthFromZero) {
    case 1:case 3:case 5:case 7:case 8:case 10:case 12:
      daysInMonth = 31;
      break;
    case 2:
      daysInMonth = 28;
      break;
    case 4:case 6:case 9:case 11:
      daysInMonth = 30;
      break;
    default: break;
  }
  
  // Creating table with first row
  
  let table = document.createElement('table');
  calendar.append(table);
  const daysList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  for (let j = 0; j < 1; j++) {
    let row = document.createElement('tr');
    for (let i = 0; i < daysList.length; i++) {
      let dayWeek = document.createElement('td');
      dayWeek.textContent = daysList[i];
      row.append(dayWeek);
    } 
  table.append(row);
  }
  
  // Pushing values to cells (value = number day of week (ex: saturday: 6, wednesday: 3, monday: 1))
  
  let dayCounter = 0;
  while(dayCounter < daysInMonth) {
    if (dayCounter == 0) {
      let row = document.createElement('tr');
      for (let i = 1; i < 8; i++) {
        let day = document.createElement('td');
        if (i < days) {
          day.textContent = '';
        } else {
          day.textContent = i;
        }
        row.append(day);
      }
      table.append(row);
    } else if (dayCounter % 7 === 0) {
      let row = document.createElement('tr');
      for (let i = 1; i < 8; i++) {
        let day = document.createElement('td');
        day.textContent = i;
        row.append(day);
      }
      table.append(row);
    }
    dayCounter++;
  }
  
  // Replacing values in cells 
  
  let rows = table.children;
  let trueDays = 1;
  for (let c of rows) {
    for (let key of c.children) {
      if (+key.innerText) {
        if (trueDays > daysInMonth) {
          key.innerText = '';
        } else {
          key.innerText = trueDays;
          ++trueDays;
        }
      }
    }
  }
}

createCalendar(calendar, 2012, 9);
