import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameDetails } from '../redux/actions';

function GameDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { gameDetails, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchGameDetails(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!gameDetails) return null;

  return (
    <div className="game-detail-page">
      <h1>{gameDetails.name}</h1>
      <img src={gameDetails.background_image} alt={gameDetails.name} />
      <p>{gameDetails.description_raw}</p>
      {/* Display more details */}
    </div>
  );
}

export default GameDetailPage;