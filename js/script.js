// =======================
// STATE MANAGEMENT
// =======================

// VIDEO URLS

// Transition Videos
const TRANSITION_VIDEOS = {
  intro: {
    desktop: {
      url: "https://neyroosales.space/wp-content/uploads/2024/04/ssn-intro-transition.mp4",
      length: 7400,
    },
    mobile: {
      url: "https://neyroosales.space/wp-content/uploads/2024/07/SSN_Mobile_Intro_SFX.mp4",
      length: 6000,
    },
  },
  logoToScreen: {
    desktop: {
      url: "https://neyroosales.space/wp-content/uploads/2024/04/ssn-menu-turn-transition.mp4",
      length: 8800,
    },
    mobile: {
      url: "https://neyroosales.space/wp-content/uploads/2024/07/SSN_Mobile_LogoToScreen_SFX.mp4",
      length: 8800,
    },
  },
  screenToScreen: {
    desktop: {
      url: "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
      length: 5120,
    },
    mobile: {
      url: "https://neyroosales.space/wp-content/uploads/2024/07/SSN-screen-to-screen-transition-mobile-reencoded_SFX.mp4",
      length: 5120,
    },
  },
};

// Background Videos
const BACKGROUND_VIDEOS = {
  menuLoop: {
    desktop: {
      url: "https://neyroosales.space/wp-content/uploads/2024/04/ssn-menu-loop.mp4",
    },
    mobile: {
      url: "https://neyroosales.space/wp-content/uploads/2024/07/ssn-menu-loop-mobile-reencoded.mp4",
    },
  },
  screenLoop: {
    desktop: {
      url: "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-loop.mp4",
    },
    mobile: {
      url: "https://neyroosales.space/wp-content/uploads/2024/07/ssn-screen-loop-mobile-reencoded.mp4",
    },
  },
};

// Screen Div Videos
const SCREEN_DIV_VIDEOS = {
  Begrüßung:
    "https://neyroosales.space/wp-content/uploads/2024/06/gruenenthal_begruessung_bjoern-1080p.mp4",
  NeyrooFilm:
    "https://neyroosales.space/wp-content/uploads/2024/04/neyroo–welcome.mp4",
};

// INTRO STATE
const introState = {
  transitionVideo: TRANSITION_VIDEOS.intro,
  targetState: "state1",
};

// STATES
const states = {
  // STATE 01 - MENU INITIAL
  state1: {
    backgroundVideo: BACKGROUND_VIDEOS.menuLoop,
    triggers: [
      {
        id: "trigger1",
        order: 1,
        position: { top: "42%", left: "5.5%" },
        text: "Begrüßung",
        transitionVideo: TRANSITION_VIDEOS.logoToScreen,
        targetState: "state2",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/Video-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },
      {
        id: "triggerPathway",
        order: 2,
        position: { top: "50%", left: "5.5%" },
        text: "Pathway Experience",

        transitionVideo: TRANSITION_VIDEOS.logoToScreen,
        targetState: "state3",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/PDF-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },

      {
        id: "triggerSurprise",
        order: 3,
        position: { top: "58%", left: "5.5%" },
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/PDF-Icon-white-ssn.png",
        text: "Surprise to engage",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state4",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },

      {
        id: "trigger4",
        order: 4,
        position: { top: "42%", left: "82%" },
        text: "Neyroo Film",
        transitionVideo: TRANSITION_VIDEOS.logoToScreen,
        targetState: "state5",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/Video-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },
      {
        id: "triggerNeyrooStudio",
        order: 5,
        position: { top: "50%", left: "82%" },
        text: "Neyroo Studio",
        transitionVideo: TRANSITION_VIDEOS.logoToScreen,
        targetState: "state6",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/URL-Icon-white.png",
        onClick() {
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },
      {
        id: "triggerDemo",
        order: 6,
        position: { top: "58%", left: "82%" },
        text: "Demo Spatial Chat",
        transitionVideo: TRANSITION_VIDEOS.logoToScreen,
        targetState: "state7",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/URL-Icon-white.png",
        onClick() {
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },
    ],
  },

  // STATE 02 - Begrüßung
  state2: {
    backgroundVideo: BACKGROUND_VIDEOS.screenLoop,
    screenDiv: true,
    screenDivType: "video",
    screenDivSource: SCREEN_DIV_VIDEOS.Begrüßung,
    screenDivMobileSource: SCREEN_DIV_VIDEOS.Begrüßung,
    screenDivMobileSourceType: "video",
    screenDivMobilePopupType: "video",
    screenDivMobilePopupSource: SCREEN_DIV_VIDEOS.Begrüßung,
    triggers: [
      {
        id: "trigger1",
        order: 1,
        position: { top: "42%", left: "2%" },
        text: "Begrüßung (Vollbild)",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state2",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/Video-Icon-white-ssn.png",
        onClick() {
          enterFullscreenVideo();
        },
      },
      {
        id: "triggerPathway",
        order: 2,
        position: { top: "50%", left: "2%" },
        text: "Pathway Experience",

        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state3",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/PDF-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },

      {
        id: "triggerSurprise",
        order: 3,
        position: { top: "58%", left: "2%" },
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/PDF-Icon-white-ssn.png",
        text: "Surprise to engage",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state4",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },

      {
        id: "trigger4",
        order: 4,
        position: { top: "42%", left: "82%" },
        text: "Neyroo Film",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state5",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/Video-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },
      {
        id: "triggerNeyrooStudio",
        order: 5,
        position: { top: "50%", left: "82%" },
        text: "Neyroo Studio",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state6",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/URL-Icon-white.png",
        onClick() {
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },
      {
        id: "triggerDemo",
        order: 6,
        position: { top: "58%", left: "82%" },
        text: "Demo Spatial Chat",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state7",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/URL-Icon-white.png",
        onClick() {
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },
    ],
  },

  // STATE 03 - Pathway Experience
  state3: {
    backgroundVideo: BACKGROUND_VIDEOS.screenLoop,
    screenDiv: true,
    screenDivType: "iframe",
    screenDivSource:
      "https://neyroosales.space/wp-content/uploads/2024/05/Pathway-by-Neyroo.pdf",
    screenDivMobileSource:
      "https://neyroosales.space/wp-content/uploads/2024/06/thumbnails-screen-ssn-pdf.jpg",
    screenDivMobileSourceType: "image",
    screenDivMobilePopupType: "iframe",
    screenDivMobilePopupSource:
      "https://neyroosales.space/wp-content/uploads/2024/05/Pathway-by-Neyroo.pdf",
    triggers: [
      {
        id: "trigger1",
        order: 1,
        position: { top: "42%", left: "2%" },
        text: "Begrüßung",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state2",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/Video-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },
      {
        id: "triggerPathway",
        order: 2,
        position: { top: "50%", left: "2%" },
        text: "Pathway Experience Download",

        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state3",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/PDF-Icon-white-ssn.png",
        onClick() {
          triggerFileDownload(
            "https://neyroosales.space/wp-content/uploads/2024/05/Pathway-by-Neyroo.pdf"
          );
        },
      },

      {
        id: "triggerSurprise",
        order: 3,
        position: { top: "58%", left: "2%" },
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/PDF-Icon-white-ssn.png",
        text: "Surprise to engage",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state4",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },

      {
        id: "trigger4",
        order: 4,
        position: { top: "42%", left: "82%" },
        text: "Neyroo Film",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state5",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/Video-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },
      {
        id: "triggerNeyrooStudio",
        order: 5,
        position: { top: "50%", left: "82%" },
        text: "Neyroo Studio",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state6",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/URL-Icon-white.png",
        onClick() {
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },
      {
        id: "triggerDemo",
        order: 6,
        position: { top: "58%", left: "82%" },
        text: "Demo Spatial Chat",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state7",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/URL-Icon-white.png",
        onClick() {
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },
    ],
  },

  // STATE 04 - Surprise to Engage
  state4: {
    backgroundVideo: BACKGROUND_VIDEOS.screenLoop,
    screenDiv: true,
    screenDivType: "iframe",
    screenDivSource:
      "https://neyroosales.space/wp-content/uploads/2024/05/Surprise-to-Engage.pdf",
    screenDivMobileSource:
      "https://neyroosales.space/wp-content/uploads/2024/06/thumbnails-screen-ssn-pdf.jpg",
    screenDivMobileSourceType: "image",
    screenDivMobilePopupType: "iframe",
    screenDivMobilePopupSource:
      "https://neyroosales.space/wp-content/uploads/2024/05/Surprise-to-Engage.pdf",
    triggers: [
      {
        id: "trigger1",
        order: 1,
        position: { top: "42%", left: "2%" },
        text: "Begrüßung",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state2",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/Video-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },
      {
        id: "triggerPathway",
        order: 2,
        position: { top: "50%", left: "2%" },
        text: "Pathway Experience",

        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state3",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/PDF-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },

      {
        id: "triggerSurprise",
        order: 3,
        position: { top: "58%", left: "2%" },
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/PDF-Icon-white-ssn.png",
        text: "Surprise to engage Download",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state4",
        onClick() {
          triggerFileDownload(
            "https://neyroosales.space/wp-content/uploads/2024/05/Surprise-to-Engage.pdf"
          );
        },
      },

      {
        id: "trigger4",
        order: 4,
        position: { top: "42%", left: "82%" },
        text: "Neyroo Film",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state5",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/Video-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },
      {
        id: "triggerNeyrooStudio",
        order: 5,
        position: { top: "50%", left: "82%" },
        text: "Neyroo Studio",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state6",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/URL-Icon-white.png",
        onClick() {
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },
      {
        id: "triggerDemo",
        order: 6,
        position: { top: "58%", left: "82%" },
        text: "Demo Spatial Chat",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state7",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/URL-Icon-white.png",
        onClick() {
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },
    ],
  }, // STATE 05 - Neyroo Film
  state5: {
    backgroundVideo: BACKGROUND_VIDEOS.screenLoop,
    screenDiv: true,
    screenDivType: "video",
    screenDivSource: SCREEN_DIV_VIDEOS.NeyrooFilm,
    screenDivMobileSource: SCREEN_DIV_VIDEOS.NeyrooFilm,
    screenDivMobileSourceType: "video",
    screenDivMobilePopupType: "video",
    screenDivMobilePopupSource: SCREEN_DIV_VIDEOS.NeyrooFilm,
    triggers: [
      {
        id: "trigger1",
        order: 1,
        position: { top: "42%", left: "2%" },
        text: "Begrüßung",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state2",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/Video-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },
      {
        id: "triggerPathway",
        order: 2,
        position: { top: "50%", left: "2%" },
        text: "Pathway Experience",

        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state3",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/PDF-Icon-white-ssn.png",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },

      {
        id: "triggerSurprise",
        order: 3,
        position: { top: "58%", left: "2%" },
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/PDF-Icon-white-ssn.png",
        text: "Surprise to engage Download",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state4",
        onClick() {
          initiateTransition(this.transitionVideo, this.targetState);
        },
      },

      {
        id: "trigger4",
        order: 4,
        position: { top: "42%", left: "82%" },
        text: "Neyroo Film",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state5",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/Video-Icon-white-ssn.png",
        onClick() {
          enterFullscreenVideo();
        },
      },
      {
        id: "triggerNeyrooStudio",
        order: 5,
        position: { top: "50%", left: "82%" },
        text: "Neyroo Studio",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state6",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/URL-Icon-white.png",
        onClick() {
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },
      {
        id: "triggerDemo",
        order: 6,
        position: { top: "58%", left: "82%" },
        text: "Demo Spatial Chat",
        transitionVideo: TRANSITION_VIDEOS.screenToScreen,
        targetState: "state7",
        icon: "https://neyroosales.space/wp-content/uploads/2024/06/URL-Icon-white.png",
        onClick() {
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },
    ],
  },
};

// Define the initial state
let currentState = introState;

// =======================
// INITIAL SETUP
// =======================

const transitionVideoEl = document.querySelector(".transition-video");
const uxContainer = document.querySelector(".ux-container");

// Create the buttonContainer and append it to the uxContainer
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
uxContainer.appendChild(buttonContainer);

const backgroundVideoEl = document.querySelector(".background-video");
const overlaysContainer = document.querySelector(".overlays-container");
const videoContainer = document.querySelector(".video-container");
const introOverlay = document.querySelector(".intro-overlay");
const mediaElements = document.querySelectorAll("video, audio");
const videos = document.querySelectorAll("video");
const video = document.querySelector(".background-video");
const screenDiv = document.querySelector(".screen-div");

// =======================
// EVENT LISTENERS SETUP
// =======================

document.getElementById("HomeButton").addEventListener("click", function () {
  startJourney(); // This will trigger the same actions as the start-journey click
});

document.getElementById("NeyrooButton").addEventListener("click", function () {
  window.open("https://www.neyroo.de", "_blank");
});

document
  .getElementById("DownloadButton")
  .addEventListener("click", function () {
    const downloadUrl =
      "https://neyroosales.space/wp-content/uploads/2024/06/Download-Sammlung-Neyroo.zip";
    triggerFileDownload(downloadUrl);
  });

// =======================
// BACKGROUND SOUND SETUP
// =======================

let backgroundSound = null;
let isSoundPlaying = false;

function initializeBackgroundSound() {
  if (!backgroundSound) {
    backgroundSound = new Audio(
      "https://salesspace.neyroo.de/wp-content/uploads/2024/06/MA_FTUS_DarkLongDrones_LOW_BLEND.aac"
    );
    backgroundSound.loop = true;
    backgroundSound.setAttribute("playsinline", "true"); // Ensure inline playback on iOS
    backgroundSound.volume = 1.0; // Ensure volume is set to maximum

    backgroundSound.addEventListener("play", () => {
      console.log("Background sound is playing.");
    });

    backgroundSound.addEventListener("pause", () => {
      console.log("Background sound is paused.");
    });
  }
}

function playBackgroundSound() {
  if (backgroundSound) {
    backgroundSound.play().then(() => {
      console.log("Background sound started successfully.");
      isSoundPlaying = true;
    });
  }
}

// =======================
// MUTE/UNMUTE BUTTON
// =======================

let isMuted = false;

document.getElementById("muteButton").addEventListener("click", function () {
  const videos = document.querySelectorAll("video");
  const muteIcon = document.getElementById("muteIcon");

  // Toggle mute state
  isMuted = !isMuted;

  // Update the mute state for all videos and the background sound
  videos.forEach((video) => {
    video.muted = isMuted;
  });

  if (backgroundSound) {
    backgroundSound.muted = isMuted;
  }

  // Update the mute button icon
  muteIcon.src = isMuted
    ? "https://asset.neyroo-hub.de/cc511007-cb13-430c-ab86-f76356def0e5/c196f9e1-308e-42ce-b1e7-8a5887fdf8ff/PUBLIC/8fcbb006-8315-4d55-8492-b89e2f7f30bc/volume-mute.svg?version=1"
    : "https://asset.neyroo-hub.de/cc511007-cb13-430c-ab86-f76356def0e5/c196f9e1-308e-42ce-b1e7-8a5887fdf8ff/PUBLIC/f4959c87-e4eb-407d-8ded-720521c9d726/volume-on.svg?version=1";
});

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");
  const muteIcon = document.getElementById("muteIcon");

  // Set initial mute state for all videos and background sound
  videos.forEach((video) => {
    video.muted = isMuted;
  });

  if (backgroundSound) {
    backgroundSound.muted = isMuted;
  }

  // Set initial mute button icon
  muteIcon.src = isMuted
    ? "https://asset.neyroo-hub.de/cc511007-cb13-430c-ab86-f76356def0e5/c196f9e1-308e-42ce-b1e7-8a5887fdf8ff/PUBLIC/8fcbb006-8315-4d55-8492-b89e2f7f30bc/volume-mute.svg?version=1"
    : "https://asset.neyroo-hub.de/cc511007-cb13-430c-ab86-f76356def0e5/c196f9e1-308e-42ce-b1e7-8a5887fdf8ff/PUBLIC/f4959c87-e4eb-407d-8ded-720521c9d726/volume-on.svg?version=1";
});

// =======================
// RESPONSIVE STYLES
// =======================

function applyResponsiveStyles() {
  const isLandscape = window.innerWidth > window.innerHeight;
  const isMobileView = window.innerWidth < 768 && !isLandscape;
  backgroundVideoEl.muted = true;

  if (isMobileView) {
    // Apply mobile styles
    backgroundVideoEl.classList.add("mobile");
    transitionVideoEl.classList.add("mobile");
  } else {
    // Apply desktop styles
    backgroundVideoEl.classList.remove("mobile");
    transitionVideoEl.classList.remove("mobile");
  }

  // Update the background video source based on the current state
  if (currentState && currentState.backgroundVideo) {
    const newSrc = getVideoSource(currentState.backgroundVideo);
    if (backgroundVideoEl.src !== newSrc.url) {
      backgroundVideoEl.src = newSrc.url;
      backgroundVideoEl.load(); // Ensure the video is reloaded with the new source
      backgroundVideoEl.muted = true;
    }
  }
}

applyResponsiveStyles();
window.addEventListener("resize", applyResponsiveStyles);

function getVideoSource(videoObj) {
  return window.innerWidth < 768 ? videoObj.mobile : videoObj.desktop;
}

// =======================
// START JOURNEY
// =======================

document.getElementById("start-journey").addEventListener("click", () => {
  console.log("Start Journey button clicked.");
  startJourney();
  playBackgroundVideo();
  initializeBackgroundSound(); // Ensure background sound is initialized
});

function playBackgroundVideo() {
  backgroundVideoEl.play();
}

function startJourney() {
  // Start the fade-out effect
  introOverlay.style.opacity = "0";

  // Wait for the fade-out to complete before hiding the overlay and starting the journey
  setTimeout(() => {
    introOverlay.style.display = "none";
    introOverlay.remove();
    initiateTransition(
      introState.transitionVideo,
      introState.targetState,
      true
    );
    playBackgroundSound();
  }, 500); // Matches the CSS transition duration
}

// =======================
// TRANSITION FUNCTION
// =======================

function initiateTransition(transitionVideoSrc, nextState) {
  const isMobileView = window.innerWidth < 768;
  const videoConfig = isMobileView
    ? transitionVideoSrc.mobile
    : transitionVideoSrc.desktop;
  const videoSrc = videoConfig.url;
  const transitionLength = videoConfig.length;
  const fadeDuration = 500;

  if (currentState === introState) {
    introOverlay.style.opacity = "0";
  } else {
    uxContainer.style.opacity = "0";
  }

  togglePointerEvents([uxContainer, overlaysContainer], false);
  transitionVideoEl.src = videoSrc;
  transitionVideoEl.muted = false; // Ensure the transition video is unmuted
  transitionVideoEl.load();

  const playPromise = transitionVideoEl.play();
  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      console.error("Error playing transition video:", error);
      const fallbackMessage = document.createElement("div");
      fallbackMessage.classList.add("fallback-message");
      fallbackMessage.innerText = "Click to play the video";
      transitionVideoEl.parentElement.appendChild(fallbackMessage);
      fallbackMessage.addEventListener("click", () => {
        transitionVideoEl.play().then(() => {
          fallbackMessage.remove();
        });
      });
    });
  }

  transitionVideoEl.style.opacity = "1";
  setTimeout(() => {
    changeState(nextState);
  }, transitionLength - 800);

  setTimeout(() => {
    transitionVideoEl.style.opacity = "0";
    updateuxContainer();
    if (currentState === introState) {
      introOverlay.style.display = "none";
      introOverlay.remove();
    } else {
      uxContainer.style.opacity = "1";
    }
  }, transitionLength - fadeDuration);

  setTimeout(() => {
    transitionVideoEl.src = "";
    togglePointerEvents([uxContainer, overlaysContainer], true);

    // Show the footer buttons after the transition is complete
    document.querySelector(".footer-buttons").classList.add("show");
  }, transitionLength);

  // Clear the current screen div after 500 milliseconds
  setTimeout(() => {
    const screenDiv = document.querySelector(".screen-div");
    if (screenDiv) {
      screenDiv.remove();
    }
  }, 500);
}

// =======================
// STATE CHANGE FUNCTION
// =======================

function changeState(stateKey) {
  console.log(`Changing state to: ${stateKey}`); // Log when state changes
  const state = states[stateKey];
  const backgroundVideoConfig = getVideoSource(state.backgroundVideo);
  const backgroundVideoSrc = backgroundVideoConfig.url;
  currentState = state;

  backgroundVideoEl.src = backgroundVideoSrc;
  backgroundVideoEl.load();
  backgroundVideoEl.oncanplaythrough = () => {
    backgroundVideoEl.play().catch((error) => {
      console.error("Error attempting to play the video:", error);
    });
    backgroundVideoEl.style.opacity = "1";
  };

  overlaysContainer.innerHTML = "";

  if (state.clickableOverlays) {
    state.clickableOverlays.forEach((overlayConfig) => {
      createClickableOverlay(overlayConfig);
    });
  }

  updateTriggers(state.triggers);

  setTimeout(function () {
    updateScreenDiv(state);
    console.log(`Current state is now: ${stateKey}`); // Log the current state
  }, 0);
}

// =======================
// SCREEN DIV CREATION
// =======================

function updateScreenDiv(state) {
  if (!uxContainer) {
    console.error("Trigger container not found. Cannot manage screen-div.");
    return;
  }

  // Remove existing screen-div if present
  let screenDiv = uxContainer.querySelector(".screen-div");
  if (screenDiv) {
    uxContainer.removeChild(screenDiv);
  }

  // Check if the current state requires a screen-div
  if (state.screenDiv) {
    // Create a new screen-div if required by the current state
    screenDiv = document.createElement("div");
    screenDiv.className = "screen-div";

    // Determine what type of content to create inside the screen-div
    const isLandscape = window.innerWidth > window.innerHeight;
    const isMobileView = window.innerWidth < 768 && !isLandscape;
    let source, sourceType, popupType, popupSource;

    if (isMobileView) {
      source = state.screenDivMobileSource;
      sourceType = state.screenDivMobileSourceType;
      popupType = state.screenDivMobilePopupType;
      popupSource = state.screenDivMobilePopupSource;
    } else {
      source = state.screenDivSource;
      sourceType = state.screenDivType;
      popupType = state.screenDivType;
      popupSource = state.screenDivSource;
    }

    const handleFirstTouch = (video) => {
      const showControlsOnFirstTouch = () => {
        video.controls = true;
        video.removeEventListener("touchstart", showControlsOnFirstTouch);
      };
      video.addEventListener("touchstart", showControlsOnFirstTouch);
    };

    if (isMobileView && sourceType === "video") {
      const img = document.createElement("img");
      img.src =
        "https://neyroosales.space/wp-content/uploads/2024/06/thumbnails-screen-ssn-video.jpg";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.addEventListener("click", () => {
        const video = document.createElement("video");
        video.src = source;
        video.setAttribute("preload", "auto");
        video.setAttribute("autoplay", "autoplay");
        video.setAttribute("loop", "loop");
        video.setAttribute("playsinline", "playsinline");
        video.setAttribute("allowfullscreen", true);
        video.setAttribute("webkit-playsinline", "");
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.controlsList = "nodownload";

        // Initially hide the controls
        video.controls = false;
        handleFirstTouch(video);

        video.addEventListener("play", () => {
          if (backgroundSound) backgroundSound.pause();
        });
        video.addEventListener("pause", () => {
          if (backgroundSound) backgroundSound.play();
        });

        // Replace the image with the video element and play it with sound
        screenDiv.innerHTML = ""; // Clear the screen div content
        screenDiv.appendChild(video);

        video.play().catch((error) => {
          console.error("Error attempting to play the video:", error);
        });
      });
      screenDiv.appendChild(img);
    } else if (sourceType === "video") {
      const video = document.createElement("video");
      video.src = source;
      video.setAttribute("preload", "auto");
      video.setAttribute("autoplay", "autoplay");
      video.setAttribute("loop", "loop");
      video.setAttribute("muted", "muted"); // Ensure the video is muted
      video.setAttribute("playsinline", "playsinline");
      video.setAttribute("allowfullscreen", true);
      video.setAttribute("webkit-playsinline", "");
      video.controlsList = "nodownload";
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "cover";

      if (isMobileView) {
        // Initially hide the controls
        video.controls = false;
        handleFirstTouch(video);
      } else {
        // Enable the controls on desktop
        video.controls = true;
      }

      // Ensure the video is played after it's ready
      video.addEventListener("canplaythrough", () => {
        video.play().catch((error) => {
          console.error("Error attempting to play the video:", error);
        });
      });

      video.addEventListener("play", () => {
        if (backgroundSound) backgroundSound.pause();
      });
      video.addEventListener("pause", () => {
        if (backgroundSound) backgroundSound.play();
      });

      screenDiv.appendChild(video);
    } else if (sourceType === "image") {
      const img = document.createElement("img");
      img.src = source;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.addEventListener("click", () => {
        window.open(popupSource, "_blank");
      });
      screenDiv.appendChild(img);
    } else if (sourceType === "iframe") {
      const iframe = document.createElement("iframe");
      iframe.src = source;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.setAttribute("frameborder", "0");
      screenDiv.appendChild(iframe);
    }

    // Ensure the screen-div is interactable
    screenDiv.style.pointerEvents = "auto";

    // Append the new screen-div to the uxContainer
    uxContainer.appendChild(screenDiv);
  }
}

// =======================
// CLICKABLE OVERLAYS
// =======================

function createClickableOverlay(config) {
  const overlay = document.createElement("div");
  overlay.id = config.id;
  overlay.style.position = "absolute";
  overlay.style.top = config.position.top;
  overlay.style.left = config.position.left;
  overlay.style.width = config.size.width;
  overlay.style.height = config.size.height;
  overlay.style.cursor = "pointer";
  overlay.style.zIndex = 10; // Ensure it's above the video but below other UI elements
  overlay.style.backgroundColor = "rgba(0,0,0,0)"; // Transparent

  overlay.addEventListener("click", config.onClick);

  document.querySelector(".overlays-container").appendChild(overlay);
}

// =======================
// TRIGGERS SETUP
// =======================

function createTrigger(trigger) {
  const buttonEl = document.createElement("button");

  const isLandscape = window.innerWidth > window.innerHeight;
  const isMobileView = window.innerWidth < 768 && !isLandscape;

  if (isMobileView) {
    // Mobile layout
    buttonEl.classList.add("mobile-button");
    if (trigger.order !== undefined) {
      buttonEl.style.order = trigger.order;
    }
  } else {
    // Desktop layout
    buttonEl.classList.add("transparent-button");
    buttonEl.style.top = trigger.position.top;
    buttonEl.style.left = trigger.position.left;
  }

  const textEl = document.createElement("span");
  textEl.innerText = trigger.text;
  textEl.classList.add("trigger-text");
  buttonEl.appendChild(textEl);

  if (trigger.icon) {
    const imgEl = document.createElement("img");
    imgEl.src = trigger.icon;
    imgEl.alt = `${trigger.text} Icon`;
    imgEl.classList.add("trigger-icon");
    buttonEl.appendChild(imgEl);
  }

  if (trigger.highlighted === 1) {
    buttonEl.classList.add("highlighted");
  }

  buttonEl.addEventListener("click", (event) => {
    trigger.onClick.call(trigger, event);
    // Ensure the video plays on click
    const playPromise = transitionVideoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  });

  buttonContainer.appendChild(buttonEl);
}

function updateTriggers(triggers) {
  buttonContainer.innerHTML = "";

  const isLandscape = window.innerWidth > window.innerHeight;
  const isMobileView = window.innerWidth < 768 && !isLandscape;

  if (isMobileView) {
    // Sort triggers by mobile order if on mobile
    triggers.sort(
      (a, b) =>
        (a.order ?? triggers.indexOf(a)) - (b.order ?? triggers.indexOf(b))
    );
    buttonContainer.classList.add("mobile-view");
  } else {
    // Reset styles for desktop view
    buttonContainer.classList.remove("mobile-view");
    updateuxContainer(); // Ensure the container is updated for desktop layout
  }

  triggers.forEach((trigger) => createTrigger(trigger));
}

// =======================
// UX CONTAINER UPDATE
// =======================

function updateuxContainer() {
  const isMobileView = window.innerWidth < 768;
  const styles = uxContainer.style;

  if (isMobileView) {
    // Clear styles in mobile view
    Object.assign(styles, {
      position: "",
      top: "",
      left: "",
      width: "",
      height: "",
    });
    return;
  }

  const videoAspectRatio = video.videoWidth / video.videoHeight;
  const containerWidth = videoContainer.offsetWidth;
  const containerHeight = videoContainer.offsetHeight;
  const containerAspectRatio = containerWidth / containerHeight;

  let width, height;

  if (containerAspectRatio > videoAspectRatio) {
    // Container is wider than video
    width = containerWidth;
    height = width / videoAspectRatio;
  } else {
    // Container is taller than video
    height = containerHeight;
    width = height * videoAspectRatio;
  }

  const leftOffset = (containerWidth - width) / 2;
  const topOffset = (containerHeight - height) / 2;

  Object.assign(styles, {
    position: "absolute",
    top: `${topOffset}px`,
    left: `${leftOffset}px`,
    width: `${width}px`,
    height: `${height}px`,
  });
}

// =======================
// DOWNLOAD FUNCTION
// =======================

function triggerFileDownload(url) {
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.setAttribute("download", "");
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// =======================
// ELEMENTS POINTER EVENTS TOGGLE
// =======================

function togglePointerEvents(elements, enable) {
  const pointerEventsValue = enable ? "" : "none";
  elements.forEach((element) => {
    element.style.pointerEvents = pointerEventsValue;
  });
}

// =======================
// RESIZE HANDLER
// =======================

function combinedResizeHandler() {
  updateuxContainer();
  updateTriggers(currentState.triggers);
}

window.addEventListener("resize", combinedResizeHandler);

// =======================
// SCREEN VIDEO - ENTER FULLSCREEN
// =======================

function enterFullscreenVideo() {
  const video = document.querySelector(".screen-div video");
  if (video) {
    if (video.requestFullscreen) {
      video.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else if (video.webkitEnterFullScreen) {
      // Safari on iOS
      video.webkitEnterFullScreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      console.error("Fullscreen API is not supported by this browser.");
    }
  } else {
    console.error("No video found in the current screen-div.");
  }
}

// =======================
// OVERLAY AND POPUP
// =======================

function showOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("background-overlay");
  document.body.appendChild(overlay);
  overlay.style.display = "block";
  setTimeout(() => overlay.classList.add("active"), 0);
  return overlay;
}

function showPopup(url, type) {
  const overlay = showOverlay();
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.style.opacity = "0"; // Start with popup invisible for the transition effect

  if (type === "video" || type === "image" || window.innerWidth < 768) {
    popup.style.width = "93dvw";
    popup.style.height = "91dvh";
    popup.style.borderRadius = "0";

    if (type === "video") {
      backgroundSound.volume = 0;
    }
  }

  let innerHTML;
  if (type === "video") {
    innerHTML = `<iframe width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" sandbox="allow-forms allow-same-origin allow-scripts allow-popups" src="${url}"></iframe>`;
  } else if (type === "image") {
    innerHTML = `<img src="${url}" style="width: 100%; height: 100%; object-fit: cover;">`;
  } else if (type === "iframe") {
    innerHTML = `<iframe width="100%" height="100%" frameborder="0" allow="fullscreen" src="${url}" style="width: 100%; height: 100%;"></iframe>`;
  }

  if (
    type === "video" ||
    type === "image" ||
    type === "iframe" ||
    window.innerWidth < 768
  ) {
    innerHTML += `
    <div class="close-container info-close-container">
        <img src="https://asset.neyroo-hub.de/cc511007-cb13-430c-ab86-f76356def0e5/c196f9e1-308e-42ce-b1e7-8a5887fdf8ff/PUBLIC/238cc16b-ef5f-4853-a135-72694ea2c70a/circle-xmark-regular-v3.svg?version=1" class="close-icon info-close-icon">
      </div>`;
  }

  popup.innerHTML = innerHTML;
  document.body.appendChild(popup);

  setTimeout(() => (popup.style.opacity = "1"), 10);

  if (
    type === "video" ||
    type === "image" ||
    type === "iframe" ||
    window.innerWidth < 768
  ) {
    const closeContainer = popup.querySelector(".close-container");

    closeContainer.addEventListener("click", () => {
      popup.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);

        if (type === "video") {
          backgroundSound.volume = 1;
        }
      }, 500);
    });

    closeContainer.addEventListener(
      "mouseover",
      () => (closeContainer.querySelector(".close-icon").style.opacity = "1")
    );
    closeContainer.addEventListener(
      "mouseout",
      () => (closeContainer.querySelector(".close-icon").style.opacity = "0.3")
    );
  }

  overlay.addEventListener("click", function () {
    popup.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(popup);
      document.body.removeChild(overlay);

      if (type === "video") {
        backgroundSound.volume = 1;
      }
    }, 500);
  });
}

// =======================
// RIGHT CLICK DISABLE
// =======================

if (screenDiv) {
  screenDiv.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    console.log(
      "Right-click has been disabled on the screen-div or its child elements."
    );
  });
} else {
  console.log("screen-div element was not found.");
}
