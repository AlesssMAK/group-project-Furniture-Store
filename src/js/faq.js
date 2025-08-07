import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  duration: 250,
  showMultiple: false,

  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});