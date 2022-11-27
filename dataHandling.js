// GET data using XMLHttpRequest
function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}


// POST data using XMLHttpRequest
function postData() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    const payload = JSON.stringify({
        title: "Hello World",
        body: "POST request",
        userId: 700,
    });
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send(payload);
}


// Run functions
getData();
postData();