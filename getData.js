class GetData {
    _getData = null;

    constructor(className) {
        this._getData = GetData.getByClassName(className);
        // this._mainContainer = BurgerOpen.getByClassName(className);
        // this.init();
    };

    static getByClassName(className) {
        return document.querySelector(`.${className}`);
    };

}