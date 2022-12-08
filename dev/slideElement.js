// Originally written by ChatGPT

document.registerElement('slide', {
  prototype: Object.create(HTMLElement.prototype, {
    // Set the default width and height of the slide element
    width: {
      value: 1920
    },
    height: {
      value: 1080
    },

    // Set the default background color of the element
    background: {
      value: 'white'
    },

    // Method to set the background color of the element
    setBackground: {
      value: function(color) {
        this.style.background = color;
      }
    }
  }),

  // Define the behavior of the element when it is created
  createdCallback: function() {
    // Set the width and height of the element
    this.style.width = this.width + 'px';
    this.style.height = this.height + 'px';

    // Set the background color of the element
    this.setBackground(this.background);
  }
});
