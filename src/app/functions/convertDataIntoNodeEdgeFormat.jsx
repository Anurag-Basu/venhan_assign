const createSubGroup = (node, parentId) => {
  const newSubGroup = node.map((sub, index) => {
    return {
      id: sub.name,
      data: { label: sub.name },
      icon: sub.icon,
      position: { x: 50, y: 50 * index },
      className: "light",
      parentNode: parentId,
      targetPosition: "left",
    };
  });
  return newSubGroup;
};

export function convertDataIntoNodeEdgeFormat(data) {
  const groups = data.groups;

  const node = groups.map((subGroup, index) => {
    const { icon, name, nodes } = subGroup;
    if (!nodes) {
      return {
        id: name,
        data: { label: name },
        icon,
        position: {
          x: index * 80,
          y: index + 1 === groups.length ? index * 200 : index * 100,
        },
        className: "light",
      };
    } else {
      let subGroup;
      const newGroup = [
        {
          id: name,
          data: { label: name },
          position: {
            x: 150,
            y: 250,
          },
          className: "light",
          icon,
          style: {
            color: "white",
            backgroundColor: "rgba(27, 79, 114 ,0.2)",
            height: 300,
            width: 800,
            margin: "20px",
          },
        },
      ];
      Object.keys(nodes).forEach((key, i) => {
        newGroup.push({
          id: key,
          data: { label: key },
          position: { x: i * 300, y: 80 },
          parentNode: name,
          extent: "parent",
          targetPosition: "left",
          style: {
            color: "white",

            backgroundColor: `rgba(${Math.floor(
              Math.random() * 300
            )}, 1, ${Math.floor(Math.random() * 300)}, 0.2`,
            height: !nodes[key].nodes ? 100 : 200,
            width: !nodes[key].nodes ? 100 : 200,
          },
        });
        if (nodes[key].nodes) {
          subGroup = createSubGroup(nodes[key].nodes, key);
          newGroup.push(...subGroup);
        }
      });
      return newGroup;
    }
  });
  return node.flat();
}
