fetch('http://localhost:3000/api/consultation')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });