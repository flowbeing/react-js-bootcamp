import { useRef, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import Form from './components/Form.jsx';

import store from "./store/counterStore.js";
import { counterActions } from "./store/counterStore.js"



function App() {

  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // redux store related
  const counterDispatch = useDispatch();
  const counterValue = useSelector(state => state.total);
  

  // function handleStartRemovePlace(place) {
  //   setModalIsOpen(true);
  //   selectedPlace.current = place;
  // }

  // function handleStopRemovePlace() {
  //   setModalIsOpen(false);
  // }

  // function handleSelectPlace(selectedPlace) {
  //   setUserPlaces((prevPickedPlaces) => {
  //     if (!prevPickedPlaces) {
  //       prevPickedPlaces = [];
  //     }
  //     if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
  //       return prevPickedPlaces;
  //     }
  //     return [selectedPlace, ...prevPickedPlaces];
  //   });
  // }

  // const handleRemovePlace = useCallback(async function handleRemovePlace() {
  //   setUserPlaces((prevPickedPlaces) =>
  //     prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
  //   );

  //   setModalIsOpen(false);
  // }, []);

  

  return (
    <>
      <button onClick={() => {counterDispatch(counterActions.increase(10))}}>Increment Total: {counterValue}</button>
      
      {/* <Form></Form>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main> */}
    </>
  );
}

export default App;
