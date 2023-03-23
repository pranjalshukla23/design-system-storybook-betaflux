import {Button} from "../components/Button";

//define a folder
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'This is a button component for UI',
      },
    },
  },

  //define arguments which will be passed to template
  argTypes: {
    // label: {
    //   description: 'text to display',
    //   table: {
    //     type: { 
    //       summary: 'something short', 
    //       detail: 'something really really long' 
    //     },
    //   },
    //   control: {
    //     type: null,
    //   },
    // },
    label: {
      description: 'button label',
      table: {
        type: { 
          summary: 'submit', 
        
        },
      },
      control: {
        type: null,
      },
    },
    size: {
      description: 'prop to set the size of button',
      defaultValue: "md",
      options: ['sm', 'md', 'lg'],
      table: {
        type: { 
          summary: 'string', 
        },
      },
      control: {
        type: 'radio',
      },
    },
    color: {
      description: 'prop to set the color of button',
      defaultValue: "outlined",
      options: ['success', 'secondary', 'error', 'default'],
      defaultValue:"default",
      table: {
        type: { 
          summary: 'string', 
        },
      },
      control: {
        type: 'radio',
      },
    },
    variant: {
      description: 'select the type of button to render in the UI',
      defaultValue: "contained",
      options: ['text', 'contained', 'outlined'],
      defaultValue: "outlined",
      table: {
        type: { 
          summary: 'string', 
        },
      },
      control: {
        type: 'radio',
      },
    },
    style: {
      description: 'prop to style the component',
      defaultValue: {},
      table: {
        type: { 
          summary: 'object', 
        },
      },
    },
    onClick: {
      description: 'event to trigger on clicking the button',
      table: {
        type: { 
          summary: '((event?: MouseEvent<HTMLDivElement, MouseEvent>) => void)', 
        },
      },
    },

    onMouseOver: {
      description: 'event to trigger on hovering over the mouse',
      table: {
        type: { 
          summary: '((event?: MouseEvent<HTMLDivElement, MouseEvent>) => void)', 
        },
      },
    },
    onMouseOut: {
      description: 'event to trigger on taking the cursor out over the mouse',
      table: {
        type: { 
          summary: '((event?: MouseEvent<HTMLDivElement, MouseEvent>) => void)', 
        },
      },
    },
  },
};

//define a template for creating story
// you create a template using a component
//template can accept arguments which can be passed as props to component
const Template = (args) => <Button {...args} />;

//story #1 - button
//create story from a template
export const button = Template.bind({});


//customize source code 
button.parameters = {
  docs: {
    source: {
      code: 'import Button from design-system-betaflux/Button/Button',
      language: "javascript",
      type: "auto",
    },
  },
};