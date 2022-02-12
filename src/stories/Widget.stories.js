import Widget from '../components/Widget';
import '../styles/variables.css';

export default {
    title: 'Components/Widget',
    component: Widget,
};

const Template = args => <Widget {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Work',
  current: 32,
  previous: 36,
  image: 'https://via.placeholder.com/79',
};
