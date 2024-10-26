import intjImage from '../assets/mbti/intj.png';
import intpImage from '../assets/mbti/intp.png';
import entjImage from '../assets/mbti/entj.png';
import entpImage from '../assets/mbti/entp.png';

import infjImage from '../assets/mbti/infj.png';
import infpImage from '../assets/mbti/infp.png';
import enfjImage from '../assets/mbti/enfj.png';
import enfpImage from '../assets/mbti/enfp.png';

import istjImage from '../assets/mbti/istj.png';
import isfjImage from '../assets/mbti/isfj.png';
import estjImage from '../assets/mbti/estj.png';
import esfjImage from '../assets/mbti/esfj.png';

import istpImage from '../assets/mbti/istp.png';
import isfpImage from '../assets/mbti/isfp.png';
import estpImage from '../assets/mbti/estp.png';
import esfpImage from '../assets/mbti/esfp.png';

const Analyst = {
    intj: {
        mbti_image: intjImage,
        mbti_name: "Architect",
        mbti_type: "INTJ",
        mbti_description: "Imaginative and strategic thinkers, with a plan for everything"
    },
    intp: {
        mbti_image: intpImage,
        mbti_name: "Logician",
        mbti_type: "INTP",
        mbti_description: "Innovative inventors with an unquenchable thirst for knowledge."
    },
    entj: {
        mbti_image: entjImage,
        mbti_name: "Commander",
        mbti_type: "ENTJ",
        mbti_description: "Bold, imaginative and strong-willed leaders, always finding a way – or making one."
    },
    entp: {
        mbti_image: entpImage,
        mbti_name: "Debater",
        mbti_type: "ENTP",
        mbti_description: "Smart and curious thinkers who cannot resist an intellectual challenge."
    }
}

const Diplomats = {
    infj: {
        mbti_image: infjImage,
        mbti_name: "Advocate",
        mbti_type: "INFJ",
        mbti_description: "Quiet and mystical, yet very inspiring and tireless idealists."
    },
    infp: {
        mbti_image: infpImage,
        mbti_name: "Mediator",
        mbti_type: "INFP",
        mbti_description: "Poetic, kind and altruistic people, always eager to help a good cause."
    },
    enfj: {
        mbti_image: enfjImage,
        mbti_name: "Protagonist",
        mbti_type: "ENFJ",
        mbti_description: "Charismatic and inspiring leaders, able to mesmerize their listeners."
    },
    enfp: {
        mbti_image: enfpImage,
        mbti_name: "Campaigner",
        mbti_type: "ENFP",
        mbti_description: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile."
    }
}

const Sentinels = {
    istj: {
        mbti_image: istjImage,
        mbti_name: "Logistician",
        mbti_type: "ISTJ",
        mbti_description: "Practical and fact-minded individuals, whose reliability cannot be doubted."
    },
    isfj: {
        mbti_image: isfjImage,
        mbti_name: "Defender",
        mbti_type: "ISFJ",
        mbti_description: "Very dedicated and warm individuals who enjoy helping others."
    },
    estj: {
        mbti_image: estjImage,
        mbti_name: "Executive",
        mbti_type: "ESTJ",
        mbti_description: "Excellent administrators, they enjoy being in control of people and situations."
    },
    esfj: {
        mbti_image: esfjImage,
        mbti_name: "Consul",
        mbti_type: "ESFJ",
        mbti_description: "Very caring, social, and popular people, always eager to help."
    }
};

const Explorers = {
    istp: {
        mbti_image: istpImage,
        mbti_name: "Virtuoso",
        mbti_type: "ISTP",
        mbti_description: "Bold and practical experimenters, masters of all kinds of tools."
    },
    isfp: {
        mbti_image: isfpImage,
        mbti_name: "Adventurer",
        mbti_type: "ISFP",
        mbti_description: "Flexible and charming artists, always ready to explore and experience something new."
    },
    estp: {
        mbti_image: estpImage,
        mbti_name: "Entrepreneur",
        mbti_type: "ESTP",
        mbti_description: "Smart, energetic, and very perceptive people who truly enjoy living on the edge."
    },
    esfp: {
        mbti_image: esfpImage,
        mbti_name: "Entertainer",
        mbti_type: "ESFP",
        mbti_description: "Spontaneous, energetic, and enthusiastic people who love to have a good time."
    }
};

export const mbti_data = {
    Analyst: Analyst,
    Diplomats: Diplomats,
    Sentinals: Sentinels,
    Explorers: Explorers,
}