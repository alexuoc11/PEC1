## Enunciado y respuestas Ejercicio 1

**La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)**

    1. ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.
   
        Podemos encontrar muchas ventajas, pero creo que algunas pueden ser practicidad, complicidad con el estilo y ademas poder especificar al buscador ciertas caracteristicas.

        Practicidad: Nuestro codigo queda mucho más organizado y sobretodo es mucho más entendible para que un desarrollador externo ya que sera capaz de identificar cada parte mucho mas rápido. 

        Complicidad con el estilo: Utilzar etiquetas semánticas nos permite poder editar el estilo de una manera mucho más sencilla ya que si por ejemplo queremos editar el estilo de todos los párrafos, en el css solo tendremos que editar el estilo de la etiqueta <p>.

        Caracteristicas para el buscador: Otra ventaja es que podremos especificarle al buscador el formato de cualquier texto, imagen, etc... De tal manera si queremos especificarle por ejemplo que una frase tiene que destacar por encima de toda la pagina y tener el texto más grande, solamente tendremos que poner la etiqueta <h1>.

    2. **Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.**
   
        YouTube Player API: Esta API nos permite insertar un reproductor de YouTube y manejarlo mediante Javascript. Este reproductor se inserta mediante el TAG de <iframe>.

        ExchangeRate-API: Esta nos permite, a partir de especificar una moneda, ver cual es la diferencia con otra moneda. Por ejemplo si le pedimos a la API la moneda 'EUR' nos devolverá el equivalente en otra moneda (ej: 1,12 USD).

        Twitter API: Mediante este API podemos conseguir información de Twitter, como pueden ser Tweets o Ads. Existen una variedad de opciones de acceso; Estandar, Elevated, Elevated+ y Academic Research.

    3. Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).
   
        Nos facilita la opcion '@media screen', que por ejemplo, si tenemos una pantalla de tablet grande deberiamos poner:

        ```
        @media screen and (max-width: 991px) {
            /* Aquí van los estilos para tablets grandes */
        }
        ```

    4. Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).
   
        Decorators: Son funciones que nos permiten decorar mediante una expresion y unos argumentos.

        Programación orientada a objetos: Nos permite crear y manejar clases, heredar,... Y eso lo convierte en un lenguaje sólido.

        Reciente: Es un lenjuage reciente que nos permite que nos ofrece herramientas muy útiles como por ejemplo que una variable tenga dos tipos diferentes. Por ejemplo:
        ```
        let i : string | number
        ```

        Flexibilidad: Siguiendo con el ejemplo anterior, Typescript nos permite definir una variable con un tipo y a la vez si queremos decirle que el tipo de la variable es 'any'. Como este ejemplo hay muchos y por lo tanto podemos decir que es un lenguaje flexible.
        



**El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)**

    1. Cita al menos 2 de estos preprocesadores.
   
        SASS y Less

    2. Cita al menos 4 ventajas que ofrecen estos preprocesadores.
   
        Códigos más organizados: Con la mejora de la funcion @import, es posible tener todo el codigo maás organizado y en diferentes ficheros.

        Reutilización de código: El hecho de tener todo tu codigo separado en ficheros hace que sea mucho más sencillo importar una parte y reutilizarla sin ningun tipo de problema.

        Más fácil de mantener: Al tenerlo todo mucho mejor organizado, mantener el codigo se hace una tarea mucho más sencilla ya que sabremos donde esta cada parte y cada función.

        Variables: Permite almacener unas variables para después si queremos utilizarlo.

    3. Explica brevemente en qué consisten los sourcemaps.

        Para cada uno de los ficheros CSS, los preprocesadores generan un fichero .map, el cual es un JSON que define un mapa entre cada declaración de CSS y su respectiva linea en el fichero del preprocesador.
   
    4. Explica qué es un transpilador.

        Es un compilador que es capaz de traducir de un lenguaje a otro que sea similar o que tenga un nivel de abstracción parecido.

**El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).**

    1. Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.

        Control de versiones: Github y SVN.
        Gestión de modulos: Control de inventario y Reposicion de inventario.

    2. Cita y explica al menos 3 comandos de Git.

        git status: Nos muestra el estado de nuestro repositorio, cuales estan guardados en git y cuales aun no estan sincronizadas con el repositorio.

        git push: Subir una nueva version de repositorio.

        git pull: Descargarnos la ultimo version de un repositorio en local,

    3. Cita y explica brevemente las características más definitorias de WebPack.

        Webpack se ejecuta en Node.js, un tiempo de ejecución de JavaScript que se puede usar en ordenadores y servidores fuera de un entorno de navegador. Las principales caracteristicas son:
        
        Podremos manejar los archivos que utilizamos para el desarrollo de una web o aplicación.
        Para Webpack cada uno de los archivos es como un módulo.
        Por medio de los loaders podremos manipular cualquier tipo de fichero, no solo Javascript.
        Permite separar el código de la aplicación para que la página no cargue elementos que no sean necesarios sino hasta que se necesiten.
 