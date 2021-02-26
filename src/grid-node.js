/* 
const NODE_EMPTY = 'node-empty'
const NODE_START = 'node-start'
const NODE_TARGET = 'node-target'
const NODE_VISITED = 'node-visitied'
const NODE_WALL = 'node-wall'
const NODE_WEIGHTED = 'node-weighted'
const NODE_BOMB = 'node-bomb' */

class GridNode {

    constructor() {
        this.reset()
    }

    reset() {
        this.update('node-empty')
    }

    update(cssClass) {
        this.cssClass = cssClass
    }
}

export default {
    GridNode
}
