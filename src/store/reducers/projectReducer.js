const initState = {
    projects: [
        {id: '1', title: 'help me find poech', content: 'blas nlash blash'},
        {id: '2', title: 'collect all the stars', content: 'I do not understard what is all about'},
        {id: '3', title: 'Hip Hop', content: 'Hip hop musch started is a cullter'}
    ]
}

const projectReducer = (state = initState, action) =>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state
    
    }
}

export default projectReducer;