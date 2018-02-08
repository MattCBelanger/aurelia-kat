export class RedSquareCustomAttribute {
  static inject = [Element];

  constructor(element){
    this.element = element;
    this.element.style.width = this.element.style.height = '100px';
    this.element.style.backgroundColor = 'red';
  }
}