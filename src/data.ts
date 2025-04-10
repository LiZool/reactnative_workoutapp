import { Exercise } from "./types";

export const exercises: Exercise[] = [
    {
        id: 1,
        title: '60 Seconds of Situps',
        duration: 1,
        type: 'audio',
        pro: false,
        audio: require('@assets/exercises/LACKADAISYELECTROSWING.mp3'),
    },
    
    {
        id: 2,
        title: '5 Minutes of Benchpressing',
        duration: 5,
        type: 'audio',
        pro: true,
        audio: require('@assets/exercises/ReTRIBENINE.mp3'),
    },

    {
        id: 3,
        title: '10 mins of Weight lifting',
        duration: 10,
        type: 'audio',
        pro: true,
        audio: require('@assets/exercises/ShinagawaHotel.mp3'),
    },

    {
        id: 4,
        title: '10 mins of squats',
        duration: 10,
        type: 'audio',
        pro: true,
    },

    {
        id: 5,
        title: 'Stress Relief Meditation',
        duration: 8,
        type: 'audio',
        pro: true,
    },

    {
        id: 6,
        title: '1 min plank',
        duration: 1,
        type: 'audio',
        pro: true,
    },
];