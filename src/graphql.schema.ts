
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export class CreateArtistData {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class UpdateArtistData {
    id?: Nullable<string>;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class CreateUserData {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export abstract class IQuery {
    abstract cats(): Nullable<Nullable<Cat>[]> | Promise<Nullable<Nullable<Cat>[]>>;

    abstract cat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract artists(): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;

    abstract artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;

    abstract tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;

    abstract track(id: string): Nullable<Track> | Promise<Nullable<Track>>;

    abstract jwt(email: string, password?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: Nullable<CreateCatInput>): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract createArtist(createArtistData?: Nullable<CreateArtistData>): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract deleteArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract updateArtist(updateArtistData?: Nullable<UpdateArtistData>): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract createGenre(name?: Nullable<string>, description?: Nullable<string>, country?: Nullable<string>, year?: Nullable<number>): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract registerUser(createUserData?: Nullable<CreateUserData>): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class ISubscription {
    abstract catCreated(): Nullable<Cat> | Promise<Nullable<Cat>>;
}

export class Owner {
    id: number;
    name: string;
    age?: Nullable<number>;
    cats?: Nullable<Cat[]>;
}

export class Cat {
    id?: Nullable<number>;
    name?: Nullable<string>;
    age?: Nullable<number>;
    owner?: Nullable<Owner>;
}

export class Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<string>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
    subGenres?: Nullable<Nullable<Genre>[]>;
}

export class Track {
    id: string;
    title: string;
    bands?: Nullable<Nullable<Band>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
    jwt?: Nullable<string>;
}

type Nullable<T> = T | null;
