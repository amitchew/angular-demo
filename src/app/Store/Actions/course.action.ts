import { Action } from '@ngrx/store';
import { Data } from '../models/CourseItem.model';
export enum DataActionType {
  ADD_ITEM = '[COURSE] Add Course',
}
export class AddDataAction implements Action {
  readonly type = DataActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: Data) {}
}
export type DataAction = AddDataAction;