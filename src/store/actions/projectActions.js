export const createProject = (project) => {
    return (dispatch, getState) => {
        
        // make asyc call to database
        dispatch({ type: 'CREATE_PROJECT', project });
    }
};