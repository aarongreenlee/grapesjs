module.exports = {
  run(ed) {
    if (
      !ed.Canvas.hasFocus() ||
      ed.getModel().isEditing() ||
      ed.Canvas.isInputFocused()
    )
      return;
    const toSelect = [];

    ed.getSelectedAll().forEach(component => {
      const next = component.parent();
      next && toSelect.push(next);
    });

    toSelect.length && ed.select(toSelect);
  }
};
