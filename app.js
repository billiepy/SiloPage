const profile = {
  displayName: "DollMusicBot",
  username: "@DollMusicBot",
  bio: "just another soul on the internet ✦",
  avatar: "assets/avatar.jpg",
  views: 1284,
  location: "Internet",
  track: {
    title: "midnight memories",
    artist: "tinyaf",
    src: "assets/music.mp3"
  },
  socials: [
    { label: "TG", url: "https://t.me/" },
    { label: "IG", url: "#" },
    { label: "GH", url: "#" }
  ]
};

const $ = (id) => document.getElementById(id);

$("displayName").textContent = profile.displayName;
$("username").textContent = profile.username;
$("bio").textContent = profile.bio;
$("avatar").src = profile.avatar;
$("views").textContent = Number(profile.views).toLocaleString();
$("location").textContent = profile.location;
$("trackTitle").textContent = profile.track.title;
$("trackArtist").textContent = profile.track.artist;

const audio = $("audio");
const playBtn = $("playBtn");
const equalizer = $("equalizer");
audio.src = profile.track.src;

playBtn.addEventListener("click", async () => {
  if (audio.paused) {
    try { await audio.play(); } catch {}
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", () => {
  playBtn.textContent = "❚❚";
  equalizer.classList.add("playing");
});

audio.addEventListener("pause", () => {
  playBtn.textContent = "▶";
  equalizer.classList.remove("playing");
});

audio.addEventListener("ended", () => {
  playBtn.textContent = "▶";
  equalizer.classList.remove("playing");
});

// Telegram Mini App integration.
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();

  // Telegram's theme can be used later for dynamic theming.
  document.documentElement.style.setProperty(
    "--tg-bg",
    tg.themeParams?.bg_color || "#08080c"
  );
}

// "Enter" simply dismisses the button; useful when this page is opened
// directly, while Telegram users can keep the same profile experience.
$("enterBtn").addEventListener("click", () => {
  $("enterBtn").classList.add("hidden");
});

// Attempt to start the video. Mobile browsers may block media until
// interaction; the video is muted so autoplay is normally permitted.
const bgVideo = $("bgVideo");
bgVideo?.play?.().catch(() => {});
