const actions={
    RENDER_AREA:'RENDER_AREA',
    LOAD_AREA :'LOAD_AREA',
    ADD_NOTES:'ADD_NOTES',
    RENDER_NOTES:'RENDER_NOTES',
    renderArea : area=>({
        type: actions.RENDER_AREA,
        payload:{area}
    }),
    parseArea : (result)=>({
        type: actions.LOAD_AREA,
        result
    }),
};

export default actions;