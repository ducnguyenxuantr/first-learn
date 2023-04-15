
const urlcourses = 'http://localhost:3000/courses';
const urlimg = 'http://localhost:3000/img';
const formElement = document.querySelector('#add');
const btnElement = document.querySelector('#btn')
const inputnameElement = document.querySelector('#name')
const inputdesElement = document.querySelector('#description')

function start() {
    getCourses(rederCourses);
    createForm();
}

start();


function rederCourses(courses){
    // course array'
    var html = courses.map((course) => {
        return html =  `
            <p>ducnguen ${course.id}</p>
            <p>link${course.name}</p>
        `
    })

    formElement.innerHTML = html.join(' ');
}

// function get json 
function getCourses(callback) {
fetch(urlcourses)
    .then(response => {
        return response.json();
    })

    .then(callback)
}

function postCourses(data, callback) {
    fetch(urlcourses, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .then(callback)
}

function createForm() {
    btnElement.onclick = function() {
        var name = inputnameElement.value 
        var description = inputdesElement.value ;
        var data = {
            name: name,
            age: description
        }
        postCourses(data)
    }
}