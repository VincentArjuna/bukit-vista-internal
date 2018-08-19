const actions = {
  RENDER_NOTES:'RENDER_NOTES',
  RENDER_NOTES_SUCCESS:'RENDER_NOTES_SUCCESS',
  ADD_NOTES:'ADD_NOTES',
  ADD_NOTES_SUCCESS:'ADD_NOTES_SUCCESS',
  renderNotes:(bookingId)=>({
    type:actions.RENDER_NOTES,
    payload:{bookingId}
  }),
  renderNotesSuccess:(results)=>({
    type:actions.RENDER_NOTES_SUCCESS,
    results
  }),
  addNotes:(userId,bookingId,text)=>({
    type:actions.ADD_NOTES,
    payload:{userId,bookingId,text}
  }),
  addNotesSuccess:()=>({
    type:actions.ADD_NOTES_SUCCESS
  })

};
export default actions;
