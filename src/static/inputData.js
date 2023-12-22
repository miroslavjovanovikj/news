export const INPUT_DATA = {
  type: {
    type: "select",
    name: "select",
    elementType: "select",

    data: [
      { value: "sport", label: "sport" },
      { value: "viral", label: "viral" },
      { value: "health", label: "health" },
    ],
  },
  title: {
    type: "text",
    name: "title",
    elementType: "input",
  },
  file: {
    type: "file",
    name: "file",
    elementType: "input",
  },
  text: {
    type: "text",
    name: "text",
    elementType: "text-area",
  },
};
