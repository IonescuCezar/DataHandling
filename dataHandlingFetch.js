// GET data using Fetch API
function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => console.log("Successful GET: ", data));
}


// POST data using Fetch API
function postData() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "Hello World",
            body: "POST Request",
            userId: 700,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then(data => console.log("Successful POST: ", data));
}


// Run function(s)
getData();
postData();





