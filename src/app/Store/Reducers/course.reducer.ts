// import the interface
import { Data } from '../models/CourseItem.model';
import { DataAction, DataActionType } from '../Actions/course.action';
//create a dummy initial state
const initialState: Array<Data> = [
  {
    id: '',
    title:'',
    userId:'',
    body:'',
    name: '',
  },
];
export function DataReducer(
  state: Array<Data> = initialState,
  action: DataAction
) {
  switch (action.type) {
    case DataActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}