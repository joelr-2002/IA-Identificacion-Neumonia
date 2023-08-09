const uploadForm = document.getElementById("upload-form");
const imageInput = document.getElementById("image-input");
const imageContainer = document.getElementById("image-container");

uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("image", imageInput.files[0]);

    try {
        const response = await fetch("upload.js", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            const imageUrl = await response.text();
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`;
        } else {
            console.error("Error uploading image.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
