export interface PetState {
  petName: string;
  energy: number;
  level: number;
  isHappy: boolean;
  actionLog: string;
}

let petName = '小鸡仔';
let energy = 0
let level = 1;
let isHappy = false;
let actionLog = '开始咯！'

export const createInitialState = (): PetState => ({
  petName,
  energy,
  level,
  isHappy,
  actionLog,
});


// export const createInitialState = (): PetState => ({
//   petName: "小鸡仔",
//   energy: 0,
//   level: 1,
//   isHappy: false,
//   actionLog: "// 游戏刚开始，快来和宠物互动吧！"
// });

export const updateHappiness = (energy: number): boolean => {
  if (energy >= 30) {
    return true;
  } else {
    return false;
  }
};

export const feed = (state: PetState): PetState => {
  let energy = state.energy + 30;
  if (energy > 100) energy = 100;
  return {
    ...state,
    energy,
    isHappy: updateHappiness(energy),
    actionLog: "// 执行了喂食操作\n// energy = energy + 30;"
  };
};

export const play = (state: PetState): PetState => {
  let energy = state.energy - 20;
  if (energy < 0) energy = 0;
  return {
    ...state,
    energy,
    isHappy: updateHappiness(energy),
    actionLog: "// 执行了玩耍操作\n// energy = energy - 20;"
  };
};

export const sleep = (state: PetState): PetState => {
  let energy = state.energy + 50;
  if (energy > 100) energy = 100;
  return {
    ...state,
    energy,
    isHappy: updateHappiness(energy),
    actionLog: "// 执行了睡觉操作\n// energy = energy + 50;"
  };
};
