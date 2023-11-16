import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { TypeOrmExModule } from 'src/config/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([TaskRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
