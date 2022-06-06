// //load more example
// 1.xml http requist

let currentPage = 1;
let totalPages;

function getUsers(page) {
        let requist = new XMLHttpRequest();
        requist.addEventListener('load', function() {
            let response = this.responseText;
            let responseData = JSON.parse(response);

            let ul = document.createElement('ul');
            let fragment = document.createDocumentFragment();
            responseData.data.forEach(element => {
                let li = document.createElement('li');
                li.classList.add('li-item');
                let span = document.createElement('span');
                span.textContent = element.first_name;

                let img = document.createElement('img');
                img.src = element.avatar;
                img.classList.add('image-item');
                li.appendChild(img);
                li.appendChild(span);
                fragment.appendChild(li); 
        });    

            document.getElementById('list').innerHTML = '';
            document.getElementById('list').appendChild(fragment);

            totalPages = responseData.total_pages;
        })

            document.getElementById('loadprev').addEventListener('click', function() {

                if (currentPage ==1) {
                    return;
                }
                // currentPage ++;
                // currentPage = currentPage + 1;
                currentPage -=1;
                getUsers(currentPage); 
            });
            
            
            document.getElementById('loadnext').addEventListener('click', function () {
                if (currentPage  == totalPages) {
                    return;
                }
                currentPage +=1;
                getUsers(currentPage);
            })
    
        requist.open('GET', 'https://reqres.in/api/users?page=' + page);
        requist.send();
    }
    
    getUsers(currentPage);


// 2.fetch
 
// let currentPage = 1;
// let totalPages;

// function getUsers(page) {
//     fetch('https://reqres.in/api/users?page=' + page, {
//         method:'GET'
//     })
//     .then(function(response) {
//         if (response.status != 200) {
//             throw 'response.status';
//         }
//         return response.json();
//     })
//     .then(function(responseData) {
//         let fragment = document.createDocumentFragment();

//         responseData.data.forEach(element => {
//             let li = document.createElement('li');
//             li.classList.add('li-item');

//             let span = document.createElement('span');
//             span.textContent = element.first_name;

//             let img = document.createElement('img');
//             img.src = element.avatar;
//             img.classList.add('image-item');
//             li.appendChild(img);
//             li.appendChild(span);

//             fragment.appendChild(li); 
//     });
//         document.getElementById('list').innerHTML = '';
//         document.getElementById('list').appendChild(fragment);

//         totalPages = responseData.total_pages;
//     })
//     .catch(function(x) {
//         if(x == 404) {
//             let p = document.createElement('p');
//             p.textContent = 'Server Error';
//             document.getElementById("api").appendChild(p);
//         }       
//     })
// }

// document.getElementById('loadprev').addEventListener('click', function() {
//     if (currentPage ==1) {
//         return;
//     }
//     // currentPage ++;
//     // currentPage = currentPage + 1;
//     currentPage -=1;
//     getUsers(currentPage); 
// });


// document.getElementById('loadnext').addEventListener('click', function () {
//     if (currentPage  == totalPages) {
//         return;
//     }
//     currentPage +=1;
//     getUsers(currentPage);
// })

// getUsers(currentPage);

