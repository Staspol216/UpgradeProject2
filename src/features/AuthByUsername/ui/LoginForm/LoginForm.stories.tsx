import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'shared/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: { username: 'asd', password: '111' },
})];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
    loginForm: { username: 'asd', password: '111', error: 'ERORR' },
})];

export const isLoading = Template.bind({});
isLoading.args = {};
isLoading.decorators = [StoreDecorator({
    loginForm: { username: 'asd', password: '111', isLoading: true },
})];
