function generateHTML(data) {
    const htmlArray =[]
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 mb-3 team-heading">
                <h1 id="title" class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container wrap">
        <div class="row">
            <div class="team-area d-flex justify-content-center">
            ${data}
        </div>
      </div>
    </div>
</body>
</html>`
}