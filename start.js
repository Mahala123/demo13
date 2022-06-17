// GET REQUEST
function getTodos() {
  //.log('GET Request');
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos"
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// POST REQUEST
function addTodo() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// ERROR HANDLING
function errorHandling() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}

// CANCEL TOKEN
function cancelToken() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts"
  })
    .then((res) => showOutput(res))
    .catch((err) => console.log(err));
}
// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
