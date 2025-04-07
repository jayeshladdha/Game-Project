import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Pagination, Form, Button } from 'react-bootstrap';

function GameList() {
  const dispatch = useDispatch();
  const { games, loading, error, platformFilter, genreFilter, sortBy, search, page, totalPages } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchGames(platformFilter, genreFilter, sortBy, search, page));
  }, [dispatch, platformFilter, genreFilter, sortBy, search, page]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="game-list">
      <Form.Control type="text" placeholder="Search games..." onChange={(e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })} />
      <Row>
        {games.map((game) => (
          <Col key={game.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={game.background_image} />
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Link to={`/game/${game.id}`}><Button variant="primary">View Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination>
        <Pagination.Prev disabled={page === 1} onClick={() => dispatch({ type: 'SET_PAGE', payload: page - 1 })} />
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <Pagination.Item key={num} active={num === page} onClick={() => dispatch({ type: 'SET_PAGE', payload: num })}>
            {num}
          </Pagination.Item>
        ))}
        <Pagination.Next disabled={page === totalPages} onClick={() => dispatch({ type: 'SET_PAGE', payload: page + 1 })} />
      </Pagination>
    </div>
  );
}

export default GameList;