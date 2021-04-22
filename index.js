//Unsplash API

const imageContainer = document.getElementById("image-container");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

let photosArray = [];

const count = 30;
const apiKey = "EqeYLt5fh-YwodIaii3vCeL1DmvR25W6cX_hm0_8n10";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;



// Check if all images were loades
function imageLoaded() {
	imagesLoaded++;
	if (imagesLoaded === totalImages){
		ready = true;
		console.log("ready =", ready)
	}

}
//Helper Function to Set Attrubutes on DOM

function setAttributes (element, attributes){
	for (const key in attributes) {
		element.setAttribute(key,attributes[key]);

	}
}

// Create Elements For Links and Photos Add to Dom

function displayPhotos(){
	imagesLoaded =0;
	totalImages = photosArray.length;

	//Run function for each object in photosAaary
	photosArray.forEach((photo) => {
		// create <a> to link to Unsplash
		const item = document.createElement("a");
		setAttributes(item, {href:photo.links.html, target:"_blank",
	});
		//item.setAttribute("href", photo.links.html);
		//item.setAttribute("target", "_blank");
		// Create <img> for photo
		const img = document.createElement("img");
		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description,
		});
		//img.setAttribute("src", photo.urls.regular);
		//img.setAttribute("alt", photo.alt_description);
		//img.setAttribute("title", photo.alt_description);
		// Put img inside <a> then put both inside imageContainer element
		
		// Event Listener - check when each is finished loading
		img.addEventListener("load", imageLoaded)

		item.appendChild(img);
		imageContainer.appendChild(item);

	});

}


//Get Photos from API

async function getPhotos(){
	try {
		const response = await fetch (apiURL);
		photosArray = await response.json();
		displayPhotos();
	}	catch (error){

	}
}


//Scroll near bottom

window.addEventListener("scroll", () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
		ready = false;
		getPhotos();
	}
});



//On Load 

getPhotos();





