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
