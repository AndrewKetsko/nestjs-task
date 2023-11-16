import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from 'src/tasks/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '123',
  database: 'taskmanagement',
  entities: [Task],
  synchronize: true,
};
