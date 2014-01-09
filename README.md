#datefmt

Date format lib

### Usage

Uses php style date format.

```javascript
var date = new Date(2013, 4, 8);
datefmt('%j %D %l', date); // 8 Wed Wednesday
```

```javascript
var date = new Date(2013, 0, 6);
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

datefmt.translate(months, days);
datefmt('%F', date); //Enero
datefmt('%l', date); //Lunes
```