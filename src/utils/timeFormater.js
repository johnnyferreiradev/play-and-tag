function twoDigits(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}

export default function format(time) {
  time = Math.round(time);
  if (time > 60) {
    const seconds = time % 60;
    if (time > 3600) {
      const minutes = time % 3600;
      return `${twoDigits(time - minutes)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
    }
      return `${twoDigits(time - seconds)}:${twoDigits(seconds)}`;
  }
  return `${time} seconds`;
}
