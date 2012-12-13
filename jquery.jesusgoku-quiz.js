/*
*/
(function($) {
	$.fn.JesusGokuQuiz = function( custom )
	{
		var defaults = {
			questions: []
			, width: 600
			, height: 300
			, padding: 20
			, limit: false
			, btn_result_text: 'Resultado'
			, onResult: function( points ) {
				alert( points );
			}
		};

		var options = $.extend( {}, defaults, custom );

		this.each( function() {
			var _this = $(this);
			var html = '';

			_this.addClass('quiz').data('points', 0).css({
				width: options.width
				, height: options.height
			});

			options.questions = _.shuffle( options.questions );
			if( options.limit && options.limit < options.questions.length )
			{
				options.questions = _.initial( options.questions, options.questions.length - options.limit );
			}
			$.each( options.questions, function() {
				html 	+= '<div class="question-wrapper" style="width: ' + (options.width - options.padding * 2) + 'px; height: ' + (options.height - options.padding * 2) + 'px; padding: ' + options.padding + 'px;">'
						+  '<h3 class="question">' + this.question + '</h3>'
						+  '<ol class="answers">';

				this.answers = _.shuffle( this.answers );
				$.each( this.answers, function() {
					html 	+= '<li class="answer">'
							+  '<a href="#" data-points="' + this.points + '">' + this.text + '</a>'
							+  '</li>';
				});

				html += '</ul></div>';

			});

			html 	+= '<div class="question-wrapper" style="width: ' + (options.width - options.padding * 2) + 'px; height: ' + (options.height - options.padding * 2) + 'px; padding: ' + options.padding + 'px;">'
					+  '<button type="button"> ' + options.btn_result_text + '</button>'
					+  '</div>';

			_this.html( html );

			_this.on('click', '.answer a', function(e) {
				e.preventDefault();
				var $this = $(this);
				var points = parseInt( $this.data('points') );
				_this.data('points', parseInt( _this.data('points') ) + points );
				$this.closest('div.question-wrapper').slideUp();
				$this.blur();
			});

			_this.on('click', 'button', function(e) {
				e.preventDefault();
				// var $button = $(this);
				// var button_width = $button.width();
				// var button_height = $button.height();
				// $button.css({
				// 	'margin-top': '-' + (button_height / 2) + 'px'
				// 	, 'margin-left': '-' + (button_width / 2) + 'px'
				// });
				options.onResult( parseInt( _this.data('points') ) );
			});

		});

		return this;
	}
})(jQuery);