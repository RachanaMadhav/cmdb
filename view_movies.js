fetch('https://msyvwv7mh8.execute-api.ap-south-1.amazonaws.com/default/bookManagement')
  .then(response => response.json())
  .then(data => displayData(data));
const MovieContainer = document.getElementById('MovieContainer');
const displayData = data => {
  const items = data.Items;
  items.forEach(Movies-Table => {
    const Title = Movies-Table.title.S;
    const Year = Movies-Table.year.S;
    const Description = Movies-Table.description.S;
    const Rating = Movies-Table.rating.S;
    const Cast = Movies-Table.cast.S;
    MovieContainer.insertAdjacentHTML('beforeend', `
      <tr>
        <th>${Title}</th>
        <td>${Description}</td>
 	<td>${Rating}</td>
	<td>${Cast}</td>
        <td>${Year}</td>
      </tr>
    `);
  });
}
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
     one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TH")[0];
      y = rows[i + 1].getElementsByTagName("TH")[0];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}