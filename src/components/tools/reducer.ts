import {
  mathBinary,
  mathUnary,
  type IAppState,
  type TAction,
  type TMathBasicBinaryOperators,
  type TMathBasicUnaryOperators,
} from "../../types/types";
import { initialState } from "../appProvider/appContext";

export type TCalcActions =
  | TAction<"NUM_CLICKED", number | '.'>
  | TAction<"UNARY_OPERATOR_CLICKED", TMathBasicUnaryOperators>
  | TAction<"BINARY_OPERATOR_CLICKED", TMathBasicBinaryOperators>
  | TAction<"CALC">
  | TAction<"RESET">;

export function reducer(state: IAppState, action: TCalcActions): IAppState {
  switch (action.type) {
    case "CALC": {
      return {
        operand1: mathBinary[state.operator!](state.operand1!, state.operand2!),
        operand2: undefined,
        operator: undefined,
        inputBuffer: ''
      };
    }

    case "RESET": {
      return {
        ...initialState,
      };
    }

    case "NUM_CLICKED": {
      const bufferValue = state.inputBuffer + action.payload;
      if (!state.operator) {
        return {
          ...state,
          operand1: parseFloat(bufferValue),
          inputBuffer: bufferValue
        }
      } else {
        return {
          ...state,
          operand2: parseFloat(bufferValue),
          inputBuffer: bufferValue
        }
      }
    }

    case "BINARY_OPERATOR_CLICKED": {
      if (state.operand1 !== undefined && state.operand2 !== undefined) {
        return {
          operand1: mathBinary[state.operator!](state.operand1, state.operand2),
          operand2: undefined,
          operator: action.payload,
          inputBuffer: '',
        };
      } else
        return {
          ...state,
          operator: action.payload,
          inputBuffer: ''
        };
    }

    case "UNARY_OPERATOR_CLICKED": {
      return state.operator === undefined
        ? {
            ...state,
            operand1: mathUnary[action.payload](state.operand1!),
          }
        : {
            ...state,
            operand2: mathUnary[action.payload](state.operand2!),
          };
    }

    default:
      return state;
  }
}
