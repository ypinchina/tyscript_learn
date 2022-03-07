import Food from '../modules/food'
import ScorePanel from '../modules/scorePanel'
import Snake from '../modules/snake'

class GameControl {
  food: Food
  scorePanel: ScorePanel
  snake: Snake
  removeDirect: string = '' // 监听键盘事件的方向按键从而得到蛇蛇移动方向
  isLive: boolean = true  // 蛇蛇是否存活， 撞墙或者撞到自己身体则游戏结束

  constructor() {
    // 初始化三个实例
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.snake = new Snake()
    this.init()
    // 游戏开始初始化
  }

  init() {
    // 游戏初始化
    // 需要事先绑定键盘按键 ，监听用户按键输入方向指令
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  keydownHandler(event: KeyboardEvent) {
    // 解耦的键盘回调
    // 只有8种键盘结果 4种通用上下左右，4种兼容IE的上下左右

    // 以下判断是解决蛇可以掉头的问题
    // 蛇身长度大于1时才可以禁止掉头
    if (this.snake.bodies[1] && this.removeDirect === 'ArrowUp' && event.key === 'ArrowDown'
      || event.key === 'ArrowUp' && this.removeDirect === 'ArrowDown'
      || event.key === 'ArrowRight' && this.removeDirect === 'ArrowLeft'
      || event.key === 'ArrowLeft' && this.removeDirect === 'ArrowRight') {
      return
    }
    // 兼容IE
    if (this.snake.bodies[1] && this.removeDirect === 'Up' && event.key === 'Down'
      || event.key === 'Up' && this.removeDirect === 'Down'
      || event.key === 'Right' && this.removeDirect === 'Left'
      || event.key === 'Left' && this.removeDirect === 'Right') {
      return
    }
    this.removeDirect = event.key
  }

  run() {
    // 蛇蛇移动的方法
    // 蛇蛇会根据按键方向保存记录移动，每次移动10px。这样才能吃到食物
    // 上移就是top -10 下移就是top +10  左移就是left -10 右移就是left +10

    // 获取蛇蛇当前的X,Y坐标
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.removeDirect) {
      case 'ArrowUp':
      case 'Up':
        Y = Y - 10
        break
      case 'ArrowDown':
      case 'Down':
        Y = Y + 10
        break
      case 'ArrowRight':
      case 'Right':
        X = X + 10
        break
      case 'ArrowLeft':
      case 'Left':
        X = X - 10
        break
    }
    this.isEat(X, Y)
    // 修改了位置之后 检测蛇蛇是否吃到食物
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (error: any) {
      this.isLive = false
      // 关闭游戏
      alert(error.message)
    }
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    // 蛇蛇递归调用走路定时器 蛇存活判断
  }

  isEat(x: number, y: number): void {
    // 判断蛇蛇是否吃到食物的方法
    if (x === this.food.X && this.food.Y === y) {
      // 加分
      // 食物位置重置
      // 蛇蛇身体增加一节
      this.scorePanel.addScore()
      this.food.change()
      this.snake.addBodies()
    }
  }
}

export default GameControl