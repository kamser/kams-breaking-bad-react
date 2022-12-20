export interface Character {
    name: string;
    occupation: string;
    status: string;
    birthday: string;
    portrayer: string;
}

export interface CharacterItemProps {
    character: Character
}