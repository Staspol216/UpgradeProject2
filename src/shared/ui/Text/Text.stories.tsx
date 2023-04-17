import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title title tile',
    text: 'Description description description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title title tile',
    text: 'Description description description',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title title tile',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description description description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title title tile',
    text: 'Description description description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title title tile',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Description description description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
