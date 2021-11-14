class GetData {
    _container = null;

    constructor(className) {
        this._container = GetData.getByClassName(className);
    };

    static getByClassName(className) {
        return document.querySelector(`.${className}`);
    };

    getContainer() {
        return this._container
    };

    deleteElements() {
        this._container.innerHTML = "";
    };
}