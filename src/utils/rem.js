const onresize = () => { const el = document.documentElement; el.style.fontSize = `${el.clientWidth / 10}px`; }; // 1vw
window.onresize = onresize;
process.nextTick(onresize);
