//css imports
import '../css/main.scss';

//js dependency imports
import 'simplebar';
import $ from 'jquery';
import Vue from 'vue';
import saveAs from 'file-saver';
const htmlToImage = require('html-to-image');

var images = [];

var data = {
  currentTemplate: {
    name: "jobPosting",
    index: 0
  },
  templates: [{
      name: "Job Posting [Full Screen]",
      background: 'https://www2.arccorp.com/globalassets/imageMaker/hr-tool2.jpg',
      textboxColor: '#0C1C47',
      textBoxOpacity: '0.6',
      textboxWidth: '75%',
      borderSize: '8px',
      borderColor: '#96BE3C',
      borderPosition: 'left',
      position: 'middleCenter',
      height: "650px",
      width: "1250px",
      logoSize: "small",
      logoColor: "white",
      logoPosition: "topRight",
      text: [{
          copy: 'We\'re Hiring!',
          class: 'Source Sans Pro Black, SourceSansPro-Black, arial, sans-serif',
          color: '#96BE3C',
          size: '72px'
        },
        {
          copy: 'Managing Director of the Senior Level Analyst',
          class: 'Source Sans Pro Light, SourceSansPro-Light, arial, sans-serif',
          color: '#ffffff',
          size: '72px'
        },
        {
          copy: 'Arlington, VA',
          class: 'Source Sans Pro Regular, SourceSansPro-Regular, arial, sans-serif',
          color: '#d4d4d4',
          size: '28px'
        }
      ]
    },
    {
      name: "Job Posting [Bottom Box]",
      background: 'https://www2.arccorp.com/globalassets/about-us/customer-successes/customer-success-jumbo3.jpg',
      textboxColor: '#189bb0',
      textBoxOpacity: '0.8',
      textboxWidth: '100%',
      borderSize: '8px',
      borderColor: '#0C1C47',
      borderPosition: 'left',
      position: 'bottomLeft',
      height: "650px",
      width: "1250px",
      logoSize: "small",
      logoColor: "teal",
      logoPosition: "topRight",
      logoSize: "small",
      logoColor: "teal",
      logoPosition: "topRight",
      text: [{
          copy: 'We\'re Hiring!',
          class: 'Source Sans Pro Black, SourceSansPro-Black, arial, sans-serif',
          color: '#0C1C47',
          size: '48px'
        },
        {
          copy: 'Bilingual Customer Service Representative (Spanish / English)',
          class: 'Source Sans Pro Light, SourceSansPro-Light, arial, sans-serif',
          color: '#ffffff',
          size: '60px'
        },
        {
          copy: 'Arlington, VA',
          class: 'Source Sans Pro Regular, SourceSansPro-Regular, arial, sans-serif',
          color: '#d4d4d4',
          size: '28px'
        }
      ]
    },
    {
      name: "Job Posting [Center Box]",
      background: 'https://www2.arccorp.com/globalassets/homepage/redesign/slides/carousel17.jpg',
      textboxColor: '#0C1C47',
      textBoxOpacity: '0.6',
      textboxWidth: '75%',
      borderSize: '12px',
      borderColor: '#96BE3C',
      borderPosition: 'bottom',
      position: 'fullscreen',
      height: "650px",
      width: "1250px",
      logoSize: "small",
      logoColor: "white",
      logoPosition: "bottomRight",
      imageIcon: '',
      textAlign: 'center',
      text: [{
          copy: 'We\'re Hiring',
          class: 'Source Sans Pro Black, SourceSansPro-Black, arial, sans-serif',
          color: '#96BE3C',
          size: '32px'
        },
        {
          copy: 'Managing Director of the Senior Level Analyst',
          class: '"SourceSansPro-Light", arial, sans-serif',
          color: '#ffffff',
          size: '72px'
        },
        {
          copy: 'Arlington, VA',
          class: 'Source Sans Pro Regular, SourceSansPro-Regular, arial, sans-serif',
          color: '#d4d4d4',
          size: '32px'
        }
      ]
    },
  ],
  background: 'https://www2.arccorp.com/globalassets/imageMaker/hr-tool2.jpg',
  textboxColor: '#0C1C47',
  textBoxOpacity: '0.7',
  textboxWidth: '75%',
  borderSize: '8px',
  borderColor: '#96BE3C',
  borderPosition: 'left',
  position: 'middleCenter',
  height: "650px",
  width: "1250px",
  viewAdvanced: false,
  logo: true,
  logoSize: "small",
  logoColor: "white",
  logoPosition: "topRight",
  imageIcon: '',
  textAlign: 'left',
  text: [{
      copy: 'We\'re Hiring!',
      class: 'Source Sans Pro Black, SourceSansPro-Black, arial, sans-serif',
      color: '#96BE3C',
      size: '72px'
    },
    {
      copy: 'Managing Director of the Senior Level Analyst',
      class: 'SourceSansPro-Light, Source Sans Pro Light, arial, sans-serif',
      color: '#ffffff',
      size: '72px'
    },
    {
      copy: 'Arlington, VA',
      class: 'Source Sans Pro Regular, SourceSansPro-Regular, arial, sans-serif',
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
    borderFormat: function() {
      var obj = {};
      var name = "border-" + this.borderPosition;
      var val = this.borderSize + " solid " + this.borderColor;
      obj[name] = val;
      return obj;
    },
    backgroundFormat: function() {
      var val = 'url("' + this.background + '") center center/cover no-repeat !important';
      return val;
    }
  },
  methods: {
    setCurrentTemplate: function(e) {
      var val = e.target.value;
      for (var i = 0; i < this.templates.length; i++) {
        if (this.templates[i].name == val) {
          this.background = this.templates[i].background;
          this.textboxColor = this.templates[i].textboxColor;
          this.textBoxOpacity = this.templates[i].textBoxOpacity;
          this.textboxWidth = this.templates[i].textboxWidth;
          this.borderSize = this.templates[i].borderSize;
          this.borderColor = this.templates[i].borderColor;
          this.borderPosition = this.templates[i].borderPosition;
          this.position = this.templates[i].position;
          this.height = this.templates[i].height;
          this.width = this.templates[i].width;
          this.logoColor = this.templates[i].logoColor;
          this.logoSize = this.templates[i].logoSize;
          this.logoPosition = this.templates[i].logoPosition;
          this.imageIcon = this.templates[i].imageIcon;
          this.textAlign = this.templates[i].textAlign;

          for (var j = 0; j < this.templates[i].text.length; j++) {
            this.text[j].copy = this.templates[i].text[j].copy;
            this.text[j].class = this.templates[i].text[j].class;
            this.text[j].color = this.templates[i].text[j].color;
            this.text[j].size = this.templates[i].text[j].size;
          }
        }

      }
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
          link.target = '_blank';
          link.download = 'banner';
          link.href = dataUrl;
          link.click();
        });
    },
    fullscreen: function() {
      var obj = (this.position == 'middleCenter') ? {
        'background': this.rgba
      } : {};
      return obj;
    },
    toggleAdvanced: function() {
      this.viewAdvanced = !this.viewAdvanced;
    }
  }
})
