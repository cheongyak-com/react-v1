export default function Scroll(selectedY = 0) {
  let globalId;
  const startTime = performance.now();

  function render(requestTime) {

    const curY = window.scrollY || window.pageYOffset;
    if (curY === selectedY) {
      window.cancelAnimationFrame(globalId);
    };

		const progress = (requestTime - startTime) / 500;
    const result = curY + (selectedY - curY) * progress;
    window.scrollTo(0, result);
    
    if (progress < 1) {
      globalId = window.requestAnimationFrame(render);
    };
  }
  globalId = window.requestAnimationFrame(render);
}