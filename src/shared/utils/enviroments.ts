import dotenv from 'dotenv'
dotenv.config()

export const { 
  PORT,
  TYPEORM_TYPE,
  TYPEORM_HOST,
  TYPEORM_PORT,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_DATABASE,  
} = process.env