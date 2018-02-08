export const toldHer = state => ({
  ...state,
  s6: {
    c5: false,
    c6: true
  },
  bToldHer: true
});

export const fine = state => ({
  ...state,
  s6: {
    c5: false,
    c6: true
  },
  bFine: true
});

export const giveKeys = state => ({
  ...state,
  s6: {
    c15: false,
    c16: true
  },
  taskTaken: false,
  roleFulfilled: true
});

export const takeTask = state => ({
  ...state,
  s6: {
    c15: false,
    c16: true
  },
  taskTaken: true,
  roleFulfilled: false
});
