import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div style={{ color: 'yellow' }}>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
