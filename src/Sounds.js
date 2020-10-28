// Imports what ever audio is needed and then plays it
export const audioCall = (i) => {
  let sound = new Audio(`/${i}.mp3`);
  sound.volume = 0.1;
  sound.play();
};
