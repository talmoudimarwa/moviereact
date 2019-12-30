
import React from "react";
import { Modal, Button } from 'antd';
const Modall =({showModal,handleOk,handleCancel,handleTitle,handleImage,handleYear,handleRating,visible,addMovie  })=>{

    return (
      <div>
        <Button type="primary" onClick={showModal}>
          Add Movie
        </Button>
        <Modal
          title="Enter Film"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <input className="enterTitle"
            placeholder="Enter new title"
            onChange={handleTitle}
              value={addMovie.title} 
            />
          <br />
          <input className="enterTitle"
            placeholder="Enter new link"
            onChange={handleImage}
              value={addMovie.image} 
            />
          <br />
          <input className="enterTitle"
            placeholder="Enter new year"
            onChange={handleYear}
              value={addMovie.year}
             />
          <br />
          <input className="enterTitle"
            placeholder="Enter new rating"
            onChange={handleRating}
            value={addMovie.rating}
             />
        </Modal>
      </div>
    );
  }

export default Modall
