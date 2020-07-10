import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    render() {
        console.log(this.context);
        return (
            <div>
                Select a language:
                    <i className="flag us" style={{ cursor: 'pointer', padding: '8px' }} onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag nl" style={{ cursor: 'pointer', padding: '8px' }} onClick={() => this.context.onLanguageChange('dutch')} />
            </div>
            );
    }
}

export default LanguageSelector;