/* Author:
 
 for this to work you need the following structure:
 <div class="caraslider">
   <ul>
     <li>
      <div></div>
     </li>

*/

var Cara = {
  $cara_div : null,
  $cara_ul : null,
  index : 0,
  containerWidth : 0,
  containerHeight : 0,
  itemWidth : 0,
  spacing : 0,
  numItems : 0,
  itemsPerPage : 0,
  maxIndex : 0,
  init : function( itemsPerPage, containerHeight, itemWidth, spacing ){
    this.$cara_div = $('div#caraslider');
    this.$cara_ul = $('div#caraslider ul');
    this.itemsPerPage = itemsPerPage;
    this.containerWidth = itemsPerPage * (itemWidth + spacing) - spacing;
    this.containerHeight = containerHeight;
    this.itemWidth = itemWidth;
    this.spacing = spacing;
    this.numItems = this.$cara_ul.find('li').length;
    this.$cara_div.css('width',this.containerWidth);
    this.$cara_div.css('height',containerHeight);
    this.$cara_div.css('border','1px solid red');
    this.$cara_div.css('margin',0);
    this.$cara_div.css('padding',0);
    this.$cara_div.css('overflow','hidden');
    this.$cara_ul.css('margin',0);
    this.$cara_ul.css('padding',0);
    this.$cara_ul.css('position','relative');
    this.$cara_ul.find('li').css('margin-right', this.spacing + 'px');
    this.$cara_ul.css('width',this.itemWidth * this.numItems + this.spacing * this.numItems);
    this.maxIndex = ((this.itemWidth + this.spacing) * this.numItems - this.containerWidth) / (this.itemWidth + this.spacing);
    return this;
  },
  next : function(){
    this.gotoIndex(this.index + 1);
  },
  prev : function(){
    this.gotoIndex(this.index - 1);
  },
  gotoIndex : function(index){
    if(index < 0 || index > this.maxIndex ) return;
    this.index = index;
    var position = -this.index * (this.itemWidth + this.spacing);
    this.$cara_ul.animate({left : position},500);
  }

};


var slider = Cara.init( 5, 100, 80, 20);

slider.next();
slider.next();
