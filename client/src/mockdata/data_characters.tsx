import { MbtiCharactersT, MbtiCharacterT } from "../types/MbtiTypes";
import lelouchImg from "../assets/characters/lelouch.png"
import getoImg from "../assets/characters/geto.jfif"
import walterImg from "../assets/characters/walter.jfif"
import { MBTI_TYPES } from "../types/enums";

const intj_lelouch:MbtiCharacterT = {
    character_photo: lelouchImg,
    character_name: "Lelouch vi Britannia",
    character_place: "Code Geass",
    character_type_1: MBTI_TYPES.INTJ,
    character_type_2: "1w9"
}

const intj_geto:MbtiCharacterT = {
    character_photo: getoImg,
    character_name: "Suguru Getō",
    character_place: "Jujutsu Kaisen",
    character_type_1: MBTI_TYPES.INTJ,

    character_type_2: "1w2"
}
const intj_walter:MbtiCharacterT = {
    character_photo: walterImg,
    character_name: "Walter White",
    character_place: "Breaking Bad",
    character_type_1: MBTI_TYPES.INTJ,
    character_type_2: "5w6"
}

export const intj_characters:MbtiCharactersT = {
    character_1: intj_lelouch,
    character_2: intj_geto,
    character_3: intj_walter
}