const USER = 'user';

const Authentication = {
    login: (user) => localStorage.setItem(USER, user),
    logout: () => localStorage.removeItem(USER),
    user: () => localStorage.getItem(USER)
}

export default Authentication;