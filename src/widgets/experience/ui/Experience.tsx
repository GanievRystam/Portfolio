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
                        <h3 className="experience__header">UI/UX Designer <span className="experience__header--green">IronSketch</span></h3>
                        <span className="experience__date">2005-2008</span>
                        <label className="experience__label">Responsibility:</label>
                        <ul className="respons">
                            <li className="respons__item">Validate css</li>
                            <li className="respons__item">Validate js</li>
                        </ul>
                    </div>
                    <div className="experience__item">
                        <h3 className="experience__header">UI/UX Designer <span className="experience__header--green">IronSketch</span></h3>
                        <span className="experience__date">2005-2008</span>
                        <label className="experience__label">Responsibility:</label>
                        <ul className="respons">
                            <li className="respons__item">Validate css</li>
                            <li className="respons__item">Validate js</li>
                        </ul>
                    </div>
                    <div className="experience__item">
                        <h3 className="experience__header">UI/UX Designer <span className="experience__header--green">IronSketch</span></h3>
                        <span className="experience__date">2005-2008</span>
                        <label className="experience__label">Responsibility:</label>
                        <ul className="respons">
                            <li className="respons__item">Validate css</li>
                            <li className="respons__item">Validate js</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}