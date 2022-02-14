import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Col } from 'react-bootstrap';
import Info from './Info';

export interface ICharacterInfo {
  name: string;
  height: string;
  hair_color: string;
}

const Character = () => {
  const [characters, setCharacters] = useState<ICharacterInfo[]>(
    [] as ICharacterInfo[]
  );
  const [modalData, setModalData] = useState<ICharacterInfo>(
    {} as ICharacterInfo
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();
  const [url, setUrl] = useState('https://swapi.dev/api/people');
  const handleClose = () => setModalOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url);
      const sortedData = data.results
      .sort(function(a: ICharacterInfo, b: ICharacterInfo) {
       if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
       if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
       return 0;
      })
      setCharacters(sortedData);
      setNext(data.next);
      setPrevious(data.previous);
    };
    fetchData();
  }, [url]);

  return (
    <>
      <h1>Characters</h1>
      <div>
        {characters.map((c, index) => (
          <Col key={index}>
            <Button
              onClick={() => {
                setModalData(c);
                setModalOpen(true);
              }}
            >
              {c.name}
            </Button>
          </Col>
        ))}
        <Info
          IsModalOpened={modalOpen}
          onCloseModal={handleClose}
          details={modalData}
        />
      </div>
      <div style={{ margin: '2rem' }}>
        {previous ? (
          <Button onClick={() => setUrl(previous)} variant='outlined'>
            Previous
          </Button>
        ) : null}
        {next ? (
          <Button onClick={() => setUrl(next)} variant='outlined'>
            Next
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default Character;
