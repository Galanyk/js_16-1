class ListsUsers {
    static API = "  https://jsonplaceholder.typicode.com";
    static CLASSES = {
        BUTTON: 'button',
        CONTAINER_USER: 'container-user',
        USER_NAME: 'username',
        USER_POSTS: 'user-posts',
        USER_TITLE: 'user-title',

        // CONTAINEROll: 'cont',
    };

    static ENVIRONMENT = {
        POSTS: {
            getPosts: "/posts",
            updatePosts: "/posts",
        },
        USERS: {
            getUser: "users/",
        },
    };

    _mainContainer = null;
    _userName = null;
    _userPosts = null;
    // _getData = null;
    constructor(className) {
        this._mainContainer = ListsUsers.getByClassName(className);
        // this._mainContainer = BurgerOpen.getByClassName(className);
        // this._getData = GetData.getByClassName(className);
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

    createElements(listUsers) {
        listUsers.forEach(user => {
            this.createElement(user.name, this._mainContainer, 'div', ListsUsers.CLASSES.USER_NAME)
            this.createElementButton(this._mainContainer, 'button', ListsUsers.CLASSES.BUTTON, user.id)
                // console.log(user.id, user.name);
        });
    }
    showPosts(postsUsers) {
        postsUsers.forEach(posts => {
            //console.log(posts.userId)
            // this.createElement(posts.title, this._mainContainer, 'div', ListsUsers.CLASSES.USER_POSTS)
        });
    }

    onButtonClick = (userId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId.target.id}`)
            .then((response) => response.json())
            .then((data) => data.forEach(element => {
                // console.log('body\n', element.body, '\n')
                this.createElement(element.title, getData._getData, 'div', ListsUsers.CLASSES.USER_POSTS)
                this.createElement(element.title, getData._getData, 'div', ListsUsers.CLASSES.USER_TITLE)

                // console.log('title\n', element.title, '\n');
            }))
            //.then((body) => console.log(body))
    }

    downloadUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((listsUsers) => this.createElements(listsUsers))
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((postsUsers) => this.showPosts(postsUsers))

    }

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

    setListener(element, event, callBack) {
        element.addEventListener(event, callBack);
    };

}