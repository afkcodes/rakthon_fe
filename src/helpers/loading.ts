export function getRandomLoadingText() {
  const loadingTexts = [
    'Hang tight! Our audio wizardry is conjuring up a summary just for you. 🧙‍♂️✨',
    'Loading your audio magic. 🎩✨ This summary is going to be spellbinding!',
    'Creating your audio summary, one enchanting word at a time. ✨📜',
    'Synchronizing with the audio realm. Your summary is brewing!',
    "Hold on to your headphones! We're crafting your audio summary masterpiece.",
    'Our audio alchemists are hard at work, distilling wisdom into your summary. 🧪✨',
    'Loading your audio insights. Prepare for a knowledge infusion!',
    'Channeling the voice of wisdom. Your audio summary is materializing.',
    'The audio waves are dancing just for you. Your summary is in progress.',
    'Patience is a virtue, especially when crafting the perfect audio summary. 🕰️✨',
    "We're weaving a tapestry of knowledge from your audio. It's worth the wait!",
    'In the realm of audio, patience is the key to a legendary summary. 🎶📚',
    'The audio cosmos are aligning to bring you a stellar summary. 🌌✨',
    "Don't fret! Your audio summary is on its way to becoming a masterpiece.",
    'Loading your audio essence. Prepare to be enlightened!',
    'Our content sorcerers are conjuring up an audio summary fit for a wizard!',
    'Audio to summary transformation in progress. Expect brilliance!',
    'Your audio is the raw material; your summary, the refined gem. 💎✨',
    'The symphony of your audio is turning into a harmonious summary. 🎵📖',
    "In the world of sound, your summary is taking shape. It's almost showtime!",
  ];

  const randomIndex = Math.floor(Math.random() * loadingTexts.length);
  return loadingTexts[randomIndex];
}
