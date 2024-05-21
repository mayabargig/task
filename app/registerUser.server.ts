import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Address {
  city: string;
  state: string;
  street: string;
}

interface Pet {
  name: string;
  species: string;
  breed: string;
  age: string;
  gender: string;
}

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userName: string;
  gender: string;
  password:string;
  address: Address;
  pet: Pet;
}

export const RegisterUser = async (formData: FormData) => {
  await prisma.user.create({
    data: {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      gender: formData.gender,
      userName: formData.userName,
      password:formData.password,
      role:"client",
      address: {
        create: {
          city: formData.address.city,
          state: "israel",
          street: formData.address.street,
        },
      },
      pet: {
        create: {
          name: formData.pet.name,
          species: formData.pet.species,
          breed: formData.pet.breed,
          age: formData.pet.age,
          gender: formData.pet.gender,
        },
      },
    },
  });

  return null;
};
