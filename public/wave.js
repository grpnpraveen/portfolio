function updateText(text){

    let delay = 200;
    
        let h1 = document.getElementById("text_wave");
    
          h1.innerHTML = text
            .split("")
            .map(letter => {
              // console.log(letter);
              return `<span>` + letter + `</span>`;
            })
            .join("");
    
          Array.from(h1.children).forEach((span, index) => {
            setTimeout(() => {
              span.classList.add("wavy");
            }, index * 60 + delay);
          });
    
    }
    
    updateText("Home");