
// Combined SVG Sprite Loader - Auto-generated
// Loads all SVG sprites for TerriaJS and plugins
console.log('[svg-sprite] Loading 1 sprite(s):', ['terriajs']);


    // Load sprite for namespace: terriajs
    (function() {
      if (typeof document === 'undefined') return;
      
      // Check if already loaded
      if (document.getElementById('__svg-sprite-terriajs')) return;
      
      // Fetch and inject sprite
      fetch('/build/Terriajs/build/sprite-terriajs-d9b2d4c7.svg')
        .then(response => response.text())
        .then(svgContent => {
          const div = document.createElement('div');
          div.style.display = 'none';
          div.style.position = 'absolute';
          div.style.width = '0';
          div.style.height = '0';
          div.id = '__svg-sprite-terriajs';
          div.setAttribute('aria-hidden', 'true');
          div.innerHTML = svgContent;
          
          if (document.body) {
            document.body.insertBefore(div, document.body.firstChild);
          } else if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
              document.body.insertBefore(div, document.body.firstChild);
            });
          }
        })
        .catch(err => console.warn('[svg-sprite:terriajs] Failed to load:', err));
    })();

console.log('[svg-sprite] All sprites loaded successfully');
