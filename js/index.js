const bars = document.querySelectorAll('.result-bar .dot')
bars.forEach((bar, index) => {
  const nextBar = bars[index + 1]
  if (!nextBar) {
    return
  }
  let elLine = bar.querySelector('i')
  if (!elLine) {
    elLine = document.createElement('i')
    elLine.setAttribute('line', '')
    bar.appendChild(elLine)
  }
  // 计算线段长度和旋转弧度
  let boundThis = bar.getBoundingClientRect(),
      boundNext = nextBar.getBoundingClientRect(),
      x1 = boundThis.left,
      y1 = boundThis.top,
      x2 = boundNext.left,
      y2 = boundNext.top,
      distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)),
      radius = Math.atan((y2 - y1) / (x2 - x1))
  console.log(distance, radius)
  elLine.style.width = `${distance}px`
  elLine.style.transform=`rotate(${radius}rad)`
})