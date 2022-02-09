import Button from '../components/Button';
import '../styles/variables.css';


export default {
    title: 'Components/Button',
    component: Button,
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

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    backgroundColor: 'var(--darkBlue)',
    label: 'Press me',
    size: 'md',
    color: 'var(--desaturatedBlue)'
};

export const Active = Template.bind({});
Active.args = {
    backgroundColor: 'var(--darkBlue)',
    label: 'Press me',
    size: 'md',
};