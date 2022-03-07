class Snake {
  head:HTMLElement  // 蛇头
  bodies: HTMLCollection // 蛇身
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
    this.head.style.left = valX + 'px'
  }
  set Y(valY) {
    this.head.style.top = valY + 'px'
  }

  addBodies() {
    // 蛇增加身体长度的方法
    const div = document.createElement('div')
    this.snake.appendChild(div)
  }
}

export default Snake