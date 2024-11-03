export function generateDynamicLayout(layout: any, updates: any) {
  if (!layout || !updates) return null;
  // Deep copy the layout to avoid mutating the original
  // Will use lodash here
  const newLayout = JSON.parse(JSON.stringify(layout));

  // Loop through the content array to apply updates
  newLayout.content = newLayout.content.map((component) => {
    const update = updates[component.props.id];
    if (update) {
      // Merge the existing props with the updates, preserving `id`
      component.props = { ...component.props, ...update };
    }
    return component;
  });

  return newLayout;
}
