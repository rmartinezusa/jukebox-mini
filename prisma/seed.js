const prisma = require("../prisma");
const { faker } = require("@faker-js/faker");

async function seed(numUsers = 3, numPlaylists = 5) {
    const userData = Array.from({ length: numUsers }, () => ({
        username: faker.internet.userName(),
        playlists: {
            create: Array.from({ length: numPlaylists }, () => ({

                name: faker.music.songName(),
                description: faker.music.genre(),
            })),
        }
    }));

    await Promise.all(
        userData.map((data) => prisma.user.create({ data }))
    );
};

seed();