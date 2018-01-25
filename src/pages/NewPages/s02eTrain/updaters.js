// might be the games most influential function
// ns means next scene
export const ns = (scene, clip) => state => {
  const oldSceneState = state[scene];
  const allFalse = [];

  Object.keys(oldSceneState).map((key, index) => {
    allFalse[key] = false;
    return allFalse;
  });

  return {
    [scene]: {
      ...allFalse,
      [clip]: true
    }
  };
};
