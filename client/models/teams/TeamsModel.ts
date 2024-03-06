import sequelizeInstance from "@/lib/database/dbConnect";
import { DataTypes, Model, Optional, ModelAttributes } from "sequelize";

export interface TeamAttributes {
    id?: number;
    name: string;
    position: string;
    department: string;
    specialisation: string;
    image: string;
    social_media: string;
    email: string,
    about: string;
    language: string;
}

interface TeamCreationAttributes extends Optional<TeamAttributes, 'id'> { }

export interface TeamModel extends Model<TeamAttributes, TeamCreationAttributes>, TeamAttributes { }

const Team = sequelizeInstance.define<TeamModel>('team', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    specialisation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },
    social_media: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    language: {
        type: DataTypes.STRING,
    },

}, {
    timestamps: true
})

Team.sync();

export default Team