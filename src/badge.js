export function badge(node, { count, background, color }) {
  const setNotification = (count, background, color) => {
    if (count > 0) {
      context.drawImage(img, 0, 0, faviconSize, faviconSize);

      // Draw Notification Circle
      context.beginPath();
      context.arc(
        canvas.width - faviconSize / 3,
        faviconSize / 3,
        faviconSize / 3,
        0,
        2 * Math.PI
      );
      context.fillStyle = background;
      context.fill();

      // Draw Notification Number
      context.font = '55px "helvetica", sans-serif';
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = color;
      context.fillText(count, canvas.width - faviconSize / 3, faviconSize / 3);

      // Replace favicon
      node.href = canvas.toDataURL("image/png");
    }
  };
  let faviconSize = 96;
  const canvas = document.createElement("canvas");
  canvas.width = faviconSize;
  canvas.height = faviconSize;

  const context = canvas.getContext("2d");
  const img = document.createElement("img");

  img.addEventListener("load", () => setNotification(count, background, color));

  img.src = node.href;

  return {
    update({ count, background, color }) {
      setNotification(count, background, color);
    },
    destroy() {
      img.removeEventListener("load");
    }
  };
}
