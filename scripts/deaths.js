const badImgContainer = document.querySelector(".bad-image-container");
const goodImgContainer = document.querySelector(".good-image-container");

const badImages = [
  "https://media.tenor.com/dpNv1wLaItAAAAAM/natsuki-subaru-eyepatch.gif",
  "https://media.tenor.com/-eQzHvuDl5QAAAAM/subaru-natsuki.gif",
  "https://media.tenor.com/i5srXN8ugQEAAAAM/rezero-season-3-episode-2-anime.gif",
  "https://media.tenor.com/hXrZfCORaxIAAAAM/natsuki-subaru-suffering.gif",
  "https://media.tenor.com/nvN4hw_IgE4AAAAM/natsuki-subaru-angry.gif",
  "https://media.tenor.com/U-TB9ik7rJAAAAAM/natsuki-subaru-re-zero.gif",
  "https://media.tenor.com/MKvC08NNtVAAAAAM/subaru-great-rabbit.gif",
  "https://media.tenor.com/hhxa3bqP_YEAAAAM/rage-angry.gif",
  "https://media.tenor.com/QJ4C6zzc-qsAAAAM/rezero-re-zero.gif",
  "https://media.tenor.com/NHJ5L8AyPakAAAAM/natsuki-subaru-re-zero-kara-hajimeru-isekai-seikatsu.gif",
  "https://media.tenor.com/Pt5-tj_msOsAAAAM/re-zero-natsuki-subaru.gif",
  "https://media.tenor.com/KHpTWofLUaIAAAAM/re-zero-natsuki-subaru.gif",
  "https://media1.tenor.com/m/yw1wXEH5w7sAAAAd/natsuki-subaru-death.gif",
  "https://media.tenor.com/WtlvAQKd0s8AAAAM/anime-anime-cry.gif",
  "https://media.tenor.com/AVh-gJTDH5gAAAAM/re-zero-re-zero-subaru.gif",
  "https://media1.tenor.com/m/kUDbNXIeigwAAAAd/re-zero-natsuki-subaru.gif",
  "https://media1.tenor.com/m/3JgLeTI0GFYAAAAC/natsuki-subaru-angry.gif"
];

const goodImages = [
  "https://media.tenor.com/7zFnO4IoGUkAAAAM/re-zero-natsuki-subaru.gif",
  "https://media.tenor.com/iM1uisxMx4IAAAAM/re-zero-natsuki-subaru.gif",
  "https://media.tenor.com/AEg8ySR2tAoAAAAM/re-zero-natsuki-subaru.gif",
  "https://media.tenor.com/vZ1NEm0XSnEAAAAM/natsuki-subaru-blush.gif",
  "https://media.tenor.com/G7uymnPWMyYAAAAM/natsuki-subaru-subaru-natsuki.gif",
  "https://media.tenor.com/5CT0qTrh4ZgAAAAM/subaru-natsuki.gif",
  "https://media.tenor.com/W-wl5tlQVvQAAAAM/subaru-subaru-natsuki.gif",
  "https://media.tenor.com/DciFZCqTq_8AAAAM/subaru-natsuki-re-zero.gif",
  "https://media.tenor.com/-fBXO8ftLFcAAAAM/natsuki-subaru-funny.gif",
  "https://media.tenor.com/lKn4pULgNCYAAAAM/natsuki-subaru-re-zero.gif",
  "https://media.tenor.com/vbiHt-t2810AAAAM/re-zero-natsuki-subaru.gif",
  "https://media1.tenor.com/m/t0I_UYuSsCAAAAAd/subaru-blushing.gif",
  "https://media.tenor.com/b_-CoA0e3TUAAAAM/natsuki-subaru-puck.gif",
  "https://media.tenor.com/_7q3g7_r-ssAAAAM/re-zero-natsuki-subaru.gif",
  "https://media.tenor.com/hNNwUSjgB0gAAAAM/subaru-rezero.gif",
  "https://media.tenor.com/EP84DRQLE1sAAAAM/subaru-natsuki-re-zero.gif",
  "https://media.tenor.com/Q56snc1ZUkMAAAAM/re-zero-natsuki-subaru.gif",
  "https://media1.tenor.com/m/85WyIWYK_tQAAAAd/re-zero-natsuki-subaru.gif"
];

goodImages.forEach((url, index) => {
  const newImg = document.createElement("img");
  newImg.src = url;
  newImg.alt = `Image ${index}`;
  newImg.style.aspectRatio = "16 / 9";
  goodImgContainer.appendChild(newImg);
});

badImages.forEach((url, index) => {
  const newImg = document.createElement("img");
  newImg.src = url;
  newImg.alt = `Image ${index}`;
  badImgContainer.appendChild(newImg);
});