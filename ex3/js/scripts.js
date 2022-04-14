
window.onload = () => {
  let main = document.getElementsByTagName("main")[0];
  let boxes = document.getElementsByClassName("boxes")[0];
  let firstBox = document.getElementsByClassName("layout_3_box4")[0];
  let opacity = 0;
  for (i = 0; i < 50; i++) {
    let clone = boxes.cloneNode(true); // "deep" clone
    main.appendChild(clone);
  }

  document.getElementById("plus").onclick = () => {

    if (firstBox.style.opacity < 0.95) {
      opacity += 0.25;
      firstBox.style.opacity = opacity;
    }
    else {
      firstBox.style.opacity = 0;
      opacity = 0;
    }
  }

  document.body.onclick = function (e) {   //when the document body is clicked
    if (window.event) {
      e = event.srcElement;         //assign the element clicked to e (IE 6-8)
    }


    if (e.className) {
      if (e.className.indexOf("layout_3_box1") != -1 || e.className.indexOf("layout_3_box2") != -1
        || e.className.indexOf("layout_3_box3") != -1 || e.className.indexOf("layout_3_box4") != -1) {
        let PinkToBlack = false;
        let BlackToPink = false;
        let sectionColor = window.getComputedStyle(e).backgroundColor;
        if (sectionColor.indexOf("rgb(0, 0, 0)") != -1) {
          e.style.backgroundColor = "pink";
          BlackToPink = true;
        }
        else {
          e.style.backgroundColor = "black";
          PinkToBlack = true;
        }
        e.addEventListener('mouseover', function handleMouseOver() {
          e.style.backgroundColor = "pink";
        });
        e.addEventListener('mouseout', function handleMouseOut() {
          if (BlackToPink) {
            e.style.backgroundColor = "pink";
          }
          if (PinkToBlack) {
            e.style.backgroundColor = "black";
          }
          if (!PinkToBlack && !BlackToPink) {
            e.style.backgroundColor = "black";
          }

        });
      }

    }
  }

}
