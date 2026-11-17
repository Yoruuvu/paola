
const doorArea = document.getElementById("doorArea");
const invitation = document.getElementById("invitation");
const videoScreen = document.getElementById("videoScreen");
const portalVideo = document.getElementById("portalVideo");

let hasOpened = false;

doorArea.addEventListener("click", async () => {
    if (hasOpened) return;

    hasOpened = true;

    // Hide the invitation
    invitation.style.transition = "opacity 0.8s ease";
    invitation.style.opacity = "0";

    // Animate the door opening
    doorArea.classList.add("opening");

    // Wait for the door animation
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Show the video
    videoScreen.classList.add("show");

    try {
        await portalVideo.play();
    } catch (error) {
        console.error("Video could not play:", error);
        hasOpened = false;
        videoScreen.classList.remove("show");
        doorArea.classList.remove("opening");
        invitation.style.opacity = "1";
    }
});

// When the video finishes
portalVideo.addEventListener("ended", () => {
    // This is where we'll reveal the next birthday scene.
    console.log("The portal has opened!");
});
