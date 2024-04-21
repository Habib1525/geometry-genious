function calculatetriangleArea(){
  const basefield = document.getElementById('triangle-base');
  const basevaluetext = basefield.value;
  const basevalue = parseFloat(basevaluetext);
  //console.log(basevalue)
  const heightfield = document.getElementById('triangle-height');
  const heightvaluetext = heightfield.value;
  const heightvalue = parseFloat(heightvaluetext);
  //console.log(heightvalue)
  const areatriangle = 0.5 * basevalue * heightvalue;
  //console.log(area)
  const spanarea = document.getElementById('triangle-area');
  spanarea.innerText = areatriangle;
}

function calculaterectanglearea(){
  const widthfield = document.getElementById('rectangle-width');
  const widthvaluetext = widthfield.value;
  const width = parseFloat(widthvaluetext);
  console.log(width)
  const lengthfield = document.getElementById('rectangle-length');
  const lengthvaluetext = lengthfield.value;
  const length = parseFloat(lengthvaluetext);
  //console.log(length)
  const arearectangle = width * length;

  const spanrectanglearea = document.getElementById('rectangle-area');
  spanrectanglearea.innerText = arearectangle;


}



//reusable function



function calculateparallelogramarea(){
  const base = getinputvalue('parallelogram-width');
  //console.log(base)

  const height = getinputvalue('parallelogram-length')
  //console.log(height)
  const area = base * height;
  setelementinnertext('parallelogram-area',area);


}

function calculateEllipsearea(){
  const majorradious = getinputvalue('ellipse-major-radius');
  const minorradious = getinputvalue('ellipse-minor-radius');
  const area = 3.1416 * majorradious * minorradious;
  setelementinnertext('Ellipse-area',area)
}

function getinputvalue(fieldid){
  const inputfield = document.getElementById(fieldid)
  const inputvaluetext = inputfield.value;
  const value = parseFloat(inputvaluetext);
  return value;
}

// reuseable set span,p , div ,text

function setelementinnertext(elementid, area){
  const element = document.getElementById(elementid);
  element.innerText = area;
}