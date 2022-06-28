# Como usarlo
El uso es muy simple, por cada archivo que carguemos tenemos que crear un nuevo objeto (aunque después puede ser un archivo que contiene varias pistas) y le tenemos que pasar como argumento un objeto con todos los parámetros del audio. Este es un ejemplo del código básico para reproducir un bucle de audio:

var sonido = new Howl({
  urls: ['sonido.mp3', 'sonido.ogg', 'sonido.wav'],
  autoplay: true,   // true = se autoejecuta
  loop: true,       // true = bucle de audio
  volume: 0.5,      // Nivel del volumen [0-1]
  onend: function() {   // Se ejecuta al finalizar la pista
    alert('Fin');
  }
})

En el siguiente supuesto usaríamos dos sonidos de audio, de distinto formato por mantener la compatibilidad con todos los navegadores y lo dividiremos en varias pistas (aplauso, disparo y sirena).

var sonido = new Howl({
  urls: ['sonido.mp3', 'sonido.ogg'],
  sprite: {
    aplauso: [0, 2000],
    disparo: [2000, 200],
    sirena: [5000, 5000]
  }
})
// Reproducimos todo el archivo con este método
sonido.play()
// Reproducimos desde los 2s durante 200ms (aplauso)
sonido.play('aplauso')

El objeto sprite contiene las distintas pistas de audio, el primer parámetro pertenece al inicio de la pista y el segundo parámetro a la duración, todo en milisegundos. Lo reproduciremos con el método play() (en este caso sonido.play('aplauso')), de la misma forma que podemos reproducir cualquier archivo de audio, incluso varios al mismo tiempo.

# https://howlerjs.com/
![image](https://user-images.githubusercontent.com/53632260/176107292-9403ecff-6163-4bb9-b25b-e4718d7f60ee.png)
