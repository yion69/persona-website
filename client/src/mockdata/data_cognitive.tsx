import { COGNITIVE_FUNCTIONS } from "../types/enums"

export const cognitiveFunctionsData = {
    introverted_feeling: {
        function_type: COGNITIVE_FUNCTIONS.FI,
        function_name: "Introverted Feeling",
        function_description: "Surveys, manages, and protects personal feelings and values; deeply empathizes with the needy and disadvantaged; used by FPs & TJs"
    },
    extraverted_feeling: {
        function_type: COGNITIVE_FUNCTIONS.FE,
        function_name: "Extraverted Feeling",
        function_description: "Aims to emotionally connect with and work/live well with others; facilitates morale, communication, and consensus; used by FJs and TPs."
    },
    introverted_thinking: {
        function_type: COGNITIVE_FUNCTIONS.TI,
        function_name: "Introverted Thinking",
        function_description: "Seeks logical foundations and consistency in thought, as well as autonomy in methodology and decision-making; used by TPs & FJs"
    },
    extraverted_thinking: {
        function_type: COGNITIVE_FUNCTIONS.TE,
        function_name: "Extraverted Thinking",
        function_description: "Orchestrates external order, efficiency & effectiveness; consults objective data & evidence in decision-making; used by TJs & FPs."
    },
    introverted_intuition: {
        function_type: COGNITIVE_FUNCTIONS.NI,
        function_name: "Introverted Intuition",
        function_description: "Generates convergent insights and impressions; discerns deep laws, causes, and patterns; used by NJs & SPs."
    },
    extraverted_intuition: {
        function_type: COGNITIVE_FUNCTIONS.NE,
        function_name: "Extraverted Intuition",
        function_description: "Broadly explores & synthesizes ideas, patterns, connections & possibilities; brainstorming; 'scatterbrain'; NPs & SJs."
    },
    introverted_sensing: {
        function_type: COGNITIVE_FUNCTIONS.SI,
        function_name: "Introverted Sensing",
        function_description: "Preserves & references the past to inform beliefs, decisions and behavior; perceives inner bodily sensations; used by SJs & NPs."
    },
    extraverted_sensing: {
        function_type: COGNITIVE_FUNCTIONS.SE,
        function_name: "Extraverted Sensing",
        function_description: "Lives in the moment; relishes new experiences, tasks, and challenges; attunes to external details; used by SPs & NJs."
    }
}

export const cognitiveExplanationData = {
    intj: {
        dominant: "The dominant cognitive function for the INTJ type is Introverted Intuition, meaning INTJ personalities can process information inwardly through patterns and impressions. INTJs tend to see the big picture and spend a lot of time thinking.",
        auxiliary: "Extroverted Thinking is the auxiliary function of INTJ personality types, meaning INTJs approach the world with order and logic.",
        tertiary: "The tertiary cognitive function for INTJs is Introverted Feeling, meaning INTJs sometimes value others’ emotions when making decisions. INTJs’ introversion can challenge relationships, whether friendships or romantic partnerships. INTJs tend to be uninterested in formalities and rituals and want to plan and control the relationship. However, once they click with someone, they tend to be loyal and trusting and will devote work to the relationship.",
        inferior: "INTJs’ tertiary function, the weakest cognitive function, is Extroverted Sensing. This function allows people to process information through their senses and be in the present moment. Often, INTJs experience dissociation from their bodies and surroundings."
    }
}

export const function_intj = {
    
    function_text: "INTJs, also known as the Masterminds, are marked by their leading cognitive functions: dominant Ni (Introverted Intuition) and auxiliary Te (Extroverted Thinking). This blend creates a personality that is both deeply analytical and exceptionally efficient in implementing ideas. INTJs are known for their ability to identify patterns and strategic solutions, often thinking several steps ahead in any situation.",
    
    function_data: {
        
        function_data_1: {
            dominant: cognitiveFunctionsData.introverted_intuition,
            auxiliary: cognitiveFunctionsData.extraverted_thinking,
            tertiary: cognitiveFunctionsData.introverted_feeling,
            inferior: cognitiveFunctionsData.extraverted_sensing
        },

        function_data_2: {
            dominant: cognitiveExplanationData.intj.dominant,
            auxiliary: cognitiveExplanationData.intj.auxiliary,
            tertiary: cognitiveExplanationData.intj.tertiary,
            inferior: cognitiveExplanationData.intj.inferior
        }

    }
    
}