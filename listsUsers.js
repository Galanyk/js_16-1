class ListsUsers {
    static API = "  https://jsonplaceholder.typicode.com";
    static CLASSES = {
        BUTTON: 'button',
        USER_NAME: 'username',
        USER_POSTS: 'user-posts',
        USER_TITLE: 'user-title',
    };

    static ENVIRONMENT = {
        USERS: {
            getUser: "/users",
        },
    };
    _mainContainer = null;

    constructor(className) {
        this._mainContainer = ListsUsers.getByClassName(className);
        this.init();
    };

    init() {
        this.downloadUsers();
        this.setListener(this._mainContainer, 'click', this.onButtonClick);
    };

    static getByClassName(className) {
        return document.querySelector(`.${className}`);
    };

    getData(data, key) {
        return data.data[key];
    };

    setListener(element, event, callBack) {
        element.addEventListener(event, callBack);
    };

    createElements(listUsers) {
        listUsers.forEach(user => {
            this.createElement(user.name, this._mainContainer, 'div', ListsUsers.CLASSES.USER_NAME);
            this.createElementButton(this._mainContainer, 'button', ListsUsers.CLASSES.BUTTON, user.id);
        });
    };

    onButtonClick = (userId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId.target.id}`)
            .then((response) => response.json())
            .then((data) => {
                if (getData.getContainer().children.length !== 0) {
                    getData.deleteElements();
                }
                return data;
            })
            .then((data) =>
                data.forEach(element => {;
                    this.createElement(`${element.title}`, getData.getContainer(), 'div', ListsUsers.CLASSES.USER_TITLE);
                    this.createElement(`${element.body}`, getData.getContainer(), 'div', ListsUsers.CLASSES.USER_POSTS);
                }));
    };

    downloadUsers = () => {
        fetch(ListsUsers.API + ListsUsers.ENVIRONMENT.USERS.getUser)
            .then((response) => response.json())
            .then((listsUsers) => this.createElements(listsUsers))
    };

    createElement(data, containerEl, tag, classList) {
        const element = document.createElement(tag);
        element.textContent = data;
        element.classList.add(classList);
        containerEl.append(element);
    };

    createElementButton(containerEl, tag, classList, Id) {
        const element = document.createElement(tag);
        element.textContent = 'Show Posts';
        element.classList.add(classList);
        element.id = Id;
        containerEl.append(element);
    };
}