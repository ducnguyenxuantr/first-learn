
const urlcourses = 'http://localhost:3000/courses';
const urlimg = 'http://localhost:3000/img';
const urlpassword = 'http://localhost:3000/Password';
const formElement = document.querySelector('#add');
const btnElement = document.querySelector('#btn')
const inputnameElement = document.querySelector('#name')
const inputdesElement = document.querySelector('#description')
const deleteElement = document.querySelector('#delete')
const inputpasswordElement = document.querySelector('#password')
const checkElement = document.querySelector('#check')


function start() {
    getCourses(rederCourses);
    getPassword(checkpassword);
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
        .then(callback)// call back JS type
}

function createForm() {
    btnElement.onclick = function() {
        var name = inputnameElement.value 
        var description = inputdesElement.value ;
        var data = {
            name: name,
            age: description
        }
        postCourses(data, )
    }
}


function HTml(callback) {
    fetch(urlcourses)
        .then(response => {
            return response.json();
        })
        .then(callback)
}

HTml((courses) => {
    courses.forEach((course) => {
    })
});

function getPassword(callback) {
    fetch(urlpassword)
        .then(response => {
            return response.json();
        })
        .then(callback)
}

function checkpassword(elements) {
    checkElement.addEventListener('click', () => {
        elements.forEach((passwords) => {
            var passwordValue = inputpasswordElement.value ;
            if(passwordValue == passwords.password) {
                console.log("dung roi")
            } else {
                console.log("sai roi")
            }
        })
    })
}

if(deleteElement) {
    deleteElement.onclick = 
            function deleteform() {
                fetch(urlcourses +'/' + 1, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(callback => {
                    })
            }
}
