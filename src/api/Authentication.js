const USER = 'user';

const Authentication = {
    login: (user) => localStorage.setItem(USER, user),
    logout: () => localStorage.removeItem(USER),
    isLoggedIn: () => localStorage.getItem(USER)
}

export default Authentication;