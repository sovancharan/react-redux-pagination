export const pageOne = (data = []) => {
    console.log('Actiondata', data);
    console.log('pageOne');
    return {
        type: 'PAGEONE',
        payload: {
            data: data,
        },
    };
};

export const pageTwo = (data = []) => {
    return {
        type: 'PAGETWO',
        payload: {
            data: data,
        },
    };
};
export const pageThree = (data) => {
    return {
        type: 'PAGETHREE',
        payload: {
            data: data,
        },
    };
};
export const pageFour = (data) => {
    return {
        type: 'PAGEFOUR',
        payload: {
            data: data,
        },
    };
};
export const pageFIVE = (data) => {
    return {
        type: 'PAGEFIVE',
        payload: {
            data: data,
        },
    };
};
export const pageSix = (data) => {
    return {
        type: 'PAGESIX',
        payload: {
            data: data,
        },
    };
};
export const pageSaven = (data) => {
    return {
        type: 'PAGESAVEN',
        payload: {
            data: data,
        },
    };
};
export const pageEight = (data) => {
    return {
        type: 'PAGEIGHT',
        payload: {
            data: data,
        },
    };
};
export const pageNine = (data) => {
    return {
        type: 'PAGENINE',
        payload: {
            data: data,
        },
    };
};
export const pageTen = (data) => {
    return {
        type: 'PAGETEN',
        payload: {
            data: data,
        },
    };
};
