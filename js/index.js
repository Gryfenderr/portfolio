$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  gsap.to('#header',0,{display:"block",delay:1})
  gsap.to('#navigation-content',0,{display:"none"});
  gsap.to('#navigation-content',0,{display:"flex",delay:1});
})
$(function(){
  $('.color-panel').on("click",function(e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
});
$('.colors a').on("click",function(e) {
  e.preventDefault();
  var attr = $(this).attr("title");
  console.log(attr);
  $('head').append('<link rel="stylesheet" href="css/'+attr+'.css">');
});
});
$(function(){
     $('.menubar').on('click',function(){
         gsap.to('#navigation-content',.6,{y:0});
     })
     $('.navigation-close').on('click',function(){
        gsap.to('#navigation-content',.6,{y:"-100%"});
    });
   }); 

$(function(){
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 200 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 100;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
      };
})
$(function(){
  $('#about-link').on('click',function(){
    gsap.to('#navigation-content',0,{display:"none",delay:.7});
    gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
    gsap.to('#header',0,{display:"none"});
    gsap.to('#veille',0,{display:"none"});
    gsap.to('#certif',0,{display:"none"});
    gsap.to('#blog',0,{display:"none"});
    gsap.to('#portfolio',0,{display:"none"});
    gsap.to('#breaker',0,{display:"block"});
    gsap.to('#breaker-two',0,{display:"block",delay:.1});
    gsap.to('#contact',0,{display:"none"});
    gsap.to('#breaker',0,{display:"none",delay:2});
    gsap.to('#breaker-two',0,{display:"none",delay:2});
    gsap.to('#about',0,{display:"block",delay:.7});
    gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })
  $('#contact-link').on('click',function(){
    gsap.to('#navigation-content',0,{display:"none",delay:.7});
    gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
    gsap.to('#header',0,{display:"none"});
    gsap.to('#veille',0,{display:"none"});
    gsap.to('#certif',0,{display:"none"});
    gsap.to('#about',0,{display:"none"});
    gsap.to('#blog',0,{display:"none"});
    gsap.to('#portfolio',0,{display:"none"});
    gsap.to('#breaker',0,{display:"block"});
    gsap.to('#breaker-two',0,{display:"block",delay:.1});
    gsap.to('#breaker',0,{display:"none",delay:2});
    gsap.to('#breaker-two',0,{display:"none",delay:2});
    gsap.to('#contact',0,{display:"block",delay:.7});
    gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })
  $('#portfolio-link').on('click',function(){
    gsap.to('#navigation-content',0,{display:"none",delay:.7});
    gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
    gsap.to('#header',0,{display:"none"});
    gsap.to('#veille',0,{display:"none"});
    gsap.to('#certif',0,{display:"none"});
    gsap.to('#about',0,{display:"none"});
    gsap.to('#contact',0,{display:"none"});
    gsap.to('#blog',0,{display:"none"});
    gsap.to('#breaker',0,{display:"block"});
    gsap.to('#breaker-two',0,{display:"block",delay:.1});
    gsap.to('#breaker',0,{display:"none",delay:2});
    gsap.to('#breaker-two',0,{display:"none",delay:2});
    gsap.to('#portfolio',0,{display:"block",delay:.7});
    gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })
  $('#blog-link').on('click',function(){
    gsap.to('#navigation-content',0,{display:"none",delay:.7});
    gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
    gsap.to('#header',0,{display:"none"});
    gsap.to('#veille',0,{display:"none"});
    gsap.to('#certif',0,{display:"none"});
    gsap.to('#about',0,{display:"none"});
    gsap.to('#portfolio',0,{display:"none"});
    gsap.to('#contact',0,{display:"none"});
    gsap.to('#breaker',0,{display:"block"});
    gsap.to('#breaker-two',0,{display:"block",delay:.1});
    gsap.to('#breaker',0,{display:"none",delay:2});
    gsap.to('#breaker-two',0,{display:"none",delay:2});
    gsap.to('#blog',0,{display:"block",delay:.7});
    gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })
  $('#home-link').on('click',function(){
    if (document.getElementById('page-404')){
      window.location.href = "/index.html";
    }
    gsap.to('#navigation-content',0,{display:"none",delay:.7});
    gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
    gsap.to('#header',0,{display:"none"});
    gsap.to('#veille',0,{display:"none"});
    gsap.to('#certif',0,{display:"none"});
    gsap.to('#about',0,{display:"none"});
    gsap.to('#portfolio',0,{display:"none"});
    gsap.to('#contact',0,{display:"none"});
    gsap.to('#blog',0,{display:"none"});
    gsap.to('#breaker',0,{display:"block"});
    gsap.to('#breaker-two',0,{display:"block",delay:.1});
    gsap.to('#breaker',0,{display:"none",delay:2});
    gsap.to('#breaker-two',0,{display:"none",delay:2});
    gsap.to('#header',0,{display:"block",delay:.7});
    gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })
  $('#veille-link').on('click',function(){
    gsap.to('#navigation-content',0,{display:"none",delay:.7});
    gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
    gsap.to('#header',0,{display:"none"});
    gsap.to('#about',0,{display:"none"});
    gsap.to('#certif',0,{display:"none"});
    gsap.to('#blog',0,{display:"none"});
    gsap.to('#portfolio',0,{display:"none"});
    gsap.to('#breaker',0,{display:"block"});
    gsap.to('#breaker-two',0,{display:"block",delay:.1});
    gsap.to('#contact',0,{display:"none"});
    gsap.to('#breaker',0,{display:"none",delay:2});
    gsap.to('#breaker-two',0,{display:"none",delay:2});
    gsap.to('#veille',0,{display:"block",delay:.7});
    gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })
  $('#certif-link').on('click',function(){
    gsap.to('#navigation-content',0,{display:"none",delay:.7});
    gsap.to('#navigation-content',0,{y:'-100%',delay:.7});
    gsap.to('#header',0,{display:"none"});
    gsap.to('#about',0,{display:"none"});
    gsap.to('#veille',0,{display:"none"});
    gsap.to('#blog',0,{display:"none"});
    gsap.to('#portfolio',0,{display:"none"});
    gsap.to('#breaker',0,{display:"block"});
    gsap.to('#breaker-two',0,{display:"block",delay:.1});
    gsap.to('#contact',0,{display:"none"});
    gsap.to('#breaker',0,{display:"none",delay:2});
    gsap.to('#breaker-two',0,{display:"none",delay:2});
    gsap.to('#certif',0,{display:"block",delay:.7});
    gsap.to('#navigation-content',0,{display:'flex',delay:2});
  })

})
$(function(){
 var body =  document.querySelector('body');
 var $cursor = $('.cursor')
   function cursormover(e){
    
    gsap.to( $cursor, {
      x : e.clientX ,
      y : e.clientY,
      stagger:.002
     })
   }
   function cursorhover(e){
    gsap.to( $cursor,{
     scale:1.4,
     opacity:1
    })
    
  }
  function cursor(e){
    gsap.to( $cursor, {
     scale:1,
     opacity:.6
    }) 
  }
  $(window).on('mousemove',cursormover);
  $('.menubar').hover(cursorhover,cursor);
  $('a').hover(cursorhover,cursor);
  $('.navigation-close').hover(cursorhover,cursor);

})

var $animation_elements = $('.box');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
   
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('animated');
    } else {
      $element.removeClass('animated');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

$( document ).ready(function() {
  $(".friseA_btn").click(function() {
    if (!$(".friseA").is(":visible")) {
      $(".friseA").slideDown(250);
      if ($(".friseA").is(":visible")) {
        $(".friseA_btn").css('cursor', 'default');
      }
    }
    else {
      $(".friseA").slideUp(250);
    }
 });
});

$( document ).ready(function() {
  $(".friseB_btn").click(function() {
    if (!$(".friseB").is(":visible")) {
      $(".friseB").slideDown(250);
      if ($(".friseB").is(":visible")) {
        $(".friseB_btn").css('cursor', 'default');
      }
    }
    else {
      $(".friseB").slideUp(250);
    }
 });
});




// var monkeySVG = Snap("#monkey_404");

// var tail = monkeySVG.select("#tail");

// var numberZero = monkeySVG.select("#number_0");

/*tail.path('M142.4,520c3.5-24.3-36.8-21.1-34.6,7.7c2.7,35.7,39,35.4,68,14.6c17.3-12.5,24.5-2.9,30.6,1.8c3.7,2.7,10.7,5.3,17.6-4.8');*/

// var revert = function () {
//   tail.animate(
//     {
//       d:
//         "M89,315c2.2-15.2-23-13.2-21.6,4.8c1.7,22.3,24.4,22.1,42.5,9.1c10.8-7.8,15.3-1.8,19.1,1.1 c2.3,1.7,6.7,3.3,11-3"
//     },
//     1600,
//     mina.easeinout
//   );
// };

// setInterval(function () {
//   tail.animate(
//     {
//       d:
//         "M81,310c-8.8-6.5-20.8,6.5-15,18c7.4,14.5,22.5,10.8,31,3c9.8-9,18.9-5.6,22-2 c5.8,6.8,16.7,4.3,21-2"
//     },
//     1600,
//     mina.easeinout,
//     revert
//   );
// }, 3200);

$( document ).ready(function() {
  $(".btn_cv").click(function() {
    if (!$(".cv_doc").is(":visible")) {
      $(".cv_doc").slideDown(250);
      if ($(".cv_doc").is(":visible")) {
        $(".btn_cv").css('cursor', 'default');
      }
    }
    else {
      $(".cv_doc").slideUp(250);
    }
 });
});

$( document ).ready(function() {
  $(".btn_prjct").click(function() {
    console.log('sejityhç_');
    $(".btn_prjct").addClassList("btn_prjct_checked");
 });
});

// $('.button').click(function(){
//   var buttonId = $(this).attr('id');
//   $('#modal-container').removeAttr('class').addClass(buttonId);
//   $('body').addClass('modal-active');
// })

// $('#modal-container').click(function(){
//   $(this).addClass('out');
//   $('body').removeClass('modal-active');
// });







// Web Leb Logo Acceuil


const preload = () => {

	let manager = new THREE.LoadingManager();
	manager.onLoad = function() { 
	  const environment = new Environment( typo, particle );
	}
  
	var typo = null;
	const loader = new THREE.FontLoader( manager );
	const font = loader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', function ( font ) { typo = font; });
	const particle = new THREE.TextureLoader( manager ).load( 'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png');
  
  }
  
  if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll))
	preload ();
  else
	document.addEventListener("DOMContentLoaded", preload ); 
  
  class Environment {
  
	constructor( font, particle ){ 
  
	  this.font = font;
	  this.particle = particle;
	  this.container = document.querySelector( '#magic' );
	  this.scene = new THREE.Scene();
	  this.createCamera();
	  this.createRenderer();
	  this.setup()
	  this.bindEvents();
	}
  
	bindEvents(){
  
	  window.addEventListener( 'resize', this.onWindowResize.bind( this ));
	  
	}
  
	setup(){ 
  
	  this.createParticles = new CreateParticles( this.scene, this.font,             this.particle, this.camera, this.renderer );
	}
  
	render() {
	  
	   this.createParticles.render()
	   this.renderer.render( this.scene, this.camera )
	}
  
	createCamera() {
  
	  this.camera = new THREE.PerspectiveCamera( 65, this.container.clientWidth /  this.container.clientHeight, 1, 10000 );
	  this.camera.position.set( 0,0, 100 );
  
	}
  
	createRenderer() {
  
	//   this.renderer = new THREE.WebGLRenderer();
	  this.renderer = new THREE.WebGLRenderer({ alpha: true });
	  this.renderer.setClearColor(0x000000, 0); // couleur noire, alpha 0 (transparent)

	  this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
  
	  this.renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2));
  
	  this.renderer.outputEncoding = THREE.sRGBEncoding;
	  this.container.appendChild( this.renderer.domElement );
  
	  this.renderer.setAnimationLoop(() => { this.render() })
  
	}
  
	onWindowResize(){
  
	  this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
	  this.camera.updateProjectionMatrix();
	  this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
  
	}
  }
  
  class CreateParticles {
	  
	  constructor( scene, font, particleImg, camera, renderer ) {
	  
		  this.scene = scene;
		  this.font = font;
		  this.particleImg = particleImg;
		  this.camera = camera;
		  this.renderer = renderer;
		  
		  this.raycaster = new THREE.Raycaster();
		  this.mouse = new THREE.Vector2(-200, 200);
		  
		  this.colorChange = new THREE.Color();
  
		  this.buttom = false;
  
		  this.data = {
  
			  text: 'Benjamin\n  BOYER',
			  amount: 1500,
			  particleSize: 1,
			  particleColor: 0xffffff,
			  textSize: 10,
			  area: 250,
			  ease: .05,
		  }
  
		  this.setup();
		  this.bindEvents();
  
	  }
  
  
	  setup(){
  
		  const geometry = new THREE.PlaneGeometry( this.visibleWidthAtZDepth( 100, this.camera ), this.visibleHeightAtZDepth( 100, this.camera ));
		  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, transparent: true } );
		  this.planeArea = new THREE.Mesh( geometry, material );
		  this.planeArea.visible = false;
		  this.createText();
  
	  }
  
	  bindEvents() {
  
		  document.addEventListener( 'mousedown', this.onMouseDown.bind( this ));
		  document.addEventListener( 'mousemove', this.onMouseMove.bind( this ));
		  document.addEventListener( 'mouseup', this.onMouseUp.bind( this ));
		  
	  }
  
	  onMouseDown(){
		  
		  this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		  this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  
		  const vector = new THREE.Vector3( this.mouse.x, this.mouse.y, 0.5);
		  vector.unproject( this.camera );
		  const dir = vector.sub( this.camera.position ).normalize();
		  const distance = - this.camera.position.z / dir.z;
		  this.currenPosition = this.camera.position.clone().add( dir.multiplyScalar( distance ) );
		  
		  const pos = this.particles.geometry.attributes.position;
		  this.buttom = true;
		  this.data.ease = .01;
		  
	  }
  
	  onMouseUp(){
  
		  this.buttom = false;
		  this.data.ease = .05;
	  }
  
	  onMouseMove( ) { 
  
		  this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		  this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  
	  }
  
	  render( level ){ 
  
		  const time = ((.001 * performance.now())%12)/12;
		  const zigzagTime = (1 + (Math.sin( time * 2 * Math.PI )))/6;
  
		  this.raycaster.setFromCamera( this.mouse, this.camera );
  
		  const intersects = this.raycaster.intersectObject( this.planeArea );
  
		  if ( intersects.length > 0 ) {
  
			  const pos = this.particles.geometry.attributes.position;
			  const copy = this.geometryCopy.attributes.position;
			  const coulors = this.particles.geometry.attributes.customColor;
			  const size = this.particles.geometry.attributes.size;
  
			  const mx = intersects[ 0 ].point.x;
			  const my = intersects[ 0 ].point.y;
			  const mz = intersects[ 0 ].point.z;
  
			  for ( var i = 0, l = pos.count; i < l; i++) {
  
				  const initX = copy.getX(i);
				  const initY = copy.getY(i);
				  const initZ = copy.getZ(i);
  
				  let px = pos.getX(i);
				  let py = pos.getY(i);
				  let pz = pos.getZ(i);
  
				  this.colorChange.setHSL( .5, 1 , 1 )
				  coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
				  coulors.needsUpdate = true;
  
				  size.array[ i ]  = this.data.particleSize;
				  size.needsUpdate = true;
  
				  let dx = mx - px;
				  let dy = my - py;
				  const dz = mz - pz;
  
				  const mouseDistance = this.distance( mx, my, px, py )
				  let d = ( dx = mx - px ) * dx + ( dy = my - py ) * dy;
				  const f = - this.data.area/d;
  
				  if( this.buttom ){ 
  
					  const t = Math.atan2( dy, dx );
					  px -= f * Math.cos( t );
					  py -= f * Math.sin( t );
  
					  this.colorChange.setHSL( .5 + zigzagTime, 1.0 , .5 )
					  coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
					  coulors.needsUpdate = true;
  
					  if ((px > (initX + 70)) || ( px < (initX - 70)) || (py > (initY + 70) || ( py < (initY - 70)))){
  
						  this.colorChange.setHSL( .15, 1.0 , .5 )
						  coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
						  coulors.needsUpdate = true;
  
					  }
  
				  }else{
				  
					  if( mouseDistance < this.data.area ){
  
						  if(i%5==0){
  
							  const t = Math.atan2( dy, dx );
							  px -= .03 * Math.cos( t );
							  py -= .03 * Math.sin( t );
  
							  this.colorChange.setHSL( .15 , 1.0 , .5 )
							  coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
							  coulors.needsUpdate = true;
  
							  size.array[ i ]  =  this.data.particleSize /1.2;
							  size.needsUpdate = true;
  
						  }else{
  
							  const t = Math.atan2( dy, dx );
							  px += f * Math.cos( t );
							  py += f * Math.sin( t );
  
							  pos.setXYZ( i, px, py, pz );
							  pos.needsUpdate = true;
  
							  size.array[ i ]  = this.data.particleSize * 1.3 ;
							  size.needsUpdate = true;
						  }
  
						  if ((px > (initX + 10)) || ( px < (initX - 10)) || (py > (initY + 10) || ( py < (initY - 10)))){
  
							  this.colorChange.setHSL( .15, 1.0 , .5 )
							  coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )
							  coulors.needsUpdate = true;
  
							  size.array[ i ]  = this.data.particleSize /1.8;
							  size.needsUpdate = true;
  
						  }
					  }
  
				  }
  
				  px += ( initX  - px ) * this.data.ease;
				  py += ( initY  - py ) * this.data.ease;
				  pz += ( initZ  - pz ) * this.data.ease;
  
				  pos.setXYZ( i, px, py, pz );
				  pos.needsUpdate = true;
  
			  }
		  }
	  }
  
	  createText(){ 
  
		  let thePoints = [];
  
		  let shapes = this.font.generateShapes( this.data.text , this.data.textSize  );
		  let geometry = new THREE.ShapeGeometry( shapes );
		  geometry.computeBoundingBox();
	  
		  const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
		  const yMid =  (geometry.boundingBox.max.y - geometry.boundingBox.min.y)/2.85;
  
		  geometry.center();
  
		  let holeShapes = [];
  
		  for ( let q = 0; q < shapes.length; q ++ ) {
  
			  let shape = shapes[ q ];
  
			  if ( shape.holes && shape.holes.length > 0 ) {
  
				  for ( let  j = 0; j < shape.holes.length; j ++ ) {
  
					  let  hole = shape.holes[ j ];
					  holeShapes.push( hole );
				  }
			  }
  
		  }
		  shapes.push.apply( shapes, holeShapes );
  
		  let colors = [];
		  let sizes = [];
					  
		  for ( let  x = 0; x < shapes.length; x ++ ) {
  
			  let shape = shapes[ x ];
  
			  const amountPoints = ( shape.type == 'Path') ? this.data.amount/2 : this.data.amount;
  
			  let points = shape.getSpacedPoints( amountPoints ) ;
  
			  points.forEach( ( element, z ) => {
						  
				  const a = new THREE.Vector3( element.x, element.y, 0 );
				  thePoints.push( a );
				  colors.push( this.colorChange.r, this.colorChange.g, this.colorChange.b);
				  sizes.push( 1 )
  
				  });
		  }
  
		  let geoParticles = new THREE.BufferGeometry().setFromPoints( thePoints );
		  geoParticles.translate( xMid, yMid, 0 );
				  
		  geoParticles.setAttribute( 'customColor', new THREE.Float32BufferAttribute( colors, 3 ) );
		  geoParticles.setAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1) );
  
		  const material = new THREE.ShaderMaterial( {
  
			  uniforms: {
				  color: { value: new THREE.Color( 0xffffff ) },
				  pointTexture: { value: this.particleImg }
			  },
			  vertexShader: document.getElementById( 'vertexshader' ).textContent,
			  fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
  
			  blending: THREE.AdditiveBlending,
			  depthTest: false,
			  transparent: true,
		  } );
  
		  this.particles = new THREE.Points( geoParticles, material );
		  this.scene.add( this.particles );
  
		  this.geometryCopy = new THREE.BufferGeometry();
		  this.geometryCopy.copy( this.particles.geometry );
		  
	  }
  
	  visibleHeightAtZDepth ( depth, camera ) {
  
		const cameraOffset = camera.position.z;
		if ( depth < cameraOffset ) depth -= cameraOffset;
		else depth += cameraOffset;
  
		const vFOV = camera.fov * Math.PI / 180; 
  
		return 2 * Math.tan( vFOV / 2 ) * Math.abs( depth );
	  }
  
	  visibleWidthAtZDepth( depth, camera ) {
  
		const height = this.visibleHeightAtZDepth( depth, camera );
		return height * camera.aspect;
  
	  }
  
	  distance (x1, y1, x2, y2){
		 
		  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
	  }
  }
  
// --------------------------------------------------------------------------