// Funktion für scharfzeichnung in der Canvas
function optimizeCanvas(cnv) {
  // Get the DPR and size of the canvas
  const dpr = window.devicePixelRatio;
  const rect = cnv.getBoundingClientRect();

  // Set the "actual" size of the canvas
  cnv.width = rect.width * dpr;
  cnv.height = rect.height * dpr;

  // Scale the context to ensure correct drawing operations
  cnv.getContext('2d').scale(dpr, dpr);

  // Set the "drawn" size of the canvas
  cnv.style.width = `${rect.width}px`;
  cnv.style.height = `${rect.height}px`;
}

 // linearly maps value from the range (a..b) to (c..d)
 function mapRange(value, a, b, c, d) {
  // first map value from (a..b) to (0..1)
  value = (value - a) / (b - a);
  // then map it from (0..1) to (c..d) and return it
  return c + value * (d - c);
}
