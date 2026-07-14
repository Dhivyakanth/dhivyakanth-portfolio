export function useCardTilt(options = {}) {
  const maxTilt = options.maxTilt ?? 10;

  function updateTilt(event) {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const tiltY = (x - 0.5) * maxTilt * 2;
    const tiltX = (0.5 - y) * maxTilt * 2;

    target.style.setProperty('--card-tilt-x', `${tiltX.toFixed(2)}deg`);
    target.style.setProperty('--card-tilt-y', `${tiltY.toFixed(2)}deg`);
  }

  function resetTilt(event) {
    const target = event.currentTarget;
    target.style.setProperty('--card-tilt-x', '0deg');
    target.style.setProperty('--card-tilt-y', '0deg');
  }

  return {
    onPointerMove: updateTilt,
    onPointerLeave: resetTilt,
  };
}