// Panel Interactivo con animaciones suaves de rotación
document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.animacion-panel');
    
    panels.forEach(panel => {
        panel.addEventListener('click', () => setPanelActive(panel));
        panel.addEventListener('keydown', (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setPanelActive(panel);
            }
        });
    });

    function setPanelActive(targetPanel) {
        const currentActive = document.querySelector('.animacion-panel.active');
        
        // Si ya está activo, no hacer nada
        if (targetPanel === currentActive) return;
        
        // Limpiar todas las clases de animación
        panels.forEach(panel => {
            const title = panel.querySelector('.panel-title');
            title.classList.remove('animate-to-horizontal', 'animate-to-vertical');
            title.style.animation = 'none';
        });
        
        // Forzar reflow
        void targetPanel.offsetWidth;
        
        // Cambiar estados activos/inactivos
        panels.forEach(panel => {
            if (panel === targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
        
        // Aplicar animaciones suaves con delay para mejor sincronización
        setTimeout(() => {
            panels.forEach(panel => {
                const title = panel.querySelector('.panel-title');
                
                if (panel === targetPanel) {
                    // Panel que se activa: animar de vertical a horizontal
                    title.classList.add('animate-to-horizontal');
                } else {
                    // Paneles que se desactivan: animar de horizontal a vertical
                    title.classList.add('animate-to-vertical');
                }
            });
        }, 50);
    }

    // Estado inicial
    const initialActive = document.querySelector('.animacion-panel.active') || document.querySelector('.animacion-panel');
    if (initialActive) {
        panels.forEach(panel => {
            if (panel === initialActive) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
    
    // Función global para debugging
    window.setPanelActive = setPanelActive;
});

document.querySelectorAll('.animacion-panel').forEach(panel => {
  panel.addEventListener('click', function() {
    document.querySelectorAll('.panel-title').forEach(title => {
      title.classList.remove('horizontal', 'vertical');
      title.classList.add('vertical');
    });
    this.querySelector('.panel-title').classList.remove('vertical');
    this.querySelector('.panel-title').classList.add('horizontal');
  });
});