var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(city, zipCode, address, image) {
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
    }
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zipCode, address, image, telNumber, resTyp, webAdd) {
        var _this = _super.call(this, city, zipCode, address, image) || this;
        _this.telNumber = telNumber;
        _this.resTyp = resTyp;
        _this.webAdd = webAdd;
        return _this;
    }
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zipCode, address, image, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, city, zipCode, address, image) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    return Events;
}(Locations));
var city1 = new Locations("Vienna", "#1 livable city", "Capitol of Austria", "./ImagesCR/Wien.jpg");
var city2 = new Locations("Vancouver", "#3 livable city", "City in Canada", "./ImagesCR/Vancouver.jpg");
var city3 = new Locations("ChiangMai", "#3 livable city", "Capitol of Austria", "./ImagesCR/Chiangmai.jpg");
var city4 = new Locations("Havanna", "#3 livable city", "Capitol of Austria", "./ImagesCR/Havanna.jpg");
var portu1 = new Locations("Lisbon", "#1 livable city", "Capitol of Austria", "./ImagesCR/lisbon.jpeg");
var portu2 = new Locations("Porto", "#1 livable city", "Capitol of Austria", "./ImagesCR/porto.jpg");
var portu3 = new Locations("Sines", "#1 livable city", "Capitol of Austria", "./ImagesCR/Sines.jpg");
var portu4 = new Locations("Faro", "#1 livable city", "Capitol of Austria", "./ImagesCR/Faro.jpg");
var de1 = new Locations("Berlin", "#1 livable city", "Capitol of Austria", "./ImagesCR/Berlin.jpg");
var de2 = new Locations("Hamburg", "#1 livable city", "Capitol of Austria", "./ImagesCR/hamburg.jpg");
var de3 = new Locations("Munich", "#1 livable city", "Capitol of Austria", "./ImagesCR/münchen.jpg");
var de4 = new Locations("Passau", "#1 livable city", "Capitol of Austria", "./ImagesCR/passau.jpg");
var Restaurant1 = new Restaurant("Dachboden", "", "", "./ImagesCR/ResWien.jpg", "Skybar", "+431521510", "https://www.dachbodenwien.at");
var Restaurant2 = new Restaurant("Granville", "", "", "./ImagesCR/ResVancouver.jpeg", "Canadian", "+16045593474", "https://www.vanfish.com/");
var Restaurant3 = new Restaurant("Streetfood", "", "", "./ImagesCR/Reschiangmai.jpg", "Thai", "No reservations", "No Website");
var Restaurant4 = new Restaurant("Mas Habana", "", "", "./ImagesCR/Reshavanna.jpeg", "Cuban", "+5378643227", "No Website");
var Event1 = new Events("Sommernachtskonzert", "", "", "./ImagesCR/Eventwien.jpg", "September 18", "6pm", "For free");
var Event2 = new Events("Cypress Hill", "", "", "./ImagesCR/Eventvancouver.png", "04/20", "8am", "For free");
var Event3 = new Events("Yi Peng", "", "", "./ImagesCR/Eventchiangmai.jpg", "October 31", "Two Days", "For free");
var Event4 = new Events("Carnaval", "", "", "./ImagesCR/Eventhavanna.jpg", "February- March", "9pm - 2am", "For free");
var cityArr = [];
cityArr.push(city1, city2, city3, city4);
var restaurantArr = [];
restaurantArr.push(Restaurant1, Restaurant2, Restaurant3, Restaurant4);
var eventArr = [];
eventArr.push(Event1, Event2, Event3, Event4);
var portuArr = [];
portuArr.push(portu1, portu2, portu3, portu4);
var deArr = [];
deArr.push(de1, de2, de3, de4);
$('#contentCity').html("");
var _loop_1 = function (i) {
    $('#contentCity').append("<div class=\"row col-lg-3 col-md-6 col-sm-12 my-5\"><img id=\"hello\" src=\"" + cityArr[i].image + "\"><div class=\"\"><h5>" + cityArr[i].city + "</h5><ul class=\"zulangeliste\"><li>" + cityArr[i].zipCode + "</li><li>" + cityArr[i].address + "</li></div><button class=\"booking\" type=\"submit\">Book now</button></div>");
    $('#contentRestaurant').append("<div class=\"row col-lg-3 col-md-6 col-sm-12 my-5\"><img src=\"" + restaurantArr[i].image + "\"><div class=\"\"><h5 id=\"image\">" + restaurantArr[i].city + "</h5><ul><li>" + restaurantArr[i].telNumber + "</li><li>" + restaurantArr[i].resTyp + "</li><li><a href=\"" + restaurantArr[i].webAdd + "\">" + restaurantArr[i].webAdd + "</a></li></ul></div></div>");
    $('#contentEvent').append("<div class=\"row col-lg-3 col-md-6 col-sm-12 my-5\"><img class=\"\" src=\"" + eventArr[i].image + "\"><div class=\"\"><h5>" + eventArr[i].city + "</h5><ul class=\"zulangeliste\"><li>" + eventArr[i].eventDate + "</li><li>" + eventArr[i].eventTime + "</li><li>" + eventArr[i].ticketPrice + "</li></ul></div></div>");
    var option1 = document.getElementById('carOpt');
    option1.addEventListener('change', function () {
        $("#contentCity").html("");
        for (var i_1 in cityArr) {
            var type = option1.value;
            if (type == "Lisbon") {
                $('#contentCity').append("\n        <div class=\"row col-lg-3 col-md-6 col-sm-12 my-5\"><img src=\"" + portuArr[i_1].image + "\"><div class=\"\"><h5 id=\"image\">" + portuArr[i_1].city + "</h5><ul><li>" + portuArr[i_1].zipCode + "</li><li>" + portuArr[i_1].address + "</li></ul></div></div>");
            }
            ;
            if (type == "Berlin") {
                $('#contentCity').append("\n        <div class=\"row col-lg-3 col-md-6 col-sm-12 my-5\"><img src=\"" + deArr[i_1].image + "\"><div class=\"\"><h5 id=\"image\">" + deArr[i_1].city + "</h5><ul><li>" + deArr[i_1].zipCode + "</li><li>" + deArr[i_1].address + "</li></ul></div></div>");
            }
            ;
            if (type == "Paris") {
                $('#contentCity').html("\n        <div class=\"row col-lg-3 col-md-6 col-sm-12 my-5\">Sorry there are currently no Cities available</div>");
            }
            if (type == "London") {
                $('#contentCity').html("\n        <div class=\"row col-lg-3 col-md-6 col-sm-12 my-5\">Sorry there are currently no Cities available</div>");
            }
            if (type == "back") {
                $('#contentCity').append("<div class=\"row col-lg-3 col-md-6 col-sm-12 my-5\"><img id=\"hello\" src=\"" + cityArr[i_1].image + "\"><div class=\"\"><h5>" + cityArr[i_1].city + "</h5><ul class=\"zulangeliste\"><li>" + cityArr[i_1].zipCode + "</li><li>" + cityArr[i_1].address + "</li></div></div>");
            }
        }
    });
};
for (var i in cityArr) {
    _loop_1(i);
}
$("#hello").on('click', function () {
    $("image").focus();
});
// focusMethod = function getFocus() {          
//     document.getElementById("myButton").focus();
//   }
// document.getElementById(`${i}`).addEventListener('click', function(){
//     $(this).parent().find("p").html(`${vehiclesPool[i].calculatePrice()}`)
// })
