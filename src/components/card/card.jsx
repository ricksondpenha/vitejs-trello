import './card.css';

const Card = ({ id }) => {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>John Doe {id}</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default Card;
