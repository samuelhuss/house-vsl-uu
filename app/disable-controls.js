// Este script é executado no lado do cliente para ocultar os controles do Panda Video em dispositivos móveis
export function disablePandaControls() {
  // Verificar se é um dispositivo móvel
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  if (isMobile) {
    // Tentar várias abordagens para ocultar os controles

    // 1. Tentar enviar mensagem para o iframe
    const iframe = document.getElementById("panda-4e6212d0-f2c0-45a6-80d7-b532fc5d1f09")
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage("hideControls", "*")
    }

    // 2. Adicionar CSS para ocultar os controles
    const style = document.createElement("style")
    style.textContent = `
      .plyr__controls, 
      .plyr__control, 
      .plyr__progress, 
      .plyr__menu, 
      .plyr__volume, 
      .plyr__time, 
      .plyr__tooltip,
      .panda-controls,
      .panda-player-controls,
      .panda-player-ui {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
    `
    document.head.appendChild(style)

    // 3. Desativar eventos de toque no iframe, exceto para o botão
    if (iframe) {
      iframe.style.pointerEvents = "none"
    }
  }
}
