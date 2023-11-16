import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Task } from 'src/tasks/task.entity';

@Injectable()
export class DatabaseOptions implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: '123',
      database: 'taskmanagement',
      entities: [__dirname + '/../**/*.entity.ts'],
      synchronize: true,
    };
  }
}
