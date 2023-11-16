import { TaskStatus } from '../task.model';
import { IsString, IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
