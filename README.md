Clona el repositorio

git clone [url-del-repositorio]
Instala las dependencias NPM

npm install
Configura las variables de entorno

Copia el archivo .env.example a .env y ajusta las variables según tu entorno.

Ejecuta la aplicación

npm run start

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