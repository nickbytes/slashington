export const showDigitalBoard = state => ({
  initialCouncil: false,
  boardWhizzing: true
});

export const hideWhizzingBoard = state => ({
  boardWhizzing: false,
  weirdText: true
});

export const hideWeird = state => ({
  weirdText: false,
  greetingShowing: true
});

export const hideGreeting = state => ({
  greetingShowing: false,
  weAreCouncil: true
});

export const showReactions = state => ({
  weAreCouncil: false,
  reactionOptions: true
});
