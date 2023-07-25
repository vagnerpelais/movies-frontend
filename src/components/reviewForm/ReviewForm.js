import { Form, Button  } from 'react-bootstrap';

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>
            {labelText}
        </Form.Label>
        <Form.Control ref={revText} as='textarea' rows={3} defaultValue={defaultValue}/>
        <Button variant='outline-info' onClick={handleSubmit} style={{ marginTop: '10px'}}>Submit</Button>
      </Form.Group>
    </Form>
  )
}

export default ReviewForm
