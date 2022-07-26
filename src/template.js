// Whole Page
function createDOM(...cards){
    result = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="header">
        <h1>My Team</h1>
    </div>
    <div class="teamMembers">
    ${cards}
    </div>
</body>

<style>
    
    *{
        margin: 0;
        padding: 0;
        font-family:Arial, Helvetica, sans-serif;
    }
    
    h1{
        color: white;
        padding-top: 35px;
        margin: 0;
        text-align: center;
    }

    h2,h3,p,a{
        margin-left: 15px;
    }

    .header{
        background-color: rgb(226, 76, 76);
        margin: 0;
        padding: 0;
        height: 15vh;
    }

    .teamMembers{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .card{
        position: inherit;
        margin: 20px;
        height: 40vh;
        width: 18vw;
        background-color: white;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);
    }

    .position{
        background-color: rgb(57, 126, 230);
        height: 25%;
        color: white;
        padding-top: 15px;

    }

    .info{
        background-color: white;
        padding-top: 15px;
    }
</style>
</html>
`;

    return result;
}

// Card

function createCard(name,id, email, role, additional = '') {

    var moreInfo = ``;

    if(role == 'Engineer'){
        moreInfo = `<a href="https://github.com/${additional}"> Github: ${additional} </a>`;
    }else if(role == 'Intern'){
        moreInfo = `<p> School: ${additional} </p>`;
    }

    let result =
`<div class="card">
<div class="position">
    <h2>${name}</h2>  
    <h3>${role}</h3>
</div>
<div class="info">
    <p> Id: ${id}</p>
    <a href="mailto:${email}" target="_blank" > Email: ${email} </a>\n
    ${moreInfo}
</div>
</div>
`;
    return result;
}


module.exports = {createDOM,createCard}


/* 
<div class="card">
    <div class="position">
        <h2>Name</h2>  
        <h3>Manager</h3>
    </div>
    <div class="info">
        <p class="id"> id: </p>
        <p class="email"> email: </p>
        <p class="github">github: </p>
    </div>
</div> */