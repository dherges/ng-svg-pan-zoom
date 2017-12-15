import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public zoom = 1.8;
  public translate = { x: -50, y: -20 };

  public get svgTransform(): string {
    // @link https://www.safaribooksonline.com/library/view/svg-essentials/0596002238/ch05s06.html
    const centerX = 50;
    const centerY = 0;

    const offX = -centerX * (this.zoom - 1);
    const offY = -centerY * (this.zoom - 1);
    const trsl = `translate(${offX}, ${offY})`;

    return `${trsl} translate(${this.translate.x}, ${this.translate.y}) scale(${this.zoom}, ${this.zoom})`;
  }

}
