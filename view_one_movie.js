const form = document.getElementById('searchForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const Title = document.getElementById('Title').value;
  const Year = document.getElementById('Year').value;
  fetch(https://i9tsozqn90.execute-api.ap-south-1.amazonaws.com/add_get_search/get-a-movie' + Title +in year +Year)
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

  .then(movie => {
    if (!movie.Item) {
      alert('movie not found!!');
    } else {
      const title = movie.Item.title.S;
      const year = movie.Item.title.S;
      const description= movie.Item.description.S;
      const rating = movie.Item.rating.S;
      const cast = movie.Item.cast.S
     // document.getElementById('bookCard').classList.remove('d-none');
     // document.getElementById('BookID').innerHTML = "Book ID: " + bookId;
     // document.getElementById('BookName').innerHTML = bookName;
      //document.getElementById('BookGenre').innerHTML = "<i>The genre of the book is '" + bookGenre + "'</i>";
    }
  });
});