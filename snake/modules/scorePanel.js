class ScorePanel {
    constructor(maxLevel = 10) {
        this.level = 1;
        this.score = 0;
        this.levelElem = document.getElementById('level');
        this.scoreElem = document.getElementById('score');
        this.maxLevel = maxLevel;
        // 最大提升等级
    }
    addScore() {
        // 加分方法
        this.scoreElem.innerHTML = ++this.score + '';
        if (this.score % 10 === 0 && this.level < this.maxLevel) {
            this.upLevel();
        }
    }
    upLevel() {
        // 提升等级方法
        this.levelElem.innerHTML = ++this.level + '';
    }
}
export default ScorePanel;
