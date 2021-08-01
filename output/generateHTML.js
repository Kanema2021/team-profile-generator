
const indexHTML = require("./index.html")

function generateHTML(data) {
    const htmlArray =[]

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mb-3 team-heading">
                <h1 id="title" class="text-center">${</h1>
            </div>
        </div>
    </div>
    <div class="container wrap">
        <div class="row">
            <div class="team-area d-flex justify-content-center">
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">Karen</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: 1</li>
                            <li class="list-group-item">Email: <a href="mailto:karen@karen.com">karen@karenamail.com</a>
                            </li>
                            <li class="list-group-item">Office number: 1</li>
                        </ul>
                    </div>
                </div>
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">Jaden</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: 2</li>
                            <li class="list-group-item">Email: <a href="mailto:jaden@jaden.com">jaden@jadenmail.com</a>
                            </li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/fakegithubaccount"
                                    target="_blank" rel="noopener noreferrer">ibealec</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">Sam</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: 5</li>
                            <li class="list-group-item">Email: <a href="mailto:sam@samanthamail.com">sam@sammail.com</a>
                            </li>
                            <li class="list-group-item">School: Oregon State</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>

</html>`
    
    
    
    
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div class="container-fluid">
//         <div class="row">
//             <div class="col-12 mb-3 team-heading">
//                 <h1 id="title" class="text-center">${teamArray[i]}</h1>
//             </div>
//         </div>
//     </div>
//     <div class="container wrap">
//         <div class="row">
//             <div class="team-area d-flex justify-content-center">
//             ${data}
//         </div>
//       </div>
//     </div>
// </body>
// </html>`
// }
// module.exports = generateHTML;

// for (let i = 1; i < teamArray.length; i++){
//     const teamCard = `
//     <div class="member-card">
//             <div class="card-top">
//                 <h2>${finalTeamArray[i].name}</h2>
//                 <h2>${finalTeamArray[i].title}</h2>
//             </div>
//             <div class="card-bottom">
//             <p>Employee ID: ${teamArray[i].id}</p>
//             <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a>></p>       
//             `
// }

