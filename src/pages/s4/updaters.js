export const angryReaction = state => ({
  ...state,
  s4: {
    c7: false,
    c8: true,
    reactedAngry: true
  }
});

export const nodReaction = state => ({
  ...state,
  s4: {
    c7: false,
    c8: true,
    reactedNod: true
  }
});
