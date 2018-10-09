export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        // make asyc call to database
        dispatch({ type: 'CREATE_PROJECT', project });
    }
};