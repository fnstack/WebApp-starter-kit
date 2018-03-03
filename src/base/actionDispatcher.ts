// import {AsyncActionCreators, ActionCreator} from 'typescript-fsa';

// /**
//  * Redux dispatcher class using async function
//  *
//  * @export
//  * @class ActionDispatcher
//  */
// export class ActionDispatcher {
//   // tslint:disable-next-line:ban-types
//   private dispatch: Function;
//   // tslint:disable-next-line:ban-types
//   constructor(dispatch: Function) {
//     this.dispatch = dispatch;
//   }

//   public dispatchAsyncAction(action: AsyncActionCreators<{}, {}, {}>, args: object) {
//         this.dispatch(action.started(args));
//   }

//   public dispatchAction(action: ActionCreator<{}>, args: object) {
//         this.dispatch(action(args));
//   }
// }
