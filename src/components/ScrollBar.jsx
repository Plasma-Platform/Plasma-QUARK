import React from 'react';

import './ScrollBar.less';

export default class ScrollBar extends React.Component {

  constructor () {
    super();
    //  functions
    this.getSize                    = this.getSize.bind(this);
    this.setThumbSize               = this.setThumbSize.bind(this);
    this.setThumbPosition           = this.setThumbPosition.bind(this);
    this.handleTrackVerticalClick   = this.handleTrackVerticalClick.bind(this);
    this.handleTrackHorizontalClick = this.handleTrackHorizontalClick.bind(this);
    this.onDragStartVertical        = this.onDragStartVertical.bind(this);
    this.onDraggingVertical         = this.onDraggingVertical.bind(this);
    this.onDragStopVertical         = this.onDragStopVertical.bind(this);
    this.onDragStartHorizontal      = this.onDragStartHorizontal.bind(this);
    this.onDraggingHorizontal       = this.onDraggingHorizontal.bind(this);
    this.onDragStopHorizontal       = this.onDragStopHorizontal.bind(this);

    //  variables for vertical scroll
    this.contentInnerHeight     = 0; //  высота контента который скролится
    this.visibleContentHeight   = 0; //  высота видимой части
    this.invisibleContentHeight = 0; //  высота невидимой части

    //  variables for horizontal scroll
    this.contentInnerWidth     = 0; //  ширина контента который скролится
    this.visibleContentWidth   = 0; //  ширина видимой части
    this.invisibleContentWidth = 0; //  ширина невидимой части

    this.browserScrollBarWidth  = 0; // ширина стандартного скроллбара (для вертикального скролла)
    this.browserScrollBarHeight = 0; // высота стандартного скроллбара (для горизонтального скролла)
  }

  getSize () {
    const {height, width} = this.props;

    //  узнаем высоту видимой части и контента что скролится
    this.visibleContentHeight = this.scrollBarContent.offsetHeight;
    this.contentInnerHeight   = this.scrollBarInner.offsetHeight;
    //  узнаем ширину видимой части и контента что скролится
    this.visibleContentWidth = this.scrollBarContent.offsetWidth;
    this.contentInnerWidth   = this.scrollBarInner.offsetWidth;

    if (height) {
      //  вычисляем высоту невидимой части
      this.invisibleContentHeight = this.contentInnerHeight - this.visibleContentHeight;
    }

    if (width) {
      //  вычисляем ширину невидимой части
      this.invisibleContentWidth = this.contentInnerWidth - this.visibleContentWidth;
    }

    if (height && width) {
      this.invisibleContentHeight = this.contentInnerHeight - this.visibleContentHeight + this.browserScrollBarHeight;
      this.invisibleContentWidth = this.contentInnerWidth - this.visibleContentWidth + this.browserScrollBarHeight;
    }

    //  устанавливаем размеры кастомного скроллбара
    this.setThumbSize();

    this.setThumbPosition();
  }

  getCoords (elem) {
    var box = elem.getBoundingClientRect();

    return {
      top  : box.top + pageYOffset,
      left : box.left + pageXOffset
    };
  }

  setThumbSize () {
    const {height, width} = this.props;

    if (height) {
      this.thumbVertical.style.height = Math.floor((this.visibleContentHeight / this.contentInnerHeight) * 100) + '%';
    }

    if (width) {
      this.thumbHorizontal.style.width = Math.floor((this.visibleContentWidth / this.contentInnerWidth) * 100) + '%';
    }
  }

  setThumbPosition () {
    const {height, width} = this.props;

    if (height) {
      this.thumbVertical.style.top = Math.min(((this.visibleContentHeight - this.thumbVertical.offsetHeight) * (this.scrollBarContent.scrollTop / this.invisibleContentHeight)), (this.visibleContentHeight - this.thumbVertical.offsetHeight)) + 'px';
    }

    if (width) {
      this.thumbHorizontal.style.left = Math.min(((this.visibleContentWidth - this.thumbHorizontal.offsetWidth) * (this.scrollBarContent.scrollLeft / this.invisibleContentWidth)), (this.visibleContentWidth - this.thumbHorizontal.offsetWidth)) + 'px';
    }

    if (height && width) {
      this.thumbVertical.style.top = Math.min(((this.visibleContentHeight - this.thumbVertical.offsetHeight - this.browserScrollBarWidth) * (this.scrollBarContent.scrollTop / this.invisibleContentHeight)), (this.visibleContentHeight - this.thumbVertical.offsetHeight)) + 'px';
      this.thumbHorizontal.style.left = Math.min(((this.visibleContentWidth - this.thumbHorizontal.offsetWidth - this.browserScrollBarHeight) * (this.scrollBarContent.scrollLeft / this.invisibleContentWidth)), (this.visibleContentWidth - this.thumbHorizontal.offsetWidth)) + 'px';
    }
  }

  handleTrackVerticalClick (e) {
    // координаты элемента относительно страницы
    const distanceFromWrapperToTop      = this.getCoords(this.scrollBarContent).top;
    const distanceFromEventToWrapperTop = (e.pageY - distanceFromWrapperToTop) / this.visibleContentHeight;

    this.scrollBarContent.scrollTop = Math.min(this.invisibleContentHeight * distanceFromEventToWrapperTop, this.invisibleContentHeight);
  }

  handleTrackHorizontalClick (e) {
    // координаты элемента относительно страницы
    const distanceFromWrapperToLeft      = this.getCoords(this.scrollBarContent).left;
    const distanceFromEventToWrapperLeft = (e.pageX - distanceFromWrapperToLeft) / this.visibleContentWidth;

    this.scrollBarContent.scrollLeft = Math.min(this.invisibleContentWidth * distanceFromEventToWrapperLeft, this.invisibleContentWidth);
  }

  onDragStartVertical (e) {
    console.log('mousedown!');
    e.preventDefault();

    this.thumbVertical.className += ' scroll-bar__thumb_active';
    this.scrollVertical.className += ' scroll-bar__scroll_active';

    document.addEventListener('mousemove', this.onDraggingVertical);
    document.addEventListener('touchmove', this.onDraggingVertical);
  }

  onDragStartHorizontal (e) {
    e.preventDefault();

    this.thumbHorizontal.className += ' scroll-bar__thumb_active';
    this.scrollHorizontal.className += ' scroll-bar__scroll_active';

    document.addEventListener('mousemove', this.onDraggingHorizontal);
    document.addEventListener('touchmove', this.onDraggingHorizontal);
  }

  onDraggingVertical (e) {
    const pageY = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
    document.addEventListener('mouseup', this.onDragStopVertical);
    document.addEventListener('touchend', this.onDragStopVertical);

    const distanceFromWrapperToTop      = this.getCoords(this.scrollBarContent).top;
    const distanceFromEventToWrapperTop = (pageY - distanceFromWrapperToTop) / this.visibleContentHeight;

    this.scrollBarContent.scrollTop = Math.min(this.invisibleContentHeight * distanceFromEventToWrapperTop, this.invisibleContentHeight);
  }

  onDraggingHorizontal (e) {
    const pageX = e.targetTouches ? e.targetTouches[0].pageX : e.pageX;
    document.addEventListener('mouseup', this.onDragStopHorizontal);
    document.addEventListener('touchend', this.onDragStopHorizontal);

    const distanceFromWrapperToLeft      = this.getCoords(this.scrollBarContent).left;
    const distanceFromEventToWrapperLeft = (pageX - distanceFromWrapperToLeft) / this.visibleContentWidth;

    this.scrollBarContent.scrollLeft = Math.min(this.invisibleContentWidth * distanceFromEventToWrapperLeft, this.invisibleContentWidth);
  }

  onDragStopVertical () {
    console.log('mouseup');
    this.thumbVertical.className = 'scroll-bar__thumb';
    this.scrollVertical.className = 'scroll-bar__scroll scroll-bar__scroll_vertical';

    document.removeEventListener('mousemove', this.onDraggingVertical);
    document.removeEventListener('touchmove', this.onDraggingVertical);
    document.removeEventListener('mouseup', this.onDragStopVertical);
    document.removeEventListener('touchend', this.onDragStopVertical);
  }

  onDragStopHorizontal () {
    this.thumbHorizontal.className = 'scroll-bar__thumb';
    this.scrollHorizontal.className = 'scroll-bar__scroll scroll-bar__scroll_horizontal';

    document.removeEventListener('mousemove', this.onDraggingHorizontal);
    document.removeEventListener('touchmove', this.onDraggingHorizontal);
    document.removeEventListener('mouseup', this.onDragStopHorizontal);
    document.removeEventListener('touchend', this.onDragStopHorizontal);
  }

  componentDidMount () {
    const {height, width} = this.props;

    this.scrollBar.className += height ? ' scroll-bar_vertical' : '';
    this.scrollBar.className += width ? ' scroll-bar_horizontal' : '';

    //  скрываем стандартный скроллбар
    if (height) {
      const contentInnerWidth  = this.scrollBarContent.clientWidth;
      const contentOuterWidth  = this.scrollBarContent.offsetWidth;
      //  узнаем ширину стандартного браузерного скроллбара
      this.browserScrollBarWidth = contentOuterWidth - contentInnerWidth;

      this.scrollBarContent.style.marginRight = -this.browserScrollBarWidth + 'px';
    }
    if (width) {
      const contentInnerHeight  = this.scrollBarContent.clientHeight;
      const contentOuterHeight  = this.scrollBarContent.offsetHeight;
      //  узнаем высоту стандартного браузерного скроллбара
      this.browserScrollBarHeight = contentOuterHeight - contentInnerHeight;

      this.scrollBarContent.style.marginBottom = -this.browserScrollBarHeight + 'px';
    }

    //  вычисляем размеры после сборки всех стилей и устанавливаем высоту кастомного скроллбара
    setTimeout(this.getSize, 100);

    //  устанавливаем слушатели событий
    this.scrollBarContent.addEventListener('scroll', this.setThumbPosition);

    if (height) {
      this.trackVertical.addEventListener('click', this.handleTrackVerticalClick);
      this.thumbVertical.addEventListener('mousedown', this.onDragStartVertical);
      this.thumbVertical.addEventListener('touchstart', this.onDragStartVertical);
      this.thumbVertical.addEventListener('click', this.onDragStopVertical);
    }
    if (width) {
      this.trackHorizontal.addEventListener('click', this.handleTrackHorizontalClick);
      this.thumbHorizontal.addEventListener('mousedown', this.onDragStartHorizontal);
      this.thumbHorizontal.addEventListener('touchstart', this.onDragStartHorizontal);
      this.thumbHorizontal.addEventListener('click', this.onDragStopHorizontal);
    }
  }

  componentWillUnmount () {
    const {height, width} = this.props;

    //  снимаем слушатели событий
    this.scrollBarContent.removeEventListener('scroll', this.setThumbPosition);
    if (height) {
      this.trackVertical.removeEventListener('click', this.handleTrackVerticalClick);
      this.thumbVertical.removeEventListener('mousedown', this.onDragStartVertical);
      this.thumbVertical.removeEventListener('touchstart', this.onDragStartVertical);
      this.thumbVertical.removeEventListener('click', this.onDragStopVertical);
    }
    if (width) {
      this.trackHorizontal.removeEventListener('click', this.handleTrackHorizontalClick);
      this.thumbHorizontal.removeEventListener('mousedown', this.onDragStartHorizontal);
      this.thumbHorizontal.removeEventListener('touchstart', this.onDragStartHorizontal);
      this.thumbHorizontal.removeEventListener('click', this.onDragStopHorizontal);
    }
  }

  render () {
    const {children, height, width} = this.props;

    return (
      <div className='scroll-bar' style={{width: width + 'px'}} ref={ref => { this.scrollBar = ref; }}>
        { height
          ? (
            <div className='scroll-bar__scroll scroll-bar__scroll_vertical' tabIndex='1' ref={ref => { this.scrollVertical = ref; }}>
              <div className='scroll-bar__track' tabIndex='1' ref={ref => { this.trackVertical = ref; }}/>
              <div className='scroll-bar__thumb' tabIndex='1' draggable='false' ref={ref => { this.thumbVertical = ref; }} />
            </div>
          ) : null }
        { width
          ? (
            <div className='scroll-bar__scroll scroll-bar__scroll_horizontal' tabIndex='1' ref={ref => { this.scrollHorizontal = ref; }}>
              <div className='scroll-bar__track' tabIndex='1' ref={ref => { this.trackHorizontal = ref; }}/>
              <div className='scroll-bar__thumb' tabIndex='1' draggable='false' ref={ref => { this.thumbHorizontal = ref; }} />
            </div>
          ) : null }
        <div className='scroll-bar__content' style={{height: height + 'px'}} ref={ref => { this.scrollBarContent = ref; }}>
          <div className='scroll-bar__inner' ref={ref => { this.scrollBarInner = ref; }}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
