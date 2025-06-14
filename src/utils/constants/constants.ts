export const PAGE_STATES = {
  NETWORK_IDLE: 'networkidle',
  DOM_CONTENT_LOADED: 'domcontentloaded',
} as const;

export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
} as const;

export const ELEMENT_STATES = {
  VISIBLE: 'visible',
  ATTACHED: 'attached', 
  HIDDEN: 'hidden',
  DETACHED: 'detached',
} as const;

export type ElementWaitStates = typeof ELEMENT_STATES[keyof typeof ELEMENT_STATES]; 
