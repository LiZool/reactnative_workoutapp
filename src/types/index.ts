export type Exercise = {
    id: number;
    title: string;
    duration: number;
    type: 'audio' | 'video';
    pro: boolean;
    audio?: any; // or `audio: ReturnType<typeof require>` if you want to be more specific
}