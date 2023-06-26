const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
   },
    height:{
    type: DataTypes.STRING,
    allowNull: false
  },
  weight: {
      type: DataTypes.STRING,
      allowNull: false
   },
   life_span:{
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.TEXT,
     allowNull: true
   },
    createdindb: {
     type: DataTypes.BOOLEAN,
     allowNull:false, 
     defaultValue: true
 }
  });
};


/* [ ] Raza con las siguientes propiedades:
ID *
Nombre *
Altura *
Peso *
Años de vida
[ ] Temperamento con las siguientes propiedades:
ID
Nombre */