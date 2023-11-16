import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CustomRepository } from 'src/config/typeorm-ex.decorator';

@CustomRepository(Task)
export class TaskRepository extends Repository<Task> {}
