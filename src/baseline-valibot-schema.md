```typescript
import { object, optional, parse, type Input, type Output } from 'valibot';

export const TaskManagerSchema = optional(object({}), {});

export function create_task_manager() {
 let state = $state(get_task_manager({}));
 // TODO: Computed Example with Valibot Parse

 // NOTE: Data may come from local storage.
 function set_state(value: any) {
  state = parse(TaskManagerSchema, value);
 }

 return {
  get state() {
   return state;
  },
  set_state
 };
}

export let task_manager = create_task_manager();

export type TaskManagerArgs = Input<typeof TaskManagerSchema>;
export type TaskManager = Output<typeof TaskManagerSchema>;

export function get_task_manager(input: TaskManagerArgs): TaskManager {
 return parse(TaskManagerSchema, input);
}
```
