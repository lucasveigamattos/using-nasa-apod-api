const showPicture = document.getElementById('showPicture')

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") //if you have a nasa api key delete DEMO_KEY and paste into it
    .then(resp => {
        resp.json()
            .then(data => {
                const picture = data['hdurl']
                showPicture.src = picture
            })
    })