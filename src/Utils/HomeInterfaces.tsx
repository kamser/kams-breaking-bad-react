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

export interface Death{
    cause: string;
    responsible: string;
    lastWords: string;
}

export interface DeathProps{
    death: Death;
}