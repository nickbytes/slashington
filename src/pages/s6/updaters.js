export const toldHer = state => ({
  ...state,
  s6: {
    c5: false,
    c6: true
  },
  bToldHer: true,
  bFine: false
});

export const fine = state => ({
  ...state,
  s6: {
    c5: false,
    c6: true
  },
  bToldHer: false,
  bFine: true
});

export const giveKeys = state => ({
  ...state,
  s6: {
    c22: false,
    c23: true
  },
  taskTaken: false,
  roleFulfilled: true
});

export const takeTask = state => ({
  ...state,
  s6: {
    c22: false,
    c23: true
  },
  taskTaken: true,
  roleFulfilled: false
});
