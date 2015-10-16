/**
	* Pixel représente un pixel dans le cadre de dessin
	* @param {number} x 		position horizontale
	* @param {number} y 		position verticale
	* @param {number} size 		taille du pixel
	* @param {string} color 	couleur du pixel
**/

function Pixel (size, color, posX, posY) {
	this.$el = $('<div class="pixel"></div>');
	this.set_color(color || 'red');
	this.set_size(size || 50);
	this.set_position(posX, posY);

	/*$('#drawArea').append(this.$el);*/
}

Pixel.prototype = {
	/**
	* @param {number} size 		taille du pixel
	**/
	set_size: function(size) {
		this.size = size;
		this.$el.css({
			width 				: this.size+'px',
			height				: this.size+'px',
		});
	},
	/**
	* @param {number} x 		position horizontale
	* @param {number} y 		position verticale
	**/
	set_position: function(posX, posY) {
		this.posX = posX;
		this.posY = posY;
		this.$el.css({
			left	: (this.posX - 1) * this.size + 'px',
			top 	: (this.posY - 1) * this.size + 'px',
		});
	},
	/**
	* @param {string} color 	couleur du pixel
	**/
	set_color: function(color) {
		this.color = color;
		this.$el.css('background-color', this.color);
	},
	
};
