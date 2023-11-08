import { useTranslation } from 'react-i18next';
import './experience.scss';
import HeaderLogo from 'shared/assets/AdobeStock_107797389-2560x1200.jpg'
export default function Experience () {
    const {t} = useTranslation();
    return (
        <section className="experience" id='experiences'  style={{backgroundImage:`url(${HeaderLogo})`}}>
            <div className="container">
                <h2 className="what__header">{t('Опыт работы')}</h2>
                <div className="experience__wrap">
                    <div className="experience__item">
                        <h3 className="experience__header">{t('Фуллстэк Разработчик')} <span className="experience__header--green">DPPK</span></h3>
                        <span className="experience__date">2018-2020</span>
                        <label className="experience__label">{t('Ответственность')}:</label>
                        <ul className="respons">
                            <li className="respons__item">{t('Разрабатываю сайты')}</li>
                            <li className="respons__item">{t('Программирование на js')}</li>
                        </ul>
                    </div>
                    <div className="experience__item">
                        <h3 className="experience__header">{t('Фронтенд Разработчик')} <span className="experience__header--green">Freelance</span></h3>
                        <span className="experience__date">2021-2022</span>
                        <label className="experience__label">{t('Ответственность')}:</label>
                        <ul className="respons">
                            <li className="respons__item">{t('Разрабатываю сайты')}</li>
                            <li className="respons__item">{t('Разрабатываю Бэкенд на Node js')}</li>
                        </ul>
                    </div>
                    <div className="experience__item">
                        <h3 className="experience__header">{t('Фронтенд Разработчик')} <span className="experience__header--green">SPBTEACH</span></h3>
                        <span className="experience__date">2022 - {t('по настоящее время')}</span>
                        <label className="experience__label">{t('Ответственность')}:</label>
                        <ul className="respons">
                            <li className="respons__item">{t('Программирование на js')}</li>
                            <li className="respons__item">{t('Разработка React приложений')}</li>
                            <li className="respons__item">{t('Разрабатываю сайты')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}