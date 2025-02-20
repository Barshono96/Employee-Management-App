import { RootState } from './store';

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('employeeState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: Partial<RootState>) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('employeeState', serializedState);
  } catch {
    // Ignore write errors
  }
};
