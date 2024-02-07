# typescript-sandbox

Para la parte de cada módulo en la que te planteamos ejercicios con JavaScript puedes usar este sandbox.

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).
- Puedes empezar a meter tu código en el fichero:

# Bootcamp JS 2 - Laboratorio Módulo 3  - Variables

Este es el enunciado del laboratorio:

#### Grupos musicales
"Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

- The Beatles / 1960 / Activo: true / 🎵 Pop Rock
- Queen / 1970 / Activo: false / 🎸 Rock
- AC DC / 1973 / Activo: true / 🤘 Hard Rock
- Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
- The Rolling Stones / 1962 / Activo: true / 🎸 Rock

Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde."


Resolución del ejercicio:
1. He creado una interfaz "Grupo" con los siguientes datos y su correspondiente tipado: nombre:string, fundacion:number, enActivo:boolean y genero:string; 
2. He creado una variable let por cada genero musical. 
3. He creado una variable let styleNombre, con el estilo a aplicar a cada nombre de grupo.
4. He aplicado un especificador de formato al nombre de cada grupo. 
    Ej:  nombre: '%cThe Beatles'
4. He mostrado por consola el nombre de cada grupo, con el estilo especifíco de la variable "styleNombre", añadiendo al console otro parametro. 
    Ej: console.log(grupo1.nombre, styleNombre).
5. Por último he usado backticks para concatenar el resto propiedades de cada grupo y separarlos con /.
6. Una vez terminado el ejercicio, he borrado el directorio de git con: 
    rm -rf .git.
    - He iniciado el repo local con git init.
    - Me he creado un repositorio nuevo en github y he sincronizado mi repositorio local, con el repositorio remoto de github, con los siguientes comandos.
      git remote add origin "nombre del repo"
      git push -u origin main
