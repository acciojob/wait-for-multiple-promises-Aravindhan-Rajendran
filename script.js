function randomTime() {
  return Math.floor(Math.random() * 2000) + 1000; // Random time between 1 and 3 seconds
}

const startTime = performance.now();

const promises = [1, 2, 3].map((index) => {
  const time = randomTime();
  return new Promise((resolve) => {
    setTimeout(() => resolve({ index, time }), time);
  });
});

Promise.all(promises).then(results => {
  const totalTime = (performance.now() - startTime) / 1000;
  const tableBody = document.getElementById('output');
  tableBody.innerHTML = ''; // Clear the loading row

  results.forEach(result => {
    const row = document.createElement('tr');
    row.id = `promise-${result.index}`; // Add unique ID for debugging
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    cell1.textContent = `Promise ${result.index}`;
    cell2.textContent = (result.time / 1000).toFixed(3);
    row.appendChild(cell1);
    row.appendChild(cell2);
    tableBody.appendChild(row);
  });

  const totalRow = document.createElement('tr');
  const totalCell1 = document.createElement('td');
  const totalCell2 = document.createElement('td');
  totalCell1.textContent = 'Total';
  totalCell2.textContent = totalTime.toFixed(3);
  totalRow.appendChild(totalCell1);
  totalRow.appendChild(totalCell2);
  tableBody.appendChild(totalRow);
});