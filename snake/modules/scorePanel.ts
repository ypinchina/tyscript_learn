class ScorePanel {
  level: number = 1
  score: number = 0
  levelElem: HTMLElement
  scoreElem: HTMLElement
  maxLevel: number
  constructor(maxLevel: number = 10) {
    this.levelElem = document.getElementById('level')!
    this.scoreElem = document.getElementById('score')!
    this.maxLevel = maxLevel
    // 最大提升等级
  }
  addScore() {
    // 加分方法
    this.scoreElem.innerHTML = ++this.score + ''
    if (this.level < this.maxLevel) {
      this.upLevel()
    }
  }
  upLevel() {
    // 提升等级方法
    this.levelElem.innerHTML = ++this.level + ''
  }
}

export default ScorePanel