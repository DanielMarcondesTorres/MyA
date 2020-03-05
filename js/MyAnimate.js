atualizar();
function atualizar(){
  let MyA = document.getElementsByClassName('MyA');
  for (var i = 0; i < MyA.length; i++) {
    $(MyA[i]).replaceWith($(MyA[i]).clone());
  }





    let aonhover = document.getElementsByClassName('mya-Hover');
    for (var i = 0; i < aonhover.length; i++) {
      aonhover[i].classList.add('MyA-lock');

      aonhover[i].addEventListener('mouseover', function(event){
        this.classList.remove('MyA-lock');
      });
      aonhover[i].addEventListener('mouseout', function(event){
        this.classList.add('MyA-lock');
      });
    }
    let aonhovero = document.getElementsByClassName('mya-HoverOnly');
    for (var i = 0; i < aonhovero.length; i++) {
      aonhovero[i].classList.add('MyA-lock');

      aonhovero[i].addEventListener('mouseover', function(event){
        this.classList.remove('MyA-lock');
      });
    }
    let aonafterhover = document.getElementsByClassName('mya-OnAfterHover');
    for (var i = 0; i < aonafterhover.length; i++) {
      aonafterhover[i].classList.add('MyA-lock');

      onafterhover[i].addEventListener('mouseover', function(event){
        this.classList.remove('MyA-lock');
      });
    }
    let aafterhover = document.getElementsByClassName('mya-AfterHover');
    for (var i = 0; i < aafterhover.length; i++) {
      aafterhover[i].classList.add('MyA-lock');

      aafterhover[i].addEventListener('mouseout', function(event){
        this.classList.remove('MyA-lock');
      });
    }


    let aonclick = document.getElementsByClassName('mya-Click');
    for (var i = 0; i < aonclick.length; i++) {
      aonclick[i].classList.add('MyA-lock');

      aonclick[i].addEventListener('click', function(event){
        let olas = this;
        olas.classList.add('MyA-lock');

        window.setTimeout( function(event){
          olas.classList.remove('MyA-lock');
        }, 100);
      });
    }
    let aonclicko = document.getElementsByClassName('mya-ClickOnly');
    for (var i = 0; i < aonclicko.length; i++) {
      aonclicko[i].classList.add('MyA-lock');

      aonclicko[i].addEventListener('click', function(event){
        this.classList.remove('MyA-lock');
      });
    }
    let aafterclick = document.getElementsByClassName('mya-AfterClick');
    for (var i = 0; i < aafterclick.length; i++) {
      aafterclick[i].classList.add('MyA-lock');

      aafterclick[i].addEventListener('click', function(event){
        this.classList.remove('MyA-lock');
      });
    }






  let afterhover = document.getElementsByClassName('mya-stopAfterHover');
  for (var i = 0; i < afterhover.length; i++) {
    afterhover[i].addEventListener('mouseleave', function(event){
      this.classList.add('MyA-lock');
    });
  }
  let onafterhover = document.getElementsByClassName('mya-stopOnAfterHover');
  for (var i = 0; i < onafterhover.length; i++) {
    onafterhover[i].addEventListener('mouseover', function(event){
      this.classList.add('MyA-lock');
    });
  }
  let pafterhover = document.getElementsByClassName('mya-pauseAfterHover');
  for (var i = 0; i < pafterhover.length; i++) {
    pafterhover[i].addEventListener('mouseleave', function(event){
      this.classList.add('MyA-paused');
    });
  }
  let ponafterclick = document.getElementsByClassName('mya-pauseOnClickOnly');
  for (var i = 0; i < ponafterclick.length; i++) {
    ponafterclick[i].addEventListener('click', function(event){
      this.classList.add('MyA-paused');
    });
  }
  let pafterclick = document.getElementsByClassName('mya-pauseOnClick');
  for (var i = 0; i < pafterclick.length; i++) {
    pafterclick[i].addEventListener('click', function(event){
      if (this.classList.contains('MyA-paused')) {
        this.classList.remove('MyA-paused');
      }
      else {
        this.classList.add('MyA-paused');
      }
    });
  }
  let ponafterhover = document.getElementsByClassName('mya-pauseOnAfterHover');
  for (var i = 0; i < ponafterhover.length; i++) {
    ponafterhover[i].addEventListener('mouseover', function(event){
      this.classList.add('MyA-paused');
    });
  }
  let click = document.getElementsByClassName('mya-ClickOnly');
  for (var i = 0; i < click.length; i++) {
    click[i].classList.add('MyA-lock');
    click[i].addEventListener('click', function(event){
      this.classList.remove('MyA-lock');
    });
  }
  let clickto = document.getElementsByClassName('mya-stopOnClickOnly');
  for (var i = 0; i < clickto.length; i++) {
    clickto[i].addEventListener('click', function(event){
      this.classList.add('MyA-lock');
    });
  }
  let clickt = document.getElementsByClassName('mya-stopOnClick');
  for (var i = 0; i < clickt.length; i++) {
    clickt[i].addEventListener('click', function(event){
      if (this.classList.contains('MyA-lock')) {
        this.classList.remove('MyA-lock');
      }
      else {
        this.classList.add('MyA-lock');
      }
    });
  }
  let clicka = document.getElementsByClassName('mya-ClickAlternate');
  for (var i = 0; i < clicka.length; i++) {
    clicka[i].classList.add('MyA-lock');
    clicka[i].addEventListener('click', function(event){
      if (this.classList.contains('MyA-lock')) {
        this.classList.remove('MyA-lock');
      }
      else {
        this.classList.add('MyA-lock');
      }
    });
  }
  let clickao = document.getElementsByClassName('mya-ClickOnly');
  for (var i = 0; i < clickao.length; i++) {
    clickao[i].classList.add('MyA-lock');
    clickao[i].addEventListener('click', function(event){
      this.classList.remove('MyA-lock');
    });
  }
  let clickaob = document.getElementsByClassName('mya-ClickOnly-backwards');
  for (var i = 0; i < clickaob.length; i++) {
    clickaob[i].classList.remove('MyA-lock');
    clickaob[i].addEventListener('click', function(event){
      this.classList.add('MyA-lock');
    });
  }
  let clickab = document.getElementsByClassName('mya-ClickAlternate-backwards');
  for (var i = 0; i < clickab.length; i++) {
    clickab[i].addEventListener('click', function(event){
      if (this.classList.contains('MyA-lock')) {
        this.classList.remove('MyA-lock');
      }
      else {
        this.classList.add('MyA-lock');
      }
    });
  }
}
