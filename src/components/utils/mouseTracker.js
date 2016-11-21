/**
 *  mouseTracker shows where is your cursor placed in current time
 */
class MouseTracker {
  constructor () {
    this._position = {
      clientX : null,
      clientY : null,
      x       : null,
      y       : null,
      target  : null
    };

    window.onmousemove = this.mouseMoveHandler;
  }

  mouseMoveHandler = (event) => {
    this._position = {
      clientX : event.clientX,
      clientY : event.clientY,
      x       : event.x,
      y       : event.y,
      target  : event.target
    };
  };

  get position () {
    return this._position;
  }
}

export default new MouseTracker();
