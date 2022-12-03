// GET data using Fetch
function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => console.log("Successful GET: ", data));
}

// Run function(s)
getData();
