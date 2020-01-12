export default (state = null, action) => {
    switch (action.type) {
        case 'TEST_ACTION':
            return Object.assign({}, {data: action.data});
        default:
            return state;
    }
}