import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";

export class Task extends Model {
   public id!: number;
   public title!: string;
   public description?: string;
   public done!: boolean;
}

Task.init(
   {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      title: {
         type: new DataTypes.STRING(128),
         allowNull: false,
      },
      description: {
         type: new DataTypes.STRING(255),
         allowNull: true,
      },
      done: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: false,
      },
   },
   {
      tableName: "tasks",
      sequelize,
   }
);
