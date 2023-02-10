// https://api.tenor.com/v1/search?q=excited&key=AIzaSyB0ZNL52rr18Wg9k0M5KmE2ChIAEnZEX0Y&limit=8
//AIzaSyB0ZNL52rr18Wg9k0M5KmE2ChIAEnZEX0Y

// https://tenor.googleapis.com/v2/search?q=excited&key=AIzaSyB0ZNL52rr18Wg9k0M5KmE2ChIAEnZEX0Y&client_key=my_test_app&limit=8

const search = document.getElementById("search");
const searchbtn = document.getElementById("btn");
const output = document.getElementById("output");
let searchValue = "London"


function getGifs() {
    var getRequest = new XMLHttpRequest();
    getRequest.open("GET", `https://tenor.googleapis.com/v2/search?q=excited&key=AIzaSyB0ZNL52rr18Wg9k0M5KmE2ChIAEnZEX0Y&client_key=my_test_app&limit=16&q=${searchValue}`);
	getRequest.responseType = "json";

    getRequest.send();

    getRequest.onload = function () {
		if (getRequest.status >= 200 && getRequest.status < 300) {
			let gifs = getRequest.response.results;
            output.innerHTML =""
			for (gif of gifs) {
                let outputCard = document.createElement("div");
                output.appendChild(outputCard);
                outputCard.innerHTML = `<div class="card"> <img src='${gif.media_formats.gif.url}'></img></div>`
 			}
		} else {
			alert("get request");
		}
	};

}

getGifs()



search.addEventListener("change",(e) => {
    searchValue= e.target.value;
    console.log(searchValue);
});

searchbtn.addEventListener("click", (e) =>{
    e.preventDefault()
    getGifs()
})