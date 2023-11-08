document.addEventListener("DOMContentLoaded", function () {
    resizeVideos();
    window.addEventListener("resize", resizeVideos);
});

function resizeVideos() {
    const videoContainer = document.querySelector(".video-container");
    const blurContainer = document.querySelector(".blur-contaier");
    const backgroundVideo = document.querySelector("background-video");
    const backgroundVideoBlur = document.querySelector("background-video-blur");

    const containerWidth = videoContainer.offsetWidth;
    const containerHeigh = videoContainer.offsetHeight;

    const videoAspectRatio = 16 / 9;
    const videoWidth = containerWidth * 0.9;
    const videoHeight = videoWith / videoAspectRatio;

    backgroundVideo.style.width = '${videoWidth}px';
    backgroundVideo.style.height = '${videoHeight}px';

    blurContainer.style.width = '${containerWidth}px';
    blurContainer.style.height = '${containerHeight}px';

    backgroundVideoBlur.style.width = '${containerWidth}px';
    backgroundVideoBlur.style.height = '${containerHeight}px';
}