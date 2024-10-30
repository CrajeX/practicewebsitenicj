function myFunction(name) {
    const test = document.getElementById(name);
    const video = document.getElementById('background-video');
    const source = document.getElementById('video-source');
    const images = Array.from(document.getElementsByTagName('img'));
    const banner = document.querySelector('.banner');
    const vid = document.querySelector('.video-background');
    const originalBackground = banner.style.background;
    test.addEventListener('mouseenter', (event) => {
        // Highlight the mouseenter target
        event.target.style.filter = 'drop-shadow(0px 0px 20px white)';
        vid.style.opacity = '1';
        // Remove the background aspect from the `.banner` element
       
    
        // Change the video source
        source.src = `${name}.mp4`;
        video.load(); // Load the new video source
        video.play(); // Optionally play the new video
    
        images.forEach(img => {
            if (img !== event.target) {
                img.style.opacity = '0.5';
            } else {
                img.style.opacity = '1'; // Ensure the hovered image is fully visible
            }
        });
    });

    test.addEventListener('mouseleave', (event) => {
        banner.style.background = originalBackground;
        vid.style.opacity = '0';
        // Reset the transform of the mouseleave target
        event.target.style.filter = ''; // Reset filter
        source.src = `bg.mp4`;
        video.load(); // Load the new video source
        video.play(); // Optionally play the new video
        // Reset opacity of all images
        images.forEach(img => {
            img.style.opacity = '';
        });
    });
}

// Call the function with the ID of the element
myFunction('hae');
myFunction('hanni', 'banner');
myFunction('minji', 'banner');
myFunction('hyein', 'banner');
myFunction('dani', 'banner');
