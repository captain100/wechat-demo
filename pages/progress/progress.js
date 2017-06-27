Page({
    data: {
        percent: 0,
        x: 0
    },
    changePerent(e) {
        console.log(e)
        console.log(this.data.x)
        console.log(e.touches[0].clientX)
    }

})