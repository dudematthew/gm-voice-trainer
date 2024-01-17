export default interface VoiceModifier {
    id: string;
    name: string;
    description: string;
    icon: string;
    checked: boolean;
    special: string | boolean;
    data: string[] | { name: string; description: string; audio: null }[];
}