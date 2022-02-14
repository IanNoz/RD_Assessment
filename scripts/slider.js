/* Simple Slider: 
 - takes a DOM ID as slider element wrapper
 - "display" class identifier MUST indicate the elment that contains the sliding elements (e.g. images elements)
 - first child element is the first slide to be shown (this.pointer = 0;)
 - slide control buttons MUST be button elements with class "left" and "right"
 - class identifiers "shown" and "hidden" are used to display sliding elements */

class slider {
    constructor(id) {
      // Select Slider DOM element by ID
      this.slider = $("#" + id);
      this.display = this.slider.find(".display");
      this.slides = this.display.children();

      this.pointer = 0;
    }

    slideRight(){
        let current_pointer = this.pointer;
        let next_pointer;

        // pointer loops the slide elements indexes
        if(current_pointer < this.slides.length-1){
            next_pointer = this.pointer + 1;
        }else{
            next_pointer = 0;
        }

        this.pointer = next_pointer;
        this.changeShownSlide(current_pointer, next_pointer);
    }

    slideLeft(){
        let current_pointer = this.pointer;
        let next_pointer;
    
        // pointer loops the slide elements indexes
        if(current_pointer > 0){
            next_pointer = this.pointer - 1;
        }else{
            next_pointer = this.slides.length-1;
        }

        this.pointer = next_pointer;
        this.changeShownSlide(current_pointer, next_pointer);
    }

    // Manage slides classes to hide old image and show the new one
    changeShownSlide(current,next){
        this.slides.each( (i, ele) => {
            if ($(ele).hasClass("shown") && current == i ){
                $(ele).removeClass( "shown" );
                $(ele).addClass( "hidden" );
            }
            else if($(ele).hasClass("hidden") && next == i ){
                $(ele).removeClass( "hidden" );
                $(ele).addClass( "shown" );
            }
        });
    }

    // Add event-listeners to slider arrow buttons
    setControls(){
        this.slider.find("button.left").click( ()=>{
            this.slideLeft();
        });
        this.slider.find("button.right").click( ()=>{
            this.slideRight();
        });
    }
  }