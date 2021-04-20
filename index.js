//Unsplash API

const imageContainer = document.getElementById("image-container");

let photosArray = [];

const count = 10;
const apiKey = "EqeYLt5fh-YwodIaii3vCeL1DmvR25W6cX_hm0_8n10";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


//Helper Function to Set Attrubutes on DOM

function setAttributes (element, attributes){
	for (const key in attributes) {
		element.setAttributes(key,attributes[key]);

	}
}

// Create Elements For Links and Photos Add to Dom

function displayPhotos(){
	//Run function for each object in photosAaary
	photosArray.forEach((photo) => {
		// create <a> to link to Unsplash
		const item = document.createElement("a");
		setAttributes(item, {href:photo.links.html, target:"_blank",
	})
		//item.setAttribute("href", photo.links.html);
		//item.setAttribute("target", "_blank");
		// Create <img> for photo
		const img = document.createElement("img");
		setAttributes(img, {
			src:photos.urls.regular,
			alt:photo.alt_description,
			title: photo.alt_description,
		})
		//img.setAttribute("src", photo.urls.regular);
		//img.setAttribute("alt", photo.alt_description);
		//img.setAttribute("title", photo.alt_description);
		// Put img inside <a> then put both inside imageContainer element
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



//On Load 

getPhotos();