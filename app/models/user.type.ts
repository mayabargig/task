
type AddressType<isPrivate extends boolean = true> = {
    id: isPrivate extends true ? undefined : string
    city?: string;
    state?: string;
    street?: string;
}

type PetType<isPrivate extends boolean = true> = {
    id: isPrivate extends true ? undefined : string
    name?: string;
    species?: string;
    breed?: string;
    age?: string;
    gender?: string;
}

type UserType<isPrivate extends boolean = true> = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address?: AddressType<isPrivate>;
    pet?: PetType;
    userName: string
    gender: string
};