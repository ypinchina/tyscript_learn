class Snake {
  head: HTMLElement  // 蛇头
  bodies: HTMLCollectionOf<HTMLElement> // 蛇身
  snake: HTMLElement  // 蛇的容器
  constructor() {
    this.head = document.querySelector('#snake > div')!
    this.snake = document.getElementById('snake')!
    this.bodies = this.snake.getElementsByTagName('div')
  }

  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  set X(valX) {
    if (valX < 0 || valX > 290) {
      throw new Error('蛇蛇撞墙了！游戏结束')
    }
    if (valX === this.X) return // 如果蛇蛇X或者Y左边没改变，就不需要改变
    this.moveBodier()
    this.head.style.left = valX + 'px'
    this.conflict()
    // 增加蛇头吃到自己身体的检测
  }
  set Y(valY) {
    if (valY < 0 || valY > 290) {
      throw new Error('蛇蛇撞墙了！游戏结束')
    }
    if (valY === this.Y) return // 如果蛇蛇X或者Y左边没改变，就不需要改变
    this.moveBodier()
    this.head.style.top = valY + 'px'
    this.conflict()
    // 增加蛇头吃到自己身体的检测
  }

  addBodies() {
    // 蛇增加身体长度的方法
    const div = document.createElement('div')
    this.snake.appendChild(div)
  }

  moveBodier() {
    // 移动蛇蛇身体的方法
    const bodies = this.bodies
    for (let i = bodies.length - 1; i > 0; i--) {
      let X = bodies[i - 1].offsetLeft
      let Y = bodies[i - 1].offsetTop
      bodies[i].style.left = X + 'px'
      bodies[i].style.top = Y + 'px'
    }
  }

  conflict() {
    // 蛇头撞到蛇蛇身体
    const X = this.X
    const Y = this.Y
    for (let i = 1; i < this.bodies.length; i++) {
      if (X === this.bodies[i].offsetLeft && Y === this.bodies[i].offsetTop) {
        throw new Error('蛇蛇吃到自己了！GAME OVER')
      }
    }
  }
}

export default Snake