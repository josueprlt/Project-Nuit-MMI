let notifications;
let svgPlane;
let svgBreathing;
let svgRadio;
let svgTrash;
let svgShower;
let svgCloud;

function preload() {
  svgPlane = loadImage("/assets/notifications/plane.svg");
  svgBreathing = loadImage("/assets/notifications/breathing.svg");
  svgRadio = loadImage("/assets/notifications/radio.svg");
  svgTrash = loadImage("/assets/notifications/trash.svg");
  svgShower = loadImage("/assets/notifications/shower.svg");
  svgCloud = loadImage("/assets/notifications/cloud.svg");

  notifications = [
    {
      title: "Congratulations!",
      message:
        "You’ve offset the equivalent of a flight from Paris to Berlin by plane.",
      svg: svgPlane,
    },
    {
      title: "Congratulations!",
      message: "You've eliminated as much CO₂ as a human's breathing",
      svg: svgBreathing,
    },
    {
      title: "Well done!",
      message:
        "You've saved the same CO₂ as watching an entire season of Wednesday",
      svg: svgRadio,
    },
    {
      title: "Well done!",
      message: "You've saved the same CO₂ as microwaving 200 popcorn bags",
      svg: svgTrash,
    },
    {
      title: "Great Job!",
      message:
        "You've eliminated the CO₂ equivalent of a quick 10-minute shower",
      svg: svgShower,
    },
    {
      title: "Great Job!",
      message:
        "You've eliminated the CO₂ impact of 100 GB stored in the cloud for a year",
      svg: svgCloud,
    },
  ];
}

export default function createNotif(message) {
  const cardContainer = document.getElementById("card-container");

  // Create card div
  const card = document.createElement("div");
  card.classList.add("card");

  // Add icon, message, and close button
  card.innerHTML = `
      <div class="content">
      <div class="icon">
      <p>text</p>
      </div>
      <div>
      <strong style="font-size: 1.5em;">Congratulations!</strong>
      <p style="font-size: 1.2em;">${message}</p>
      </div>
      </div>
      <button class="close-btn">&times;</button>
    `;

  // Add close button functionality
  const closeButton = card.querySelector(".close-btn");
  closeButton.addEventListener("click", () => {
    card.remove();
  });

  // Append card to the container
  cardContainer.appendChild(card);
}
