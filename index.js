console.log('particles.js loaded')

const config = `./particles.json`

particlesJS.load('particles-js', config, function() {
  console.log('callback - particles.js config loaded');
});
