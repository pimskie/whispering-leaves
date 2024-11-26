export default function (plop) {
  // create your generators here
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "generators/templates/component.hbs",
      },
      {
        type: "add",
        path: "src/{{pascalCase name}}/{{pascalCase name}}.stories.ts",
        templateFile: "generators/templates/component.stories.hbs",
      },
      {
        type: "append",
        path: "package.json",
        pattern: /"exports": {(?<insertion>)/g,
        template:
          '    "./{{pascalCase name}}": "./src/{{pascalCase name}}/{{pascalCase name}}.tsx",',
      },
    ],
  });
}
