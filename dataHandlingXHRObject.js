// GET data using XMLHttpRequest
function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("Successful GET: ", xhr.response);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}


// POST data using XMLHttpRequest
function postData() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    const payload = JSON.stringify({
        title: "Hello World",
        body: "POST Request",
        userId: 700,
    });

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log("Successful POST: ", JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send(payload);
}


// PUT data using XMLHttpRequest
function putData(objectNumericId) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/" + objectNumericId);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    const payload = JSON.stringify({
        id: 7,
        title: "ReShape",
        body: "PUT Request",
        userId: 7,
    });

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("Successful PUT: ", JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send(payload)
}


// PATCH data using XMLHttpRequest
function patchData(objectNumericId) {
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", "https://jsonplaceholder.typicode.com/posts/" + objectNumericId);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    const payload = JSON.stringify({
        body: "PATCH Request"
    });

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("Successful PATCH: ", JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send(payload);
}


// DELETE data using XMLHttpRequest
function deleteData(objectNumericId) {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/" + objectNumericId);

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log("Successful DELETE: ", xhr.response);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send();
}


// Run function(s)
getData();
postData();
putData(7);
patchData(7);
deleteData(7);


// Obs: POST, PUT & PATCH
// In practice, we use POST for CREATE operations (add a new resource),
// PUT for UPDATE operations (completely modify an existing resource),
// PATCH to apply partial modifications to a resource
