import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "../counter.actions";

export const intialState = 0;

export const counterReducer = createReducer(
    intialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => 0),
)