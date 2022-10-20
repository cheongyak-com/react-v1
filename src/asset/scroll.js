export default function Scroll(selectedY = 0) {
  let globalId;
  const startTime = performance.now();

  function render(requestTime) {
		const progress = (requestTime - startTime) / 500;

    const curY = window.scrollY || window.pageYOffset;
    if (curY === selectedY) {
      cancelAnimationFrame(globalId);
    };

    const result = curY + (selectedY - curY) * progress;
    window.scrollTo(0, result);
    
    if (progress < 1) {
      globalId = requestAnimationFrame(render);
    };
  }
  globalId = requestAnimationFrame(render);
}