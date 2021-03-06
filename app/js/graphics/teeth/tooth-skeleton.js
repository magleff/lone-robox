import { Point, Graphics } from 'pixi.js';

class PointsFactory {
  static create(number, length) {
    const points = [];

    for (let i = 0; i < number; i += 1) {
      points.push(new Point(0, i * length));
    }

    return points;
  }
}

class ToothSkeleton {
  constructor(number, length, twistFactor) {
    this.graphics = new Graphics();
    this.points = PointsFactory.create(number, length);
    this.twistFactor = twistFactor;
  }

  position(x, y) {
    this.graphics.x = x;
    this.graphics.y = y;
  }

  pointsPositionX(x) {
    for (let i = 0; i < this.points.length; i += 1) {
      this.points[i].x = ((i ** this.twistFactor) / this.points.length) * x;
    }
  }

  render() {
    const g = this.graphics;

    g.clear();
    g.lineStyle(2, 0xffc2c2);
    g.moveTo(this.points[0].x, this.points[0].y);

    for (let i = 1; i < this.points.length; i += 1) {
      g.lineTo(this.points[i].x, this.points[i].y);
    }

    for (let i = 0; i < this.points.length; i += 1) {
      g.beginFill(0xff0022);
      g.drawCircle(this.points[i].x, this.points[i].y, 5);
      g.endFill();
    }
  }
}

export default ToothSkeleton;
