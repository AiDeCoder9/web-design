// GIT
// React
// CSS

async function getReceipeList() {
  const url = "https://dummyjson.com/recipes";

  const response = await fetch(url);
  const data = await response.json();
  const result = document.getElementById("result");
  result.innerHTML = `<h1>Receipe App</h1>
  <div>
  ${renderReceiplist(data)}
  </div>
  `;
}
function renderReceiplist(data) {
  var receipes = "";
  for (let i = 0; i < data.recipes.length; i++) {
    receipes =
      receipes +
      `
      <div>
    <h6>${data.recipes[i].name}</h6>
    <p>${data.recipes[i].cookTimeMinutes}</p>
    <p>${data.recipes[i].difficulty}</p>
    <p>${data.recipes[i].cuisine}</p>
    </div>
    `;
  }
  return `
  <div>
  ${data.total}
  ${receipes}
  </div>
  
  `;
}
getReceipeList();

async function getReceipeDetail(id) {
  const url = `https://dummyjson.com/recipes/${id}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
getReceipeDetail(5);

async function searchReceipe(search) {
  const url = `https://dummyjson.com/recipes/search?q=${search}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
searchReceipe("chicken");

async function addReceipe() {
  const url = "https://dummyjson.com/recipes/add";
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // headers: { "Content-Type": "multipart/form-data" },
    body: JSON.stringify({
      name: "Tasty Pizza",
      /* other recipe data */
    }),
  });
  const data = await response.json();
  console.log(data);
}

addReceipe();
