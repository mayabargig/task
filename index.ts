import { PrismaClient  } from '@prisma/client'
import { LoaderFunction } from '@remix-run/node';

const prisma = new PrismaClient()

export const loader: LoaderFunction = async ({ request }) => {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany()

  console.dir(users)

  return ([ users ]);
};

async function main() {
      const users = await prisma.user.findMany({
        include: {
            address: true,
            pet:true,
        },
      })
      console.dir(users, { depth: Infinity })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })