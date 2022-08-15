let myWindow

function openWindow(){
    myWindow = window.open('https://www.bocacode.com','', 'width-200, height=200')
}

function resizedWindow() {
    myWindow.resizedTo(600, 600)
}

function closeWindow(){
    myWindow.close
}

function getHeight(){
    console.log(innerHeight)
    console.log('our width', window.innerHeight)
}

function getLocation(){
    const myLocation = window.navigator.geolocation

    myLocation.getCurrentPosition(function (location) {
        const myLat = location.coords.latitude
        const myLong = location.coords.longitude
        document.getElementById('heading').innerText = `my location is lat= ${myLat} and long= ${myLong}`
    })
}
