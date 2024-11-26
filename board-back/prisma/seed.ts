import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // ユーザーデータを作成
  const sampleUser1 = await prisma.user.create({
    data: {
      id: '3',
      username: 'john_doe',
      password: 'password123', // 実際にはハッシュ化したパスワードを使用してください
    },
  });

  const sampleUser2 = await prisma.user.create({
    data: {
      id: '2',
      username: 'jane_doe',
      password: 'securepass456', // 実際にはハッシュ化したパスワードを使用してください
    },
  });

  const testUser = await prisma.user.create({
    data: {
      id:'1',
      username: 'test_user',
      password: "test"
    }
  })


  // Postデータを作成
  await prisma.post.createMany({
    data: [
      {
        content: 'Hello, this is John\'s first post!',
        createdById: sampleUser1.id,
      },
      {
        content: 'Hello, this is Jane\'s first post!',
        createdById: sampleUser2.id,
      },
      {
        content: 'Another post by John.',
        createdById: testUser.id,
      },
    ],
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });