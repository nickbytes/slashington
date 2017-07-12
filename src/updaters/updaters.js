export const showPlayerNameField = state => ({ playerNameVisible: true });

export const addPlayerName = state => ({
  playerNameSaved: state.playerNameInput
});

export const setNewPlayerName = value => state => ({ playerNameInput: value });
