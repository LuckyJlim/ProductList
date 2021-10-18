import {
  Model,
  DataTypes,
  Optional,
} from 'sequelize';

import { sequelize } from '../database';

interface ProductAttributes {
  id: number;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {
  name: string;
}

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: string;
  public description!: string;
  public imageUrl!: string;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: new DataTypes.STRING(64),
			allowNull: false,
		},
		description: {
			type: new DataTypes.STRING(128),
			allowNull: false,
		},
		price: {
			type: new DataTypes.STRING(32),
			allowNull: false,
		},
		imageUrl: {
			type: new DataTypes.STRING(256),
			allowNull: false,
		},
	},
	{
		tableName: 'products',
		sequelize,
	},
);