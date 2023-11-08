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
                    <p className='footer__text'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
Mirum est notare quam littera gothica. quam nunc putamus parum claram,</p>
                    <a href="https://github.com/GanievRystam" className='btn'>{t('Связаться')}</a>
                </div>
            </div>
        </footer>
    )
}