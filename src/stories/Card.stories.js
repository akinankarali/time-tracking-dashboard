import Card from '../components/Card';
import '../styles/variables.css';


export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
        backgrounds: {
          default: "veryDarkBlue",
          values: [
            { name: "darkBlue", value: "var(--veryDarkBlue)" },
            { name: "white", value: "#ffffff" }
          ]
        }
      },
      argsTypes: {
        onClick: {
            action: "onClick"
        },
      },
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Jeremy Robson',
  textColor: "white",
  backgroundColor: 'var(--blue)',
};
