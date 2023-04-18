import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization form')} />
            {error && (<Text text={t('You entered an incorrect username or password')} theme={TextTheme.ERROR} />)}
            <Input
                autofocus
                placeholder={t('Enter username')}
                type="text"
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Enter password')}
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('Sign in')}
            </Button>
        </div>
    );
});
