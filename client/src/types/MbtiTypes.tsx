import { MBTI_TYPES } from "./enums";

export type MbtiCharacterT = {
    character_photo: string,
    character_name: string,
    character_place: string,
    character_type_1: MBTI_TYPES,
    character_type_2: string,
}

export type MbtiCharactersT = {
    character_1: MbtiCharacterT,
    character_2: MbtiCharacterT,
    character_3: MbtiCharacterT,
}