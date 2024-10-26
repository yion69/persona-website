import { COGNITIVE_FUNCTIONS } from "./enums"

export type CognitiveLevels<T> = {
    dominant: T,
    auxiliary: T,
    tertiary: T,
    inferior: T
}

export type cognitiveFunctionT = {
    function_type: COGNITIVE_FUNCTIONS
    function_name: string,
    function_description: string,
}

export type cognitiveStackT = CognitiveLevels<cognitiveFunctionT>;
export type cognitiveStackExplanationT = CognitiveLevels<string>;

export type MbtiCognitiveT = {
    function_data_1: cognitiveStackT,
    function_data_2: cognitiveStackExplanationT
}