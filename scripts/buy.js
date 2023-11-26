document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const message = document.getElementById('message');

    uploadButton.addEventListener('click', function () {
        const file = fileInput.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('photo', file);

            // Replace 'your-upload-url' with the actual URL where you want to send the file.
            fetch('your-upload-url', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                message.textContent = 'File uploaded successfully!';
                fileInput.value = ''; // Clear the input field
            })
            .catch(error => {
                message.textContent = 'File upload failed.';
                console.error(error);
            });
        } else {
            message.textContent = 'Please select a file to upload.';
        }
    });
});
