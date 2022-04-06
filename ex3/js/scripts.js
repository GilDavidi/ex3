
  window.onload =() => {
      let secsions="";
      let boxes=document.getElementsByClassName("layout3_main_boxes");
      let opacity=0;
      for(i=0; i<200;i++) 
      {
        secsions+= "<section class=" +"layout3_main_boxes"+"></section>";
      }

      document.getElementsByTagName("main")[0].innerHTML=secsions;
      for(i=0,j=0; i<200, j<1;i++, j+=0.005)
      {
        boxes[i].style.opacity=j;
      }


 
      document.getElementById("plus").onclick = () =>
      {
        opacity+=0.025;
        if(opacity<0.95)
        {
          boxes[0].style.opacity=opacity;
        }
        else
        {
          boxes[0].style.opacity=0;
          opacity=0;
        }
      }


    document.body.onclick = function(e) 
    {   //when the document body is clicked
      if (window.event) {
          e = event.srcElement;           //assign the element clicked to e (IE 6-8)
      }
      else
      {
          e = e.target;                   //assign the element clicked to e
      }
  
      if (e.className && e.className.indexOf('layout3_main_boxes') != -1)
      {
      const backgroundColor = e.style.backgroundColor; 
      let sectionColor = window.getComputedStyle(e).backgroundColor;
      if (sectionColor.indexOf("rgb(0, 0, 0)") != -1)
      {
         e.style.backgroundColor = "#ffcdd2";
      } 
      else 
      {
        e.style.backgroundColor = "black";
      }
    }
        
     }

}
