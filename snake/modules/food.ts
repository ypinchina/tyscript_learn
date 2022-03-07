// 食物的类
class Food {
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('food')!
    // ! 非空断言，这个dom不可能为空
  }
  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }
  change() {
    // 食物的位置需要随机
    // 食物的范围需要是0 - 294px,其中304 - 10 
    // 10px是食物大小
    // 食物出现的位置只能是10的整数倍，不然蛇吃不掉
    const randomNumLeft = Math.round(Math.random() * 29) * 10
    const randomNumTop = Math.round(Math.random() * 29) * 10
    this.element.style.left = randomNumLeft + 'px'
    this.element.style.top = randomNumTop + 'px'
  }
}

export default Food