const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// declare an asynch function expression
const getImage = async function () {
    // enable asynchronous communication between this program and the API
    const res = await fetch(
        "https://picsum.photos/v2/list?limit=100"
        );
// parse the returned data as JSON
    const images = await res.json();
// log the JSON array of images
    // console.log(images);

// get that function rolling!
    selectRandomImage(images);
};


// generate a random image from the number of images in the array 
// round to a whole number
const selectRandomImage = function(images) {
    const randomIndex = Math.floor(
        Math.random() * images.length
    )
    // console.log(randomIndex);

// grab a single image from the array
    const randomImage = images[randomIndex];
    // console.log(randomImage); 
    
    displayImage(randomImage);
};

// access the object attributes to display
const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    // get that function rolling when the button is clicked!
    getImage();
})


