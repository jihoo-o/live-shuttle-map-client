export class ShapeController {
    constructor(private map: any) {}
    drawCircle(center, radius, color) {
        return this.map.drawCircle(center, radius, color);
    }

    // removeCircle(circle) {
    // this.map.eraseShape(circle);
    // }
}
