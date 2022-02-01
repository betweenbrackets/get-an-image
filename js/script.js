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

    console.log(images);
};
// get the function rolling!
getImage();
