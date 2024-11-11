// Sample speaker data
const speakers = [
    {
      id: 1,
      name: "John Doe",
      title: "Chief Marketing Officer",
      company: "Specbee",
      image: "https://e1.pngegg.com/pngimages/99/117/png-clipart-circle-shaped-s-man-smiling-portrait.png",
      bio: "Monotonally synergize business communities rather than client-centric convergence.",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Chief Engagement Officer",
      company: "Acquia",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_YA-LvDCp7AqXBqXHOwgS1dKnSWM5oBEDib-26JpLY6s_H8o_rWwUEC2Ww_s_p_fwyA&usqp=CAU",
      bio: "Assertively unleash cross-platform best practices rather than pandemic total linkage.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      title: "Chief Technical Developer",
      company: "Pantheon",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_P-q6NHBvJE07jKBmpMxCtJV1OoWjIsGLig&s",
      bio: "Synergistically monetize parallel infomediaries whereas 2.0 mindshare.",
    },
    {
      id: 4,
      name: "Emily White",
      title: "Chief Marketing Officer",
      company: "Specbee",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUujRH89BI-X-_22_36JNor2ZahuUD-u2kP7YWgMemD1WimmH296dpgfUo-OgC0pcvspE&usqp=CAU",
      bio: "Dramatically pursue real-time markets through e-business strategic theme areas.",
    },
  ];
  
  // Populate speaker cards in a single row
  const slider = document.getElementById("slider");
  speakers.forEach((speaker) => {
    const speakerCard = document.createElement("div");
    speakerCard.classList.add("speaker-card");
    speakerCard.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}" class="speaker-card__image">
      <h3 class="speaker-card__name">${speaker.name}</h3>
      <p class="speaker-card__title">${speaker.title}</p>
    `;
    speakerCard.addEventListener("click", () => showSpeakerDetails(speaker));
    slider.appendChild(speakerCard);
  });
  
  // Function to display speaker details in popover
  const popover = document.getElementById("popover");
  const popoverContent = document.getElementById("popoverContent");
  const popoverClose = document.getElementById("popoverClose");
  
  function showSpeakerDetails(speaker) {
    // Get the position of the introductory text (Speakers intro)
    const introText = document.querySelector(".intro-text");
    const introRect = introText.getBoundingClientRect();
    
    // Set the popover content
    popoverContent.innerHTML = `
      <div class="popover__content">
        <img src="${speaker.image}" alt="${speaker.name}" class="popover__image">
        <div class="popover__text">
          <h3 class="popover__name">${speaker.name}</h3>
          <p class="popover__title">${speaker.title}</p>
          <p class="popover__bio">${speaker.bio}</p>
        </div>
      </div>
    `;
    
    // Position the popover below the intro text and push the speaker cards down
    popover.style.display = "block";
    const popoverHeight = popover.offsetHeight;
    document.querySelector(".speakers-row").style.marginTop = `${popoverHeight + 20}px`;
  
    // Position the popover just below the intro text
    popover.style.top = `${introRect.bottom + 10}px`;
  }
  
  // Close popover
  popoverClose.addEventListener("click", () => {
    popover.style.display = "none";
    document.querySelector(".speakers-row").style.marginTop = "20px"; // Reset margin
  });
  