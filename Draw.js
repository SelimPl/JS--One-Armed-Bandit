class Draw {
    constructor() {
        this.options = ["red", "green", "blue"];
        let _result = this.DrawResult();
        this.getDrawResult = () => _result;
    }

    DrawResult() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            // console.log(color);
            colors.push(color)
        }
        return colors;

    }
}

const draw = new Draw()