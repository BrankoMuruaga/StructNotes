import { DataTypes, Model } from "sequelize";
import sequelize from "@db/index"; // Importa la conexión a la BD

class Document extends Model {}

Document.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contenido: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Document",
  }
);

// Sincronizar el modelo con la base de datos
sequelize.sync({ force: false });

export default Document;
