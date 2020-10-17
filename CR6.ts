class Locations{
    city: string;
    zipCode: string;
    address: string;
    image: string
    constructor(city: string, zipCode: string, address: string, image:string){
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image
    }
}
class Restaurant extends Locations{
    telNumber;
    resTyp;
    webAdd;
    constructor (city: string, zipCode: string, address: string, image: string, telNumber: string, resTyp: string, webAdd: string){
        super(city, zipCode, address, image)
        this.telNumber = telNumber
        this.resTyp = resTyp
        this.webAdd = webAdd
    }
}

class Events extends Locations{
    eventDate;
    eventTime;
    ticketPrice;
    constructor (city: string, zipCode: string, address: string, image: string, eventDate: string, eventTime: string, ticketPrice: any){
        super(city, zipCode, address, image)
        this.eventDate = eventDate
        this.eventTime = eventTime
        this.ticketPrice = ticketPrice
    }
}
    var city1 = new Locations("Vienna", "#1 livable city","Capitol of Austria", "./ImagesCR/Wien.jpg")
    var city2 = new Locations("Vancouver","#3 livable city","City in Canada","./ImagesCR/Vancouver.jpg")
    var city3 = new Locations("ChiangMai","#3 livable city","Capitol of Austria","./ImagesCR/Chiangmai.jpg")
    var city4 = new Locations("Havanna","#3 livable city","Capitol of Austria","./ImagesCR/Havanna.jpg")

    var portu1 = new Locations("Lisbon", "#1 livable city","Capitol of Austria", "./ImagesCR/lisbon.jpeg")
    var portu2 = new Locations("Porto", "#1 livable city","Capitol of Austria", "./ImagesCR/porto.jpg")
    var portu3 = new Locations("Sines", "#1 livable city","Capitol of Austria", "./ImagesCR/Sines.jpg")
    var portu4 = new Locations("Faro", "#1 livable city","Capitol of Austria", "./ImagesCR/Faro.jpg")

    var de1 = new Locations("Berlin", "#1 livable city","Capitol of Austria", "./ImagesCR/Berlin.jpg")
    var de2 = new Locations("Hamburg", "#1 livable city","Capitol of Austria", "./ImagesCR/hamburg.jpg")
    var de3 = new Locations("Munich", "#1 livable city","Capitol of Austria", "./ImagesCR/münchen.jpg")
    var de4 = new Locations("Passau", "#1 livable city","Capitol of Austria", "./ImagesCR/passau.jpg")

    var Restaurant1 = new Restaurant("Dachboden","","","./ImagesCR/ResWien.jpg","Skybar","+431521510","https://www.dachbodenwien.at")
    var Restaurant2 = new Restaurant("Granville","","","./ImagesCR/ResVancouver.jpeg","Canadian","+16045593474","https://www.vanfish.com/")
    var Restaurant3 = new Restaurant("Streetfood","","","./ImagesCR/Reschiangmai.jpg","Thai","No reservations","No Website")
    var Restaurant4 = new Restaurant("Mas Habana","","","./ImagesCR/Reshavanna.jpeg","Cuban","+5378643227","No Website")

    var Event1 = new Events("Sommernachtskonzert","","","./ImagesCR/Eventwien.jpg","September 18","6pm","For free")
    var Event2 = new Events("Cypress Hill","","","./ImagesCR/Eventvancouver.png","04/20","8am","For free")
    var Event3 = new Events("Yi Peng","","","./ImagesCR/Eventchiangmai.jpg","October 31","Two Days","For free")
    var Event4 = new Events("Carnaval","","","./ImagesCR/Eventhavanna.jpg","February- March","9pm - 2am","For free")

var cityArr =[]
cityArr.push(city1,city2,city3,city4)

var restaurantArr = []
restaurantArr.push(Restaurant1,Restaurant2,Restaurant3,Restaurant4)

var eventArr = []
eventArr.push(Event1, Event2, Event3 ,Event4)

var portuArr = []
portuArr.push(portu1,portu2,portu3,portu4)

var deArr =[]
deArr.push(de1,de2,de3,de4)

$('#contentCity').html(``)
for (let i in cityArr){
    $('#contentCity').append(`<div class="row col-lg-3 col-md-6 col-sm-12 my-5"><img id="hello" src="${cityArr[i].image}"><div class=""><h5>${cityArr[i].city}</h5><ul class="zulangeliste"><li>${cityArr[i].zipCode}</li><li>${cityArr[i].address}</li></div><button class="booking" type="submit">Book now</button></div>`)
    $('#contentRestaurant').append(`<div class="row col-lg-3 col-md-6 col-sm-12 my-5"><img src="${restaurantArr[i].image}"><div class=""><h5 id="image">${restaurantArr[i].city}</h5><ul><li>${restaurantArr[i].telNumber}</li><li>${restaurantArr[i].resTyp}</li><li><a href="${restaurantArr[i].webAdd}">${restaurantArr[i].webAdd}</a></li></ul></div></div>`)
    $('#contentEvent').append(`<div class="row col-lg-3 col-md-6 col-sm-12 my-5"><img class="" src="${eventArr[i].image}"><div class=""><h5>${eventArr[i].city}</h5><ul class="zulangeliste"><li>${eventArr[i].eventDate}</li><li>${eventArr[i].eventTime}</li><li>${eventArr[i].ticketPrice}</li></ul></div></div>`)

let option1 = document.getElementById('carOpt')
option1.addEventListener('change', function(){
    $("#contentCity").html("")
for (let i in cityArr){
    var type = option1.value;

if (type == "Lisbon"){
        $('#contentCity').append(`
        <div class="row col-lg-3 col-md-6 col-sm-12 my-5"><img src="${portuArr[i].image}"><div class=""><h5 id="image">${portuArr[i].city}</h5><ul><li>${portuArr[i].zipCode}</li><li>${portuArr[i].address}</li></ul></div></div>`
        )
    };
    if (type == "Berlin"){
        $('#contentCity').append(`
        <div class="row col-lg-3 col-md-6 col-sm-12 my-5"><img src="${deArr[i].image}"><div class=""><h5 id="image">${deArr[i].city}</h5><ul><li>${deArr[i].zipCode}</li><li>${deArr[i].address}</li></ul></div></div>`
        )
    };
    if (type == "Paris") {
        $('#contentCity').html(`
        <div class="row col-lg-3 col-md-6 col-sm-12 my-5">Sorry there are currently no Cities available</div>`
        )
    }
    if (type == "London") {
        $('#contentCity').html(`
        <div class="row col-lg-3 col-md-6 col-sm-12 my-5">Sorry there are currently no Cities available</div>`
        )
    }
    if (type == "back") {
         $('#contentCity').append(`<div class="row col-lg-3 col-md-6 col-sm-12 my-5"><img id="hello" src="${cityArr[i].image}"><div class=""><h5>${cityArr[i].city}</h5><ul class="zulangeliste"><li>${cityArr[i].zipCode}</li><li>${cityArr[i].address}</li></div></div>`)    
    }

}})}



$(`#hello`).on('click', function(){
    $(`image`).focus()
})
// focusMethod = function getFocus() {          
//     document.getElementById("myButton").focus();
//   }

 // document.getElementById(`${i}`).addEventListener('click', function(){
        //     $(this).parent().find("p").html(`${vehiclesPool[i].calculatePrice()}`)
        // })