// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MATH_BASICS_UNARY = ['±', '1/x', 'sqrt'] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MATH_BASICS_BINARY = ['+', '-', '*', '/'] as const;

export type TMathBasicUnaryOperators = typeof MATH_BASICS_UNARY[number];

export type TMathBasicBinaryOperators = typeof MATH_BASICS_BINARY[number];

export type TMathBasicOperators = TMathBasicUnaryOperators | TMathBasicBinaryOperators;


export const mathUnary = {
  '±': (a) => -a,
  '1/x': (a) => 1 / a,
  'sqrt': (a) => Math.sqrt(a)
} as const satisfies Record<TMathBasicUnaryOperators, (a: number) => number>;

export const mathBinary = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
} as const satisfies Record<TMathBasicBinaryOperators, (a: number, b: number) => number>;

export type TAction<Type extends string, Payload = never> = [Payload] extends [never]
  ? {type: Type}
  : {type: Type, payload: Payload}

export interface IAppState {
  operand1: number | undefined;
  operand2: number | undefined;
  operator: TMathBasicBinaryOperators | undefined;
}
