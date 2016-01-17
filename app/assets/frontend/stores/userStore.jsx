import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"
import AppEventEmitter from "./AppEventEmitter";

let _users = [];

class UserEventEmitter extends AppEventEmitter {

  getAll() {
    return _users;
  }

}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
    switch(action.actionType) {

      default:
        // no op
    }
})

export default UserStore;
