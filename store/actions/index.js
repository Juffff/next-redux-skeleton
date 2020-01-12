import axios from 'axios';

const actionTypes = {
    testAction: 'TEST_ACTION'
};

export const testAction = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(data => {
        return dispatch({ type: actionTypes.testAction, data: data.data })
    })
};