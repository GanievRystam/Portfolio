import { useTranslation } from 'react-i18next';
import './footer.scss';
import HeaderLogo from 'shared/assets/AdobeStock_107797389-2560x1200.jpg'
export default function Footer () {
    const {t} = useTranslation();
    return(
        <footer id='footer' style={{backgroundImage:`url(${HeaderLogo})`}}>
            <div className='container'>
                <div className='footer'>
                    <h2 className='footer__header'>{t('Заинтересованы в работе?')}</h2>
                    <p className='footer__text'>{t('контакт-пре')}</p>
                    <a href="https://github.com/GanievRystam" className='btn'>{t('Связаться')}</a>
                </div>
            </div>
        </footer>
    )
}