class Snake {
    constructor() {
        this.head = document.querySelector('#snake > div');
        this.snake = document.getElementById('snake');
        this.bodies = this.snake.getElementsByTagName('div');
    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(valX) {
        if (valX < 0 || valX > 290) {
            throw new Error('蛇蛇撞墙了！游戏结束');
        }
        if (valX === this.X)
            return; // 如果蛇蛇X或者Y左边没改变，就不需要改变
        this.head.style.left = valX + 'px';
    }
    set Y(valY) {
        if (valY < 0 || valY > 290) {
            throw new Error('蛇蛇撞墙了！游戏结束');
        }
        if (valY === this.Y)
            return; // 如果蛇蛇X或者Y左边没改变，就不需要改变
        this.head.style.top = valY + 'px';
    }
    addBodies() {
        // 蛇增加身体长度的方法
        const div = document.createElement('div');
        this.snake.appendChild(div);
    }
}
export default Snake;
