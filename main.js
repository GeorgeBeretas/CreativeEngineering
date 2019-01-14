var content = ["<lu><li>Αδειες δόμησης</li><li>άδειες λειτουργίας</li><li>Μελέτες υγειονομικού</li><li>Mελετες πυροπροστασίας</li><li>Τεχνικός ασφαλείας</li></lu>","<lu><li>Βιώσιμη ανάπτυξη</li><li>Ενεργειακή αναβάθμιση</li><li>Πιστοποιητικά</li><li>Εξοικονόμηση κατ'οίκον</li></lu>","<lu><li>Τακτοποιήσεις</li><li>Σχέδια πολεοδομίας</li><li>Βεβαιώσεις μηχανικού</li><li>Κτηματολόγιο</li></lu>","<lu><li>Εκτιμήσεις ακινήτων</li><li>Τεχνικοοικονομικές μελέτες</li><li>Διαχείριση ακινήτων</li></lu>","<lu><li>Σχεδιασμός</li><li>Μελέτη</li><li>Κατασκευή</li><li>Διαχείριση έργου</li></lu>"];
var counter = 0;
var inst = setInterval(change, 4000);

function change() {
	var test = document.getElementById("changeText");
	test.innerHTML = content[counter];
	counter++;
	if (counter >= content.length) {
		counter = 0;
		//clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
	}
	
}

(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 6000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();
