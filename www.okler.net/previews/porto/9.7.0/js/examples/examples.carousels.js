(function($){'use strict';$('#carousel').owlCarousel({loop:true,responsive:{0:{items:1},479:{items:1},768:{items:2},979:{items:3},1199:{items:6}},navText:[],margin:10,autoWidth:false,items:6,rtl:($('html').attr('dir')=='rtl')?true:false});$('#videos').owlCarousel({items:1,merge:true,loop:true,margin:10,video:true,lazyLoad:true,center:true,responsive:{480:{items:2},600:{items:4}},rtl:($('html').attr('dir')=='rtl')?true:false});}).apply(this,[jQuery]);