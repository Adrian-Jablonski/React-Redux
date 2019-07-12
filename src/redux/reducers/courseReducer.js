export default function courseReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_COURSE":
            //state.push(action.course); // don't do this

            //Clones state and course passed in to create an array that contains all existing courses plus the additional course passed in on our action
            return [...state, { ...action.course }]; // returned value from reducer becomes the new state // updates redux store by added action passed in
        default:
            return state; // if the reducer receives an action that it doesn't care about, it should return the unchanged state
    }
}
