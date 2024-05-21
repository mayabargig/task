import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const DeleteUser = async (id: string | undefined) => {
  try {

    console.log(id);

    await prisma.$transaction([
      prisma.pet.deleteMany({
        where: {
          userId: id,
        },
      }),
      prisma.address.deleteMany({
        where: {
          userId: id,
        },
      }),
      prisma.user.delete({
        where: {
          id: id,
        },
      }),
    ]);

    console.log('user deleted successfully');
  } catch (error) {
    console.error('Error deleting posts and user:', error);
  }
};
