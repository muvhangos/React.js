import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { FormControl, Select, InputLabel, MenuItem, Modal, Box, Typography } from '@mui/material'
import Flag from './flag.jpg'; 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#19cbea',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Quiz() {
    //setting initial field state
    const [flower, setFlower] = useState('');
    const [tree, setTree] = useState('');
    const [bird, setBird] = useState('');
    const [fish, setFish] = useState('');
    const [animal, setAnimal] = useState('');

    //setting initial error state
    const [flowerError, setFlowerError] = useState('');
    const [treeError, setTreeError] = useState('');
    const [birdError, setBirdError] = useState('');
    const [fishError, setFishError] = useState('');
    const [animalError, setAnimalError] = useState('');

    //modal state
    // const [showModal, setShowModal] = useState(false);

    //validation
    const handleSubmit = (e) => {
        e.preventDefault();
        //flower
        let correctFlower = false
        if (flower !== 2) {
            setFlowerError("Incorrect Flower");
        } else {
            correctFlower = true;
            setFlower('');
            setFlowerError('');
        }
        //tree
        let correctTree = false
        if (tree !== 1) {
            setTreeError("Incorrect Tree");
        } else {
            correctTree = true;
            setTree('');
            setTreeError('');
        }
        //bird
        let correctBird = false
        if (bird !== 3) {
            setBirdError("Incorrect Bird");
        } else {
            correctBird = true;
            setBird('');
            setBirdError('');
        }
        //fish
        let correctFish = false
        if (fish !== 2) {
            setFishError("Incorrect Fish");
        } else {
            correctFish = true;
            setFish('');
            setFishError('');
        }
        //animal
        let correctAnimal = false
        if (animal !== 3) {
            setAnimalError("Incorrect Animal");
        } else {
            correctAnimal = true;
            setAnimal('');
            setAnimalError('');
        }

        if(correctFlower && correctBird && correctAnimal && correctFish && correctTree) {
            // handleShowModal();
            alert("Well done!!! You know your National Symbols!");
        }
    };

    // const handleShowModal = () => {
    //     setShowModal(true);
    // };

    // const handleCloseModal = () => {
    //     setShowModal(false);
    // };

    return (
        <div>
            <h1>South African National Symbols</h1>
            <img 
            width={150}
            height={150}
            src={Flag}
            />
            <Form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ color: '#00794c' }}>National Flower</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={flower}
                        label="Flower"
                        onChange={e => setFlower(e.target.value)}
                    >
                        <MenuItem value={1}>Barberton Lily</MenuItem>
                        <MenuItem value={2}>Protea</MenuItem>
                        <MenuItem value={3}>Rose</MenuItem>
                    </Select>
                    {flowerError.length > 0 &&
                        <Alert variant='danger'>{flowerError}</Alert>
                    }
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ color: '#df3830' }}>National Tree</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tree}
                        label="Tree"
                        onChange={e => setTree(e.target.value)}
                    >
                        <MenuItem value={1}>Yellow-wood Tree</MenuItem>
                        <MenuItem value={2}>Bushwillow Tree</MenuItem>
                        <MenuItem value={3}>Marula Tree</MenuItem>
                    </Select>
                    {treeError.length > 0 &&
                        <Alert variant='danger'>{treeError}</Alert>
                    }
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ color: '#161616' }}>National Bird</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={bird}
                        label="Bird"
                        onChange={e => setBird(e.target.value)}
                    >
                        <MenuItem value={1}>African Fish Eagle</MenuItem>
                        <MenuItem value={2}>Barn Owl</MenuItem>
                        <MenuItem value={3}>Blue Crane</MenuItem>
                    </Select>
                    {birdError.length > 0 &&
                        <Alert variant='danger'>{birdError}</Alert>
                    }
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ color: '#fbb900' }}>National Fish</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={fish}
                        label="Fish"
                        onChange={e => setFish(e.target.value)}
                    >
                        <MenuItem value={1}>Thorntail Stingray</MenuItem>
                        <MenuItem value={2}>Galjoen</MenuItem>
                        <MenuItem value={3}>Ghost Skate</MenuItem>
                    </Select>
                    {fishError.length > 0 &&
                        <Alert variant='danger'>{fishError}</Alert>
                    }
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ color: '#012597' }}>National Animal</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={animal}
                        label="Animal"
                        onChange={e => setAnimal(e.target.value)}
                    >
                        <MenuItem value={1}>African Lion</MenuItem>
                        <MenuItem value={2}>Black Rhino</MenuItem>
                        <MenuItem value={3}>Springbok</MenuItem>
                    </Select>
                    {animalError.length > 0 &&
                        <Alert variant='danger'>{animalError}</Alert>
                    }
                </FormControl>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {/* <Modal
                open={showModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Well done!!! You know your National Symbols!
                    </Typography>
                </Box>
            </Modal> */}
        </div>
    );
}

export default Quiz;
