  let degree = 0;
  let hue1 = 297.3; // Start hue for first color
  let hue2 = 192.6; // Start hue for second color
  function updateGradient() {
    // Update hues
    hue1 = (hue1 + 0.5) % 360;
    hue2 = (hue2 + 0.5) % 360;
    // Construct the conic gradient with updated hues and degree
    document.body.style.backgroundImage = `
      conic-gradient(
        from ${degree}deg at 50% 50%,
        hsl(${hue1}, 84.6%, 20.4%),
        hsl(${hue2}, 51.4%, 58.0%),
        hsl(${hue1}, 84.6%, 20.4%)
      )
    `;
    // Update the degree for the next frame
    degree = (degree + .5) % 360;
    // Request the next frame of the animation
    requestAnimationFrame(updateGradient);
  }
  // Start the animation
  requestAnimationFrame(updateGradient);

 

  // A major pentatonic scale
  const aMajorPentatonicScale = ["A4", "B4", "C#5", "E5", "F#5"];
  
  // Function to play a random note from the A major pentatonic scale with reverb
  function playRandomNoteWithReverb() {
    const randomIndex = Math.floor(Math.random() * aMajorPentatonicScale.length);
    const randomNote = aMajorPentatonicScale[randomIndex];
    
    // Create a synth with reverb
    const synth = new Tone.Synth().connect(new Tone.Freeverb().toDestination());
    synth.triggerAttackRelease(randomNote, "8n");
  }
  
  // Add hover event listeners to all <p> elements
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(paragraph => {
    paragraph.addEventListener("mouseenter", playRandomNoteWithReverb);
  });