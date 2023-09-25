Array.prototype.parse2D = function() {
    const rows = []
    for (let i = 0; i < this.length; i += 16) {
        rows.push(this.slice(i, i + 16))
    }
    
    return rows
}

Array.prototype.createObjectsFrom2D = function () {
    const objects = []
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol === 936) {
                // push a new collision into collisionblocks array
                objects.push(new CollisionBlock({
                    position: {
                        x: x * 35,
                        y: y * 20.5,
                    },
                }))
            }
    
        })
    })
    return objects
}