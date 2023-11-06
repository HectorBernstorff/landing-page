// ExpandableSection.js
import React, { useState } from 'react';
import './ExpandableSection.css'; // Create a CSS file for your component styles

function ExpandableSection({ title, content }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
        <div className='faq-wrapper' onClick={() => setExpanded(!expanded)}>
            <div  className='faq-title'>
                <h3>{title}</h3>

                <>
                    {expanded ? (


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    ) : (

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    )

                    }
                </>

            </div>

            <div className={`expandable-wrapper ${expanded ? 'visible' : ''}`}>

                <span id='expandabl' className='expandable'>{content}</span>

            </div>
        </div>
        <hr />
        </>
    );
}

export default ExpandableSection;
