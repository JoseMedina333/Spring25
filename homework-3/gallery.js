// List of photos
const photos = [
    "https://fastly.picsum.photos/id/804/300/400.jpg?hmac=Y6cx9oentnw75-Q7gYdlaJBBAnSAlUHRYXbvFMIrZNI",
    "https://fastly.picsum.photos/id/185/300/400.jpg?hmac=7jvc9SGhArOCJhgLoOfYSTezJsc1xrIXhDOXkiZSrbs",
    "https://fastly.picsum.photos/id/229/300/400.jpg?hmac=CZOWn8sQ8oa9EfbMZw5tYqPMNKK0mNOYUsEgz81K8io",
    "https://fastly.picsum.photos/id/211/300/400.jpg?hmac=l0zi1AkBxaPoAMnWav0iWH8TsWfblHXdm_IGSNDMFWQ"
];

// Reference to the section element with the unique id
const gallerySection = document.getElementById("photo-gallery");

// Loop through the list of photos
for (let i = 0; i < photos.length; i++) {
    // Create a new image element
    const img = document.createElement("img");
    // Set the src attribute to the photo URL
    img.src = photos[i];
    // Set the alt attribute to Image #
    img.alt = `Image ${i + 1}`;
    // Set the height attribute to 300px
    img.style.height = "300px";
    // Append the image to the gallery section
    gallerySection.appendChild(img);
}
