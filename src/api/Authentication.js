const USER = 'user';

const Authentication = {
    login: (user) => localStorage.setItem(USER, JSON.stringify(user)),
    logout: () => localStorage.removeItem(USER),
    user: () => localStorage.getItem(USER) ?
        JSON.parse(localStorage.getItem(USER)) : localStorage.getItem(USER)
}

export default Authentication;