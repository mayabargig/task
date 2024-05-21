import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const removeUndefinedValuesFromObject = <T extends object>(object: T): T =>
    Object.entries(object).reduce((acc, [key, value]) => {
        if (value !== undefined) {
            acc[key] = value;
        }
        return acc;
    }, {}) as any

export const UpdateUser = async (updatedFormData: UserType) => {
    console.log('updatedFormData', updatedFormData)
    const { id, email, firstName, lastName, phoneNumber, address, pet, userName, gender } = updatedFormData;
    const updatedAddress = removeUndefinedValuesFromObject(
        address || {}
    ) as any satisfies UserType['address']
    delete updatedAddress['id']
    const updatedPet = removeUndefinedValuesFromObject(
        pet || {}
    ) as any satisfies UserType['pet']
    delete updatedPet['id']
    const needToUpdatePet: boolean = !!Object.keys(updatedPet || {})?.length
    const needToUpdateAddress: boolean = !!Object.keys(updatedAddress || {})?.length
    const updateData: Parameters<typeof prisma.user.update>[0] = {
        where: { id: id },
        data: removeUndefinedValuesFromObject({
            email,
            firstName,
            lastName,
            phoneNumber,
            userName,
            gender,
            address: needToUpdateAddress ? { update: updatedAddress } : undefined,
            pet: needToUpdatePet ? { update: updatedPet } : undefined,
        }),
        include: {
            'address': needToUpdateAddress,
            'pet': needToUpdatePet
        }
    }
    console.log('updateData', updateData)
    return await prisma.user.update(updateData);
};
