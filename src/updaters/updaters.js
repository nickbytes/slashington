export const turnOnComputer = state => ({
  workspaceVisible: true
});

export const receiveBadge = state => ({
  newBadgeReceived: true
});

export const reactAngrily = state => ({ reactAngrily: true });
export const easyNod = state => ({ easyNod: true });
export const coffeeClicked = state => ({
  coffeeClicked: true,
  workspaceVisible: false
});

export const showWaves = state => ({
  wavesVisible: true
});

export const showPhone = state => ({
  phoneVisible: true
});

export const hidePhone = state => ({
  phoneVisible: false,
  voicemailDone: true
});

export const restartWork = state => ({
  restartingWork: true
});

export const scottArrives = state => ({
  scottAtDesk: true,
  restartingWork: false
});
