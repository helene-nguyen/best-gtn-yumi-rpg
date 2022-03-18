/*Yumi&Gtn Project 2022 RPG game*/
let test = "Hey do you hear me ? 🐼";

const base = {
    //^VARIABLES
    selectors: {
        boardElement: document.querySelector(".board"),
        playersElement: document.querySelector(".players")
    },
    boardSize: {
        cellCount: 10,
        rowCount: 6
    },
    player: {
        x: 0,
        y: 0,
        direction: "right"
    },
    goldCaveElement: {
        x: 9,
        y: 5
    },
    //^INIT
    init: function () {
        base.player1();
        base.player2();
        base.createBoard();

    },
    //^FUNCTIONS
    //~create board
    createBoard: function () {

        //create rows
        for (let indexRow = 0; indexRow < base.boardSize.rowCount; indexRow++) {
            let rowElement = base.createRow();
            base.selectors.boardElement.appendChild(rowElement);
            rowElement.innerHTML = indexRow;

            //create cells in rows
            for (let indexCell = 0; indexCell < base.boardSize.cellCount; indexCell++) {
                let cellElement = base.createCell();
                rowElement.appendChild(cellElement);
                cellElement.innerHTML = indexCell;

                //create coords
                let x = indexCell;
                let y = indexRow;
                //create treasure
                base.placeElement(cellElement, base.goldCaveElement.x, base.goldCaveElement.y, x, y);
            }
        }
    },
    //~create one row
    createRow: function () {
        let rowElement = document.createElement('div');
        rowElement.classList.add('row');
        base.selectors.boardElement.appendChild(rowElement);

        return rowElement;
    },
    //~create one cell
    createCell: function () {
        let cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.style.backgroundImage = "url('./images/fields.png')";
        cellElement.style.backgroundRepeat = "no-repeat";
        cellElement.style.backgroundSize = "150%";
        cellElement.style.backgroundPosition = "-15px -20px";

        /*  let goldCasex = randomX() */
        // & si base.goldCave.x 5 === indexCell && base.goldCave.Y  3 === indexRow)
        /*  ajouter la classList treasure
         si play1 
             ajouter la class lit player */

        return cellElement;
    },
    //~create random x
    randomX: function () {
        let xRandom = Math.floor(Math.random() * base.boardSize.cellCount);
        return xRandom;
    },
    //~create random y
    randomY: function () {
        let yRandom = Math.floor(Math.random() * base.boardSize.rowCount);
        return yRandom;
    },
    //~place element
    placeElement: function (place, coordsX, coordsY, x, y) {
        let goldCave = base.createGoldCave();
        goldCave.x = coordsX;
        goldCave.y = coordsY;

        if (goldCave.x === x && goldCave.y === y) {
            place.appendChild(goldCave);
        }
    },
    //~create players
    player1: function () {
        //create player
        let player1Element = document.createElement('div');
        player1Element.classList.add('player1');
        base.selectors.playersElement.appendChild(player1Element);

        //player icon
        player1Element.style.backgroundImage = ("url('./images/gtn.png')");
        player1Element.style.backgroundRepeat = "no-repeat";
        player1Element.style.backgroundSize = "115%";
        player1Element.style.backgroundPosition = "-7px -7px";

        this.player1.x = base.player.x;
        this.player1.y = base.player.y;

        return player1Element;
    },

    player2: function () {
        //create player
        let player2Element = document.createElement('div');
        player2Element.classList.add('player2');
        base.selectors.playersElement.appendChild(player2Element);

        //player icon
        player2Element.style.backgroundImage = ("url('./images/yumi.png')");
        player2Element.style.backgroundRepeat = "no-repeat";
        player2Element.style.backgroundSize = "110%";
        player2Element.style.backgroundPosition = "-5px -3px";

        this.player2.x = base.player.x;
        this.player2.y = base.player.y;

        return player2Element;
    },
    //~create treasure
    createGoldCave: function () {
        let goldCaveElement = document.createElement("div");
        goldCaveElement.classList.add("treasure");

        goldCaveElement.style.backgroundImage = ("url('./images/end.png')");
        goldCaveElement.style.backgroundRepeat = "no-repeat";
        goldCaveElement.style.backgroundPosition = "center";
        goldCaveElement.style.backgroundSize = "cover";

        return goldCaveElement;
    },
    //~clear the board
    clearBoard: function () {
        
    },
    //~select player
    selectPlayer: function () {
        
    }

};

// background sur le form 

//(create tree function aside)

/*
=> random image field
image background => background position
=return cell*/