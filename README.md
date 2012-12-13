# JesusGoku Quiz - jQuery Plugin

Un sencillo plugin jQuery para poder crear quiz de preguntas, donde cada respuesta tiene asociada un puntaje y al final tomar una decision en base a ese puntaje.

## Dependencias

El plugin depende de la libreria [undescore-js](http://underscorejs.org)

## Estilos

Al plugin lo acompaña una hoja de estilos en SCSS para poder cambiar facilmente el color de fondo y todo.

## Implementación

	<link rel="stylesheet" href="jquery.jesusgoku-quiz.css">
	<script type="text/javascript" src="jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="underscore-min.js"></script>
	<script type="text/javascript" src="jquery.jesusgoku-quiz.js"></script>
	<script type="text/javascript">
		$(function() {
			$('#quiz').JesusGokuQuiz({
				  width: 600 // Ancho del contenedor - Default: 600
				, height: 300 // Alto del contenedor - Default: 300
				, padding: 20 // Relleno del contenedor - Default: 20
				, limit: 5 // Preguntas a mostrar - Default: false (se muestran todas)
				, btn_result_text: '¡Como te fue!' // Texto del boton - Default: Resultados
				, questions: [ // Arreglo con las preguntas del quiz
					{
						  question: '' // Pregunta
						, answers: [ // Arreglo con las posibles respuestas
							{
								  text: '' // Texto de la respuesta
								, points: 0 // Puntaje que le da la respuesta
							}
						]
					}
				]
				, onReady: function( points ) { // Funcion llamada al presionar el boton de resultado
					// Accion a realizar en base a los puntos.
				}
			});
		});
	</script>

## Desarrollo

[Jesus Urrutia](http://jesusurrutia.com) / Desarrollador Web