import { createInitialState, feed, play, sleep, updateHappiness } from './petLogic';

describe('petLogic', () => {
  it('should create initial state correctly', () => {
    const state = createInitialState();
    expect(state.energy).toBe(0);
    expect(state.isHappy).toBe(false);
  });

  it('should increase energy by 30 when fed', () => {
    const state = createInitialState();
    const newState = feed(state);
    expect(newState.energy).toBe(30);
    expect(newState.isHappy).toBe(true);
  });

  it('should decrease energy by 20 when played', () => {
    const state = { ...createInitialState(), energy: 50 };
    const newState = play(state);
    expect(newState.energy).toBe(30);
    expect(newState.isHappy).toBe(true);
  });

  it('should not let energy drop below 0', () => {
    const state = createInitialState();
    const newState = play(state);
    expect(newState.energy).toBe(0);
    expect(newState.isHappy).toBe(false);
  });

  it('should increase energy by 50 when sleeping', () => {
    const state = createInitialState();
    const newState = sleep(state);
    expect(newState.energy).toBe(50);
    expect(newState.isHappy).toBe(true);
  });

  it('should not let energy exceed 100', () => {
    const state = { ...createInitialState(), energy: 80 };
    const newState = feed(state);
    expect(newState.energy).toBe(100);
  });

  it('should update happiness correctly', () => {
    expect(updateHappiness(29)).toBe(false);
    expect(updateHappiness(30)).toBe(true);
    expect(updateHappiness(100)).toBe(true);
  });
});
