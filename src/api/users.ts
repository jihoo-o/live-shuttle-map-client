const profiles = [
    {
        userId: '2dsfji5r44356j',
        name: '선화',
        iamgeUrl: '',
        state: 'ready',
        isAuthorized: true,
    },

    {
        userId: '1235',
        name: 'abc',
        state: 'running',
        imageUrl: '',
        isAuthorized: false,
    },
    {
        userId: '1237',
        name: 'def',
        state: 'ready',
        imageUrl: '',
        isAuthorized: true,
    },
    {
        userId: '1238',
        name: 'uuu',
        state: 'running',
        imageUrl: '',
        isAuthorized: false,
    },
    {
        userId: '1239',
        name: 'lili',
        state: 'ready',
        imageUrl: '',
        isAuthorized: true,
    },
    {
        userId: '1240',
        name: 'fa',
        state: 'ready',
        imageUrl: '',
        isAuthorized: false,
    },
    {
        userId: '1241',
        name: 'k',
        state: 'ready',
        imageUrl: '',
        isAuthorized: true,
    },
];

// GET
export const getProfile = (id: string) =>
    profiles.find(({ userId }) => id === userId);

// POST
// edit state
export const postProfile = (profile) => {};

// PUT
export const putReady = (userId) => {};
export const putRunning = (userId) => {};
export const putBlocked = (userId) => {};

// DELETE
