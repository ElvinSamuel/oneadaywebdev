{"filter":false,"title":"like_button.js","tooltip":"/reactSimple/like_button.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":24,"column":45},"action":"insert","lines":["'use strict';","","const e = React.createElement;","","class LikeButton extends React.Component {","  constructor(props) {","    super(props);","    this.state = { liked: false };","  }","","  render() {","    if (this.state.liked) {","      return 'You liked this.';","    }","","    return e(","      'button',","      { onClick: () => this.setState({ liked: true }) },","      'Like'","    );","  }","}","","const domContainer = document.querySelector('#like_button_container');","ReactDOM.render(e(LikeButton), domContainer);"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":24,"column":45},"end":{"row":24,"column":45},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1541439258033,"hash":"98cc56afb975ece9a35852279592cf9ec7117610"}