//css imports
import '../css/main.scss';

//js dependency imports
import $ from 'jquery';
import Vue from 'vue';
const htmlToImage = require('html-to-image');

var images = [];

var data = {
  currentTemplate: {
    name: "jobPosting",
    index: 0
  },
  jobPosting: [{
    name: "",
    position: ""
  }],
  background: '../img/jobposting1.jpg',
  textboxColor: '#0C1C47',
  textBoxOpacity: '0.6',
  textboxWidth: '75%',
  borderSize: '8px',
  borderColor: '#96BE3C',
  borderPosition: 'left',
  position: 'middleCenter',
  height: "650px",
  width: "1250px",
  text: [{
      copy: 'We\'re Hiring!',
      class: 'Source Sans Pro Black',
      color: '#96BE3C',
      size: '72px'
    },
    {
      copy: 'Managing Director of the Senior Level Analyst',
      class: 'Source Sans Pro Light',
      color: '#ffffff',
      size: '72px'
    },
    {
      copy: 'Arlington, VA',
      class: 'Source Sans Pro Regular',
      color: '#d4d4d4',
      size: '28px'
    }
  ]
}

jcf.destroyAll();

Vue.component('image-item', {
  template: ''
});

var app = new Vue({
  el: '.imageMaker',
  data: data,
  computed: {
    rgba: function() {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.textboxColor);
      var r = parseInt(result[1], 16);
      var g = parseInt(result[2], 16);
      var b = parseInt(result[3], 16);
      var a = this.textBoxOpacity;

      return "rgba(" + r + "," + g + "," + b + "," + a + ")";

    },
    borderFormat: function(){
      var obj = {};
      var name = "border-" + this.borderPosition;
      var val = this.borderSize + " solid " + this.borderColor;
      obj[name] = val;
      return obj;
    },
    backgroundFormat: function(){
      var val = 'url("' + this.background + '") center center/cover no-repeat !important';
      return val;
    }
  },
  methods: {
    setCurrentTemplate: function() {
      var templateName = this.name;
      var index = this.index;
    },
    setSize: function(e) {
      var val = (e.target.value).split("by");
      this.width = val[0].trim();
      this.height = val[1].trim();
    },
    saveImage: function() {
      htmlToImage.toPng(document.getElementById('myImage'))
        .then(function(dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.png';
          link.href = dataUrl;
          link.click();
        });
    },
    fullscreen: function (){
      var obj = (this.position == 'middleCenter') ? {'background' : this.rgba} : {};
      return obj;
    }
  }
})
