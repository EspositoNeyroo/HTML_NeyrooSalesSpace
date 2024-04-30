// INITIALES SETUP
window.addEventListener("resize", updateTriggerContainer);

document
  .getElementById("start-journey")
  .addEventListener("click", startJourney);

const transitionVideoEl = document.querySelector(".transition-video");
const triggerContainer = document.querySelector(".trigger-container");
const backgroundVideoEl = document.querySelector(".background-video");
const overlaysContainer = document.querySelector(".overlays-container");
const videoContainer = document.querySelector(".video-container");
const introOverlay = document.querySelector(".intro-overlay");

const introState = {
  transitionVideo:
    "https://neyroosales.space/wp-content/uploads/2024/04/ssn-intro-transition.mp4",
  targetState: "state1",
};
// State management
const states = {
  //STATE 01 - MENU INITIAL
  state1: {
    backgroundVideo:
      "https://neyroosales.space/wp-content/uploads/2024/04/ssn-menu-loop.mp4",
    triggers: [
      {
        id: "trigger1",
        position: {
          top: "42%",
          left: "5.5%",
        },
        text: "Begrüßung",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-menu-turn-transition.mp4",
        transitionLength: 8800,
        targetState: "state2",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger2",
        position: {
          top: "48%",
          left: "5.5%",
        },
        text: "Pathway Experience",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-menu-turn-transition.mp4",
        transitionLength: 8800,
        targetState: "state3",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger3",
        position: {
          top: "54%",
          left: "5.5%",
        },
        text: "Surprise to engage",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-menu-turn-transition.mp4",
        transitionLength: 8800,
        targetState: "state4",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger4",
        position: {
          top: "42%",
          left: "77.5%",
        },
        text: "Neyroo Film",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-menu-turn-transition.mp4",
        transitionLength: 8800,
        targetState: "state5",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger5",
        position: {
          top: "48%",
          left: "77.5%",
        },
        text: "Neyroo Studio",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-menu-turn-transition.mp4",
        transitionLength: 8800,
        targetState: "state6",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger6",
        position: {
          top: "54%",
          left: "77.5%",
        },
        text: "Demo Spatial Chat",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-menu-turn-transition.mp4",
        transitionLength: 8800,
        targetState: "state7",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
    ],
  },
  //STATE 02 - Begrüßung

  state2: {
    backgroundVideo:
      "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-loop.mp4",
    screenDiv: true,
    screenDivSource: "https://sites.neyrooverse.de/video-site/",
    clickableOverlays: [
      {
        id: "overlay1",
        position: {
          top: "17vh",
          left: "22vw",
        },
        size: {
          width: "56vw",
          height: "65%",
        },
        onClick() {
          showPopup(
            "https://neyroosales.space/wp-content/uploads/2024/04/tuev–camp3-official-release-trailer.mp4",
            "video"
          );
        },
      },
    ],
    triggers: [
      {
        id: "trigger1",
        position: {
          top: "42%",
          left: "2%",
        },
        text: "Begrüßung abspielen",
        highlighted: 1,
        targetState: "state2",
        icon: "",
        onClick() {
          showPopup(
            "https://neyroosales.space/wp-content/uploads/2024/04/tuev–camp3-official-release-trailer.mp4",
            "video"
          );
        },
      },

      {
        id: "trigger2",
        position: {
          top: "48%",
          left: "2%",
        },
        text: "Pathway Experience",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state3",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger3",
        position: {
          top: "54%",
          left: "2%",
        },
        text: "Surprise to engage",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state4",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger4",
        position: {
          top: "42%",
          left: "82%",
        },
        text: "Neyroo Film",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state5",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger5",
        position: {
          top: "48%",
          left: "82%",
        },
        text: "Neyroo Studio",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state6",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger6",
        position: {
          top: "54%",
          left: "82%",
        },
        text: "Demo Spatial Chat",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state7",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
    ],
  },

  //STATE 03 - Pathway Experience

  state3: {
    backgroundVideo:
      "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-loop.mp4",
    screenDiv: true,
    screenDivSource:
      "https://neyroosales.space/wp-content/uploads/2024/04/Pathway-by-Neyroo.pdf",

    triggers: [
      {
        id: "trigger1",
        position: {
          top: "42%",
          left: "2%",
        },
        text: "Konzept",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state2",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger2",
        position: {
          top: "48%",
          left: "2%",
        },
        text: "Pathway Experience Download",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        highlighted: 1,
        targetState: "state3",
        icon: "",
        onClick() {
          triggerFileDownload(
            "https://neyroosales.space/wp-content/uploads/2024/04/Pathway-by-Neyroo.pdf"
          );
        },
      },

      {
        id: "trigger3",
        position: {
          top: "54%",
          left: "2%",
        },
        text: "Surprise to engage ",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state4",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger4",
        position: {
          top: "42%",
          left: "82%",
        },
        text: "Neyroo Film",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state5",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger5",
        position: {
          top: "48%",
          left: "82%",
        },
        text: "Neyroo Studio",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state6",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger6",
        position: {
          top: "54%",
          left: "82%",
        },
        text: "Demo Spatial Chat",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state7",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
    ],
  },

  //STATE 04 - Surprise to engage
  state4: {
    backgroundVideo:
      "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-loop.mp4",
    screenDiv: true,
    screenDivSource:
      "https://neyroosales.space/wp-content/uploads/2024/04/Surprise-to-Engage.pdf",

    triggers: [
      {
        id: "trigger1",
        position: {
          top: "42%",
          left: "2%",
        },
        text: "Konzept",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state2",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger2",
        position: {
          top: "48%",
          left: "2%",
        },
        text: "Pathway Experience",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state3",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger3",
        position: {
          top: "54%",
          left: "2%",
        },
        text: "Surprise to engage Download",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        highlighted: 1,
        targetState: "state4",
        icon: "",
        onClick() {
          triggerFileDownload(
            "https://neyroosales.space/wp-content/uploads/2024/04/Surprise-to-Engage.pdf"
          );
        },
      },
      {
        id: "trigger4",
        position: {
          top: "42%",
          left: "82%",
        },
        text: "Neyroo Film",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state5",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger5",
        position: {
          top: "48%",
          left: "82%",
        },
        text: "Neyroo Studio",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state6",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger6",
        position: {
          top: "54%",
          left: "82%",
        },
        text: "Demo Spatial Chat",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state7",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
    ],
  },

  //STATE 05 - Neyroo Film
  state5: {
    backgroundVideo:
      "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-loop.mp4",
    screenDiv: true,
    screenDivSource: "https://sites.neyrooverse.de/video-site/",
    clickableOverlays: [
      {
        id: "overlay1",
        position: {
          top: "17vh",
          left: "22vw",
        },
        size: {
          width: "56vw",
          height: "65%",
        },
        onClick() {
          showPopup(
            "https://neyroosales.space/wp-content/uploads/2024/04/neyroo–welcome.mp4",
            "video"
          );
        },
      },
    ],

    triggers: [
      {
        id: "trigger1",
        position: {
          top: "42%",
          left: "2%",
        },
        text: "Konzept",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state2",
        icon: "",
        size: {
          width: "40%",
          height: "40%",
        },
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger2",
        position: {
          top: "48%",
          left: "2%",
        },
        text: "Pathway Experience",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state3",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger3",
        position: {
          top: "54%",
          left: "2%",
        },
        text: "Surprise to engage",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state4",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger4",
        position: {
          top: "42%",
          left: "82%",
        },
        text: "Neyroo Film",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        highlighted: 1,
        targetState: "state5",
        icon: "",
        onClick() {
          showPopup(
            "https://neyroosales.space/wp-content/uploads/2024/04/neyroo–welcome.mp4",
            "video"
          );
        },
      },
      {
        id: "trigger5",
        position: {
          top: "48%",
          left: "82%",
        },
        text: "Neyroo Studio",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state6",

        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger6",
        position: {
          top: "54%",
          left: "82%",
        },
        text: "Demo Spatial Chat",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state7",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
    ],
  },

  //STATE 06 - Neyroo Studio
  state6: {
    backgroundVideo:
      "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-loop.mp4",
    screenDiv: true,
    screenDivSource: "https://neyroostudio.neyroo.de/",

    triggers: [
      {
        id: "trigger1",
        position: {
          top: "42%",
          left: "2%",
        },
        text: "Konzept",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state2",
        icon: "",
        size: {
          width: "40%",
          height: "40%",
        },
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger2",
        position: {
          top: "48%",
          left: "2%",
        },
        text: "Pathway Experience",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state3",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger3",
        position: {
          top: "54%",
          left: "2%",
        },
        text: "Surprise to engage",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state4",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger4",
        position: {
          top: "42%",
          left: "82%",
        },
        text: "Neyroo Film",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state5",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger5",
        position: {
          top: "48%",
          left: "82%",
        },
        text: "Neyroo Studio",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state6",
        highlighted: 1,
        icon: "",
        onClick() {
          // This will open the link in a new tab when the trigger is clicked
          window.open("https://neyroostudio.neyroo.de/", "_blank").focus();
        },
      },

      {
        id: "trigger6",
        position: {
          top: "54%",
          left: "82%",
        },
        text: "Demo Spatial Chat",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state7",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
    ],
  },
  //STATE 07 - Demo Spatial Chat
  state7: {
    backgroundVideo:
      "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-loop.mp4",
    screenDiv: true,
    screenDivSource: "https://sites.neyrooverse.de/video-site/",
    clickableOverlays: [
      {
        id: "overlay1",
        position: {
          top: "17vh",
          left: "22vw",
        },
        size: {
          width: "56vw",
          height: "65%",
        },
        onClick() {
          showPopup(
            "https://neyroosales.space/wp-content/uploads/2024/04/muv_forward_status_quo_trailer.mp4",
            "video"
          );
        },
      },
    ],

    triggers: [
      {
        id: "trigger1",
        position: {
          top: "42%",
          left: "2%",
        },
        text: "Konzept",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state2",
        icon: "",
        size: {
          width: "40%",
          height: "40%",
        },
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger2",
        position: {
          top: "48%",
          left: "2%",
        },
        text: "Pathway Experience",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state3",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger3",
        position: {
          top: "54%",
          left: "2%",
        },
        text: "Surprise to engage ",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state4",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger4",
        position: {
          top: "42%",
          left: "82%",
        },
        text: "Neyroo Film",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,

        targetState: "state5",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },
      {
        id: "trigger5",
        position: {
          top: "48%",
          left: "82%",
        },
        text: "Neyroo Studio",
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state6",
        icon: "",
        onClick() {
          initiateTransition(
            this.transitionVideo,
            this.targetState,
            this.transitionLength
          );
        },
      },

      {
        id: "trigger6",
        position: {
          top: "54%",
          left: "82%",
        },
        text: "Demo Spatial Chat abspielen",
        highlighted: 1,
        transitionVideo:
          "https://neyroosales.space/wp-content/uploads/2024/04/ssn-screen-to-screen-transition.mp4",
        transitionLength: 5120,
        targetState: "state7",
        icon: "",
        onClick() {
          showPopup(
            "https://neyroosales.space/wp-content/uploads/2024/04/muv_forward_status_quo_trailer.mp4",
            "video"
          );
        },
      },
    ],
  },
};

// HomeButton
document.getElementById("HomeButton").addEventListener("click", function () {
  startJourney(); // This will trigger the same actions as the start-journey click
});

// WebsiteButton
document.getElementById("NeyrooButton").addEventListener("click", function () {
  window.open("https://www.neyroo.de", "_blank");
});

document
  .getElementById("DownloadButton")
  .addEventListener("click", function () {
    const downloadUrl =
      "https://neyroosales.space/wp-content/uploads/2024/04/Downloadsammlung-neyroo-ssn.zip";
    triggerFileDownload(downloadUrl);
  });

// BACKGROUND SOUND SETUP

const backgroundSound = new Audio(
  "https://salesspace.neyroo.de/wp-content/uploads/2024/04/MA_FTUS_DarkLongDrones_LOW_BLEND.ogg"
);
backgroundSound.loop = true;

function startBackgroundSound() {
  backgroundSound
    .play()
    .catch((error) => console.error("Error playing sound:", error));
}

//MANAGE AUDIO

document.getElementById("start-journey").addEventListener("click", () => {
  // Unmute or set volume for existing media elements
  enableSoundForMedia();

  // Start the journey
  startJourney();
});

function enableSoundForMedia() {
  const mediaElements = document.querySelectorAll("video, audio");
  mediaElements.forEach((el) => {
    el.muted = false; // Unmute the element
  });
}

// MUTE UNMUTE BUTTON

// Mute/Unmute Functionality
document.getElementById("muteButton").addEventListener("click", function () {
  const videos = document.querySelectorAll("video");
  const isMuted = videos[0].muted;
  const newMuteState = !isMuted;

  // Toggle mute state for all video elements
  videos.forEach((video) => {
    video.muted = newMuteState;
  });

  // Toggle mute state for background audio
  backgroundSound.muted = newMuteState; // Use the muted property for consistency with video elements

  // Update mute icon based on the new mute state
  const muteIcon = document.getElementById("muteIcon");
  muteIcon.src = newMuteState
    ? "https://asset.neyroo-hub.de/cc511007-cb13-430c-ab86-f76356def0e5/c196f9e1-308e-42ce-b1e7-8a5887fdf8ff/PUBLIC/8fcbb006-8315-4d55-8492-b89e2f7f30bc/volume-mute.svg?version=1"
    : "https://asset.neyroo-hub.de/cc511007-cb13-430c-ab86-f76356def0e5/c196f9e1-308e-42ce-b1e7-8a5887fdf8ff/PUBLIC/f4959c87-e4eb-407d-8ded-720521c9d726/volume-on.svg?version=1";
});

// START JOURNEY

function startJourney() {
  // Start the fade-out effect
  introOverlay.style.opacity = "0";

  // Wait for the fade-out to complete before hiding the overlay and starting the journey
  setTimeout(() => {
    introOverlay.style.display = "none";
    introOverlay.remove();
    // Now call initiateIntroTransition
    enableSoundForMedia();
    initiateIntroTransition();
  }, 500); // Matches the CSS transition duration
}

// INITIATE INTRO TRANSITION

function initiateIntroTransition() {
  togglePointerEvents([triggerContainer, overlaysContainer], false);
  transitionVideoEl.src = introState.transitionVideo;
  transitionVideoEl.load();
  transitionVideoEl.play();
  transitionVideoEl.style.opacity = "1"; // Ensure the video is fully visible

  // Assuming the intro video duration is 5 seconds (5000 milliseconds)
  // Start the opacity transition and state change 0.5 seconds before the video ends
  setTimeout(() => {
    // Initiate the opacity transition
    transitionVideoEl.style.opacity = "0";
    startBackgroundSound();
    changeState(introState.targetState);
    updateTriggerContainer();
  }, 7400 - 500); // Adjust the timing as needed

  // Ensure the video element is hidden after the transition is fully complete
  // This timeout is just slightly longer to make sure the opacity transition is smooth
  setTimeout(() => {
    transitionVideoEl.src = ""; // Clear the video source to ensure it stops playing
    togglePointerEvents([triggerContainer, overlaysContainer], true);
  }, 7400); // This ensures the cleanup happens right after the transition finishes
}

// ÜBERGANG FUNKTION
function initiateTransition(transitionVideoSrc, nextState, transitionLength) {
  triggerContainer.style.opacity = "0";
  togglePointerEvents([triggerContainer, overlaysContainer], false);

  transitionVideoEl.style.opacity = "1"; // Immediately set opacity to 1

  transitionVideoEl.src = transitionVideoSrc;
  transitionVideoEl.load();
  transitionVideoEl.play();

  // Use the transitionLength to determine when to start fading out
  setTimeout(() => {
    transitionVideoEl.style.opacity = "0";
  }, transitionLength - 500); // Start fading out 500ms before the video ends

  // Change state after 0.5 seconds
  setTimeout(() => {
    changeState(nextState, transitionLength);
    triggerContainer.style.opacity = "1";
  }, 500);

  // Ensure transition video is hidden after transition

  setTimeout(() => {
    transitionVideoEl.style.opacity = "0";
    transitionVideoEl.src = "";
    triggerContainer.style.opacity = "1";
    updateTriggerContainer();
  }, transitionLength);

  // Enable Clicks 0.5 sec after Transition

  setTimeout(() => {
    togglePointerEvents([triggerContainer, overlaysContainer], true);
  }, transitionLength + 1000);
}

// STATE ÄNDERN FUNKTION
function changeState(stateKey, transitionLength) {
  const state = states[stateKey];

  const overlayVideoEl =
    document.querySelector(".overlay-video") || createOverlayVideo();

  backgroundVideoEl.src = state.backgroundVideo;
  backgroundVideoEl.load();
  backgroundVideoEl.oncanplaythrough = () => {
    backgroundVideoEl.play();
    backgroundVideoEl.style.opacity = "1";
  };

  // Load and play the overlay video immediately upon state change
  if (state.overlayVideo) {
    overlayVideoEl.style.display = "block";
    overlayVideoEl.src = state.overlayVideo;
    overlayVideoEl.load();
    overlayVideoEl.play();
  } else {
    overlayVideoEl.style.display = "none";
    overlayVideoEl.src = "";
  }

  overlaysContainer.innerHTML = ""; // Clear existing overlays

  if (state.clickableOverlays) {
    state.clickableOverlays.forEach((overlayConfig) => {
      createClickableOverlay(overlayConfig);
    });
  }

  // Handle screen-div creation

  const existingScreenDiv = triggerContainer.querySelector(".screen-div");
  if (existingScreenDiv) {
    triggerContainer.removeChild(existingScreenDiv);
  }

  if (state.screenDiv) {
    const screenDiv = document.createElement("div");
    screenDiv.className = "screen-div";
    screenDiv.style.display = "block"; // or any other styles you want

    const iframe = document.createElement("iframe");
    iframe.src = state.screenDivSource;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    // Add more styles or attributes to the iframe as needed

    screenDiv.appendChild(iframe);
    triggerContainer.appendChild(screenDiv);
  }

  // Update UI components like triggers and headlines as before
  updateTriggers(state.triggers);
  updateScreenDiv(state); // Call the new function to manage screen-div
}

// SCREEN DIV CREATION

function updateScreenDiv(state) {
  if (!triggerContainer) {
    console.error("Trigger container not found. Cannot manage screen-div.");
    return;
  }

  // Remove existing screen-div if present
  let screenDiv = triggerContainer.querySelector(".screen-div");
  if (screenDiv) {
    triggerContainer.removeChild(screenDiv);
  }

  // Add screen-div if required by the current state
  if (state.screenDiv) {
    screenDiv = document.createElement("div");
    screenDiv.className = "screen-div";

    const iframe = document.createElement("iframe");
    iframe.src = state.screenDivSource;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.setAttribute("frameborder", "0");
    screenDiv.appendChild(iframe);

    triggerContainer.appendChild(screenDiv);
  }
}

// CREATE OVERLAY VIDEO

function createOverlayVideo() {
  const overlayVideoEl = document.createElement("video");
  overlayVideoEl.className = "overlay-video";
  overlayVideoEl.autoplay = true;
  overlayVideoEl.muted = true;
  overlayVideoEl.loop = true;
  videoContainer.appendChild(overlayVideoEl);
  return overlayVideoEl;
}

// TRIGGER UPDATEN
function updateTriggers(triggers) {
  triggerContainer.innerHTML = "";
  triggers.forEach((trigger) => {
    createTrigger(trigger);
  });
}

// OVERLAY UND POPUP
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
  popup.muted = true;
  popup.controls = false;
  popup.style.opacity = "0"; // Start with popup invisible for the transition effect

  // Apply full-screen and no border radius for video popups
  if (type === "video") {
    popup.style.width = "100vw";
    popup.style.height = "100vh";
    popup.style.borderRadius = "0";

    // Mute the background sound when opening a video popup
    backgroundSound.volume = 0;
  }

  // Basic iframe structure for both popup types
  let innerHTML = `<iframe width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" sandbox="allow-forms allow-same-origin allow-scripts allow-popups" src="${url}"></iframe>`;

  // Add close button only for video popups
  if (type === "video") {
    innerHTML += `
        <div class="close-container" style="position: absolute; top: 1vh; right: 2vw; cursor: pointer; padding: 5px;">
            <img src="https://asset.neyroo-hub.de/cc511007-cb13-430c-ab86-f76356def0e5/d5c6c09d-79a7-4e1d-b9d5-3eb55a710bb2/PUBLIC/2b7cf42d-b5a1-45ad-b361-0a479b03d921/circle-xmark-regular.svg?version=1" class="close-icon" style="width: 24px; height: 24px; opacity: 0.3; transition: opacity 0.3s;">
        </div>`;
  }

  popup.innerHTML = innerHTML;
  document.body.appendChild(popup);

  // Ensure the popup transitions to visible
  setTimeout(() => (popup.style.opacity = "1"), 10);

  // Close functionality for video popups
  if (type === "video") {
    const closeContainer = popup.querySelector(".close-container");

    // Event to close popup
    closeContainer.addEventListener("click", () => {
      popup.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);

        // Restore the background sound volume when closing the video popup
        backgroundSound.volume = 1;
      }, 500);
    });

    // Hover effects for the close button
    closeContainer.addEventListener(
      "mouseover",
      () => (closeContainer.querySelector(".close-icon").style.opacity = "1")
    );
    closeContainer.addEventListener(
      "mouseout",
      () => (closeContainer.querySelector(".close-icon").style.opacity = "0.3")
    );
  }

  // Close popup when overlay is clicked, for both types
  overlay.addEventListener("click", function () {
    popup.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(popup);
      document.body.removeChild(overlay);

      // Restore the background sound volume when closing the overlay
      if (type === "video") {
        backgroundSound.volume = 1;
      }
    }, 500);
  });
}

// CREATE CLICKABLE OVERLAYS

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

// TRIGGER FUNKTION
function createTrigger(trigger) {
  // Create the button element
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("transparent-button");
  buttonEl.style.position = "absolute";
  buttonEl.style.top = trigger.position.top;
  buttonEl.style.left = trigger.position.left;
  buttonEl.innerText = trigger.text; // Set button text from trigger

  // Check if the trigger is highlighted
  if (trigger.highlighted === 1) {
    buttonEl.classList.add("highlighted"); // Add "highlighted" class for custom styling
  }

  // Event listener for the button
  if (trigger.iframeUrl) {
    buttonEl.addEventListener("click", () => showPopup(trigger.iframeUrl));
  } else {
    buttonEl.addEventListener("click", trigger.onClick.bind(trigger));
  }

  triggerContainer.appendChild(buttonEl);
}

// TRIGGER _ DOWNLOAD FUNCTION

function triggerFileDownload(url) {
  // Fetch the file data using XHR or fetch API
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Network response was not ok, status ${response.status}`
        );
      }
      return response.blob();
    })
    .then((blob) => {
      // Create a Blob download link
      const blobUrl = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = url.split("/").pop() || "downloadedFile";

      // Append to the document and trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up the blob URL and the download link element
      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(downloadLink);
    })
    .catch((error) => {
      console.error("There was an issue downloading the file:", error);
    });
}

// TRIGGER CONTAINER UPDATE
function updateTriggerContainer() {
  const video = document.querySelector(".background-video"); // Assuming you want to match this video

  const videoAspectRatio = video.videoWidth / video.videoHeight;
  const containerAspectRatio =
    videoContainer.offsetWidth / videoContainer.offsetHeight;

  let width, height;
  if (containerAspectRatio > videoAspectRatio) {
    // Container is wider than video
    width = videoContainer.offsetWidth;
    height = width / videoAspectRatio;
  } else {
    // Container is taller than video
    height = videoContainer.offsetHeight;
    width = height * videoAspectRatio;
  }

  const leftOffset = (videoContainer.offsetWidth - width) / 2;
  const topOffset = (videoContainer.offsetHeight - height) / 2;

  Object.assign(triggerContainer.style, {
    position: "absolute",
    top: `${topOffset}px`,
    left: `${leftOffset}px`,
    width: `${width}px`,
    height: `${height}px`,
  });
}

// ELEMENTE KLICKBAR UND NICHT-KLICKBAR MACHEN
//(Beispiel: togglePointerEvents([triggerContainer, overlaysContainer], false);)

function togglePointerEvents(elements, enable) {
  const pointerEventsValue = enable ? "" : "none";
  elements.forEach((element) => {
    element.style.pointerEvents = pointerEventsValue;
  });
}
