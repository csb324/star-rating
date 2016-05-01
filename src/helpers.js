export default function helpers(){
  return {
    exists: exists,
    starTemplate: starTemplate,
    elementTemplate: elementTemplate
  };
}

export function exists(testItem) {
    return typeof testItem !== "undefined" && testItem !== null;
}

export function starTemplate(){
  return '<svg class="star" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">    <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/><path d="M0 0h18v18H0z" fill="none"/></svg>';
}

export function elementTemplate(options){
  let size = options['size'];
  let colors = options['colors'];
  let src = options['src'];
  let transition = options['transition'];


  console.log(options);

  let starStyles;
  let selectedStarStyles;
  if (src) {
    starStyles = `background: rgba(255,255,255,0) url(${src[0]}) no-repeat center center;
      background-size: cover;
      fill: transparent;`;
    selectedStarStyles = `background-image: url(${src[1]});`
  } else {
    starStyles = `fill: ${colors[0]};`;
    selectedStarStyles = `fill: ${colors[1]};`;
  }


  return `<style>
           :host {
             display: flex;
             -webkit-align-items: center;
             -ms-align-items: center;
             -moz-align-items: center;
             align-items: center;
             -webkit-justify-content: center;
             -ms-justify-content: center;
             -moz-justify-content: center;
             justify-content: center;
             width: 100%;
           }

           .star {
              height: ${size};
              width: ${size};
              outline: 0;
              cursor: pointer;
              ${starStyles}
           }

           .star.selected {
              ${selectedStarStyles}
           }

        </style>`;
}
