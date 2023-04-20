# E-commerce - Tienda de productos de artes marciales

Simula el flujo de un e-commerce, se obtienen los productos de una base de datos, se valida su stock. Se agregan al carrito y se crea una orden qye se almacena tambien en su propia colección. Se puede registar usuarios, hacer login, recuperar contraseña, el carrito es persistente. 

## Consigna
- Un usuario debe poder ingresar, navegar a los productos y ver sus detalles
- Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al carrito
- Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total.
- Al ingresar sus datos, debe activarse el botón de de realizar compra
- Al realizar compra, debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.

## Resultado
Se crean los flujos, componentes, rutas y validaciones necesarias para cumplir con la consigna, además se agregan componentes adicionales

### Página de inicio

Se crea una página de inicio para invitar al usuario a visitar la tienda, el navbar tiene varios componentes que se renderizan dependiendo de las acciones del usuario

<img width="1232" alt="Captura de pantalla 2023-04-20 a la(s) 02 43 29" src="https://user-images.githubusercontent.com/96588336/233282119-4e9d63d0-53df-42a3-9494-8dda72aa6f2b.png">

- El CartWidget se renderiza condicionalmente si el usuario agrega un ítem al carrito

- El Widget de usuario se renderiza condicionalmente: Si el usuario está logueado, lo lleva a la sección "Mis compras" que contiene un historial de las compras que ha realizado. Si el usuario no está logueado, lo dirige a la página de login

<img width="895" alt="Captura de pantalla 2023-04-20 a la(s) 03 06 36" src="https://user-images.githubusercontent.com/96588336/233287530-eb815477-c758-41e5-9cc7-5cbb618ca406.png">


- El ícono de logout se renderiza condicionalmente, solo se muestra si el usuario está logueado para permitirle cerrar sesión

### Tienda
En la página de Tienda se renderizan los productos que se obtienen desde una base de datos alojada en Firebase

Contiene un menú que filtra las categorías y renderiza los productos con base en estos filtros

<img width="968" alt="Captura de pantalla 2023-04-20 a la(s) 02 50 51" src="https://user-images.githubusercontent.com/96588336/233283985-1d2e914f-4bf5-4633-978a-3aefc5f04a31.png">

### Detalle del producto

En la vista del detalle se muestra la foto y la descripción del producto, su precio y el componente para agregar el producto al carrito

<img width="1124" alt="Captura de pantalla 2023-04-20 a la(s) 02 55 24" src="https://user-images.githubusercontent.com/96588336/233284991-4f6f3058-0cb2-48f5-9e88-b553c6e5a906.png">

Además este componente tiene varios parámetros para mostrar diferentes cosas dependiendo del stock del producto o de si ya está agregado al carrito

- Si ya está agregado al carrio, te da la opción de ir al carrito o volver a la tienda

<img width="343" alt="Captura de pantalla 2023-04-20 a la(s) 02 57 17" src="https://user-images.githubusercontent.com/96588336/233285368-e8d29041-7855-47af-8a86-d1076f14e37f.png">

- Si queda poco stock te avisa con un mensaje

<img width="877" alt="Captura de pantalla 2023-04-20 a la(s) 02 58 18" src="https://user-images.githubusercontent.com/96588336/233285584-6f2c90c5-83c1-4dfe-bd69-9d59ca49755f.png">

 - Además, los botones de sumar o restar la cantidad se deshabilitan en caso de que se seleccione la cantidad mínima (1) o máxima (stock máximo) 

<img width="318" alt="Captura de pantalla 2023-04-20 a la(s) 02 59 16" src="https://user-images.githubusercontent.com/96588336/233285802-adecacbc-3a4a-46bf-9347-45d8fd721992.png">

- Si el producto está agotado, se deshabilita el componente de agregegar al carrito y en su lugar se renderiza un botón para volver a la tienda

<img width="792" alt="Captura de pantalla 2023-04-20 a la(s) 03 05 02" src="https://user-images.githubusercontent.com/96588336/233287053-8d0cb573-c6b8-4c63-a690-34169a788753.png">


### Resumen de la compra
Al finalizar la compra, se genera una orden que se guarda en la base de datos y se entrega un resumen de la compra

<img width="660" alt="Captura de pantalla 2023-04-20 a la(s) 03 03 01" src="https://user-images.githubusercontent.com/96588336/233286656-54ea7732-2662-44e8-be7c-96b1a376691d.png">

### Formularios

Se crean formularios para Registro de usuario, Login, Recuperar contraseña y terminar compra. 

En el caso de los tres primeros, se puede cambiar fácilmente entre estos según las necesidades del usuario 

<img width="569" alt="Captura de pantalla 2023-04-20 a la(s) 03 12 46" src="https://user-images.githubusercontent.com/96588336/233288893-ba0fe598-b46f-4ed0-ac34-9f2898d38e66.png">

Además se hacen validaciones para evitar errores en los datos y se muestran estos errores al usuario para que pueda tomar acción

<img width="492" alt="Captura de pantalla 2023-04-20 a la(s) 03 15 22" src="https://user-images.githubusercontent.com/96588336/233289331-8726d212-85a4-4b35-927d-a88b02cf9145.png">

### Carrito, compras e historial de órdenes persistente

Los usuarios se almacenan en la base de datos y cada usuario tiene un carrito y un historial de órdenes asociado, por lo que podrá verlos cada vez que se loguée

### Recuperación de contraseña

Finalmente, se incorporó la opción de recuperar contraseña, al usuario se le envía un correo con el enlace de recuperación

![Captura de pantalla 2023-04-20 a la(s) 03 21 17](https://user-images.githubusercontent.com/96588336/233290941-327ed9ac-f42f-43f8-a526-541c397086db.png)



