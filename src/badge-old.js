export function badge(node, { count, url }) {
  generateIcon(node, count);

  return {
    update({ count, url }) {
      generateIcon(node, count, url);
    }
  };
}

function generateIcon(node, count, url) {
  const padding = 100 / 16;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  if (url) {
    const image = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "image"
    );
    image.setAttribute("x", 0);
    image.setAttribute("y", 0);
    image.setAttribute("height", 100);
    image.setAttribute("width", 100);
    image.setAttribute("href", url);
    svg.appendChild(image);
  }

  if (count) {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", count > 9 ? 55 : 60);
    text.setAttribute("y", 80);
    text.setAttribute("font-size", count > 9 ? "50" : "60");
    text.setAttribute("font-family", "Verdana");
    text.setAttribute("font-weight", "bold");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("alignment-baseline", "text-bottom");
    text.setAttribute("fill", "white");
    text.style.font = "sans";
    text.style.fontWeight = "400";
    text.textContent = count;
    svg.appendChild(text);

    // measure the text
    document.body.appendChild(svg);
    const rect = text.getBBox();
    document.body.removeChild(svg);

    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 60);
    c.setAttribute("cy", 60);
    c.setAttribute("r", 40);
    c.setAttribute("width", rect.width + padding);
    c.setAttribute("height", rect.height + padding);
    c.style.fill = "red";
    svg.appendChild(c);
    svg.appendChild(text);
  }

  console.log(svg.outerHTML);

  node.href = "data:image/svg+xml," + svg.outerHTML;
}


<link use:badge={{ count, url}} rel="icon" href="data:image/svg+xml,
  <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
  </svg>">
