// import a http module
import http from "http"
import fetch from "node-fetch"

// create the server with HTTP
function reqListener(req, res) {
    const url = req.url
    let tableData = "<table border='1'><tr><th>Name</th><th>Height</th><th>Birth Year</th><th>Gender</th><th>URL</th></tr>"
    if (url === '/') {
        res.write('<h1>Welcome All to my server!</h1>');l
        res.write('<img src="https://i.etsystatic.com/10942962/r/il/70b5b1/2908178391/il_fullxfull.2908178391_pqch.jpg">');
        res.end();
    }
    if (url === '/about') {
        res.write("This is such a great time to learn about everyone.")
        res.end()
    }
    if (url === '/list') {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(data => {
                createData(data)
                // console.log(data)
                res.write(tableData);
                // res.write('<head><title>Welcome All')
                res.end()
            })

    }
    function createData(data) {
        data.forEach(element => {
            tableData = `<tr><td>${element.name}</td><td>${element.height}</td><td>${element.birth_year}</td><td>${element.gender}</td><td>${element.url}</td></tr></table>`
        })
        tableData = `</table>`
    }

}

// initial the port
const PORT = 5550;

// listening to the server
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))