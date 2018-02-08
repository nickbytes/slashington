export const toldHer = state => ({
  ...state,
  s6: {
    bToldHer: true,
    c5: false,
    c6: true
  }
});

export const fine = state => ({
  ...state,
  s6: {
    bFine: true,
    c5: false,
    c6: true
  }
});

export const giveKeys = state => ({
  ...state,
  s6: {
    taskTaken: false,
    roleFulfilled: true,
    c15: false,
    c16: true
  }
});

export const takeTask = state => ({
  ...state,
  s6: {
    taskTaken: true,
    roleFulfilled: false,
    c15: false,
    c16: true
  }
});
