Clona el repositorio

git clone [url-del-repositorio]
Instala las dependencias NPM

npm install
Configura las variables de entorno

Copia el archivo .env.example a .env y ajusta las variables según tu entorno.

Ejecuta la aplicación

npm run start


Filtrado de mensajes
URL: /mensajes/filter

Método: GET

Parámetros de consulta:

year (opcional): el año en el que se filtrarán los mensajes.
month (opcional): el mes en el que se filtrarán los mensajes.
idCliente (opcional): el ID de cliente para filtrar los mensajes.
isActive (opcional): filtra los mensajes activos () o inactivos ().10
Ejemplo de solicitud:


http://localhost:3000/mensajes/filter?year=2023&month=2&idCliente=2&isActive=1
Respuesta esperada:

La respuesta es una matriz de objetos de mensaje que coinciden con los criterios especificados.
Cada objeto incluye detalles como el ID del mensaje, el usuario, el estado de envío, la fecha y hora de envío, el contenido del mensaje, los detalles de la campaña y el estado activo.


[
    {
        "idMensaje": 2,
        "usuario": "user2",
        "estadoEnvio": 2,
        "fechaHoraEnvio": "2023-02-15T16:05:00.000Z",
        "mensaje": "Message 2",
        "estado": 1,
        "campania": {
            "idCampania": 2,
            "nombre": "Campaign 2",
            "fechaHoraProgramacion": "2023-02-15T16:00:00.000Z",
            "estado": 1
        }
    }
]




























Uso
Descripción de cómo usar el sistema, con ejemplos de los endpoints y sus respuestas esperadas.

Actualizar Tipo de Cambio
URL: /currency-exchange/update-rate
Método: POST
Cuerpo de la solicitud:
json
{
  "sourceCurrency": "USD",
  "targetCurrency": "PEN",
  "exchangeRate": 3.5
}
Respuesta de éxito:
json

{
  "id": 1,
  "sourceCurrency": "USD",
  "targetCurrency": "PEN",
  "exchangeRate": 3.5
}


npm run test

Tecnologia:

NestJS
SQL Server
TypeORM
