window.addEventListener('load', () => {
  async function supportsWebp() {
    if (!self.createImageBitmap) return false;

    const webpData =
      'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then((r) => r.blob());
    return createImageBitmap(blob).then(
      () => true,
      () => false
    );
  }

  (async () => {
    if (await supportsWebp()) {
      document.documentElement.classList.add('webp');
    } else {
      document.documentElement.classList.add('no-webp');
    }
  })();
});
