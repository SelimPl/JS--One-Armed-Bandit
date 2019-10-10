class Resault {
    static moneyWinInGame(resault, bid) {
        if (resault) return 3 * bid;
        else return 0;
    }
    static checkWinner(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return true;
        else return false;
    }

}

Resault.moneyWinInGame(true, 12)