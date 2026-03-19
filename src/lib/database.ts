import { DataSource } from 'typeorm'
import { User } from '@/entities/User'

const DATABASE_URL = process.env.DATABASE_URL || 'file:./dev.db'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: DATABASE_URL.startsWith('file:') ? DATABASE_URL.slice(5) : DATABASE_URL,
  entities: [User],
  synchronize: true, // In production, set to false and use migrations
  logging: false,
})

// Initialize the data source on server start if needed
AppDataSource.initialize().catch((error) => console.error(error))