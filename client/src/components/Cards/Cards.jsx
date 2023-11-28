import './Cards.css';

function Cards({ img, title, content }) {

    return (

        <div className='cards'>
            <div className='inner-card'>
                <div>
                    <img src={img} alt="" />
                    <h2>{title}</h2>
                </div>
                <div>
                    <span>{content}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Cards;
