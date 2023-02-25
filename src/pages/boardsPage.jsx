import { Link } from 'react-router-dom';
import Card from '../components/card/card.jsx';

function BoardsPage() {
  return (
    <>
      <div>Boards Page</div>
      {[1, 2, 3, 4, 5].map((id) => (
        <Link key={id} to={`/board/${id}`}>
          <Card id={id} />
        </Link>
      ))}
    </>
  );
}

export default BoardsPage;
