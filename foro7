 

Desarrollo de Aplicaciones Web 


Foro 3
Realice una consulta de la implementan de los métodos POST, DELETE Y PUT. adicional comente sobre los Header y Body dentro de la función  FETCH().

Materia: Aplicaciones Web I 
Estudiante: Jhosuet Dávalos




 
Método HTTP GET:
Se encarga de extraer recursos del backend, api, servidor. Realiza una petición a un recurso específico. No permite el envió de datos a excepción si dichos datos se envían como parámetro en la Url que realiza la petición. Esta petición retorna tanto la cabecera como el contenido. Ahora, este método GET puede retornar una respuesta en formato HTML, JSON, XML, Imágenes o JavaScript. Semánticamente se utiliza para consultar información como una SELECT a la base de datos, se puede filtrar datos empleando los datos enviados por la Url. Por otro lado, violando la semántica; los datos enviados por la Url se pueden usar para otros fines como una inserción, actualización y eliminación de un registro.
Método HTTP POST:

Se encarga de guardar información en nuestra api o en nuestro backend mediante una petición http que se haga para guardar una serie de recursos como imágenes , registros, usuarios. Este puede enviar datos al servidor por medio del cuerpo (body) y nada por la Url como se emplea en el método GET. El tipo de cuerpo de solicitud se define en la cabecera Content-Type. Semánticamente se utiliza para registrar información, similar al INSERT de datos a nivel de base de datos. A pesar de eso se puede forzar este método de petición HTTP para otras acciones como actualización, eliminación de registro, como carga de archivos, etc. También, se emplea para acciones que no tienen relación con el registro de información se debe considerar que el método POST no es  Idempotente, es decir cada petición realiza un cambio diferente en el recurso del servidor web.  El POST usa enviando los datos por formularios, formato JSON entre otros. Si se compara con las sentencias SQL es similar a un INSERT.

Método HTTP PUT:

Sirve para actualizar recurso de nuestro backed , para editar información , modificar registros de la base de datos, cualquier cosa que implique actualización. Es decir puede ser ejecutado varias veces y tiene el mismo efecto, caso contrario a un POST que cada vez que se ejecuta realiza la agregación de un nuevo objeto, ya que semánticamente es como una inserción de un nuevo registro. Semánticamente el método HTTP PUT se utiliza para la actualización de información existente, es semejante a un UPDATE de datos a nivel de base de datos. Los requests de un PUT usualmente se envían los datos por formularios, formato JSON entre otros. Si se compara con las sentencias SQL es similar a un UPDATE.

Método HTTP DELETE:

Como su nombre lo indica se utiliza para eliminar recursos del backend, eliminar registros de la base de datos, borrar contenido del servidor, puede ser ejecutado varias veces y tiene el mismo efecto similar al PUT y GET. Semánticamente se utiliza para eliminar de información existente, es semejante a un DELETE de datos a nivel de base de datos.







FETCH

La API FETCH proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
Este tipo de funcionalidad se conseguía previamente haciendo uso de XMLHttpRequest.
Header

La interfaz Header te permite crear tus propios objetos de headers mediante el constructor Headers( )
Un objeto headers es un simple multi-mapa de nombres y valores:
Todos los métodosde de headers lanzan un TypeError si un nombre de cabecera no es un nombre de cabecera HTTP válido. Las operaciones de mutación lanzarán un TypeError si hay un guarda inmutable Si no, fallan silenciosamente.
Por ejemplo:
var myResponse = Response.error();
try {
  myResponse.headers.set("Origin", "http://mybank.com");
} catch(e) {
  console.log("Cannot pretend to be a bank!");
}
Un buen caso de uso para headers es comprobar cuando el tipo de contenido es correcto antes de que se procese:
fetch(myRequest).then(function(response) {
  var contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(function(json) {
      // process your JSON further
    });
  } else {
    console.log("Oops, we haven't got JSON!");
  }
});






Body

Tanto las peticiones como las respuestas pueden contener datos body. Body es una instancia de cualquiera de los siguientes tipos:
ArrayBuffer, ArraybufferView, Blob, String, UrlSerchParams, FormData 
El mixin de Body define los siguientes metodos para extraer un body (implementado por Request and Response). Todas ellas devuelven una promesa que es eventualmente resuelta con el contenido actual.
ArrayBuffer(), ArraybufferView(), Blob(), String(), UrlSerchParams(), FormData()
Este hace uso de los datos no texttuales mucho mas facil que si fuera con XHR.
Las peticiones body pueden ser establecidas pasando el parametro body:
var form = new FormData(document.getElementById('login-form'));
fetch("/login", {
  method: "POST",
  body: form
});
Tanto peticiones y respuestas (y por extensión la function fetch()), intentaran inteligentemente determinar el tipo de contenido. Una petición tambien establecerá automáticamente la propiedad Context-Type de la cabecera si no es ha establecido una.




