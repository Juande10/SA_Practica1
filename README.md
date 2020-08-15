# Datos
Nombre: Juan de Dios Molina Herrera
Carnet: 201314412

# Practica2

Parte 1:
Repetir la práctica # 1 agregando credenciales tipo client_credentials y un token Bearer para poder volver a desarrollar el mismo ejercicio anterior (ahora requiere autenticación).  Documentación de client credentials.

Usuario / Client ID: sa
Client Secret: fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745
Parte 2:
Repetir la misma tarea # 1 utilizando SOAP y autenticación básica.

WSDL:   https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap&wsdl 
Usuario: sa
Contraseña: usac

## Dependencias
Aplicar el `npm install` para instalar las dependencias.

## Uso
Dirigirse a la carpeta asociada a la parte a verificar y ejecutar el comando `node index.js`. 
Acceder a la ruta `/genToken` para generar un token nuevo.
Acceder a la ruta `/getLista` para verificar los contactos en ambas partes.