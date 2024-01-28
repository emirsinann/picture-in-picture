const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        // Prompt to select media stream
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Pass to video element
        videoElement.srcObject = mediaStream;
        // Play video
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error here
        console.log('whoops, error here:', error);
    }
}

 button.addEventListener('click', async () => {
     // Disable button
     button.disabled = true;
     // Start picture in picture
     await videoElement.requestPictureInPicture();
     // Reset button
     button.disabled = false;
 });
/* On Load */
selectMediaStream();