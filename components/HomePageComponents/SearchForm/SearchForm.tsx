"use client"
import './SearchForm.css';
import {Form} from 'react-bootstrap';
import {useState} from 'react';
export default function SearchForm(){
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [minimumPrice, setMinimumPrice] = useState<number>(0);
    const [maximumPrice, setMaximumPrice] = useState<number>(0);

    return<>
    <div className="homeform-container">
        <div className="homeform-heading">
            <h1>Banesa me qera</h1>
        </div>
        <Form>
            <Form.Group className="form-inputs">
              <select
              required
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              placeholder="Qyteti"
              >
            <option>Qyteti:</option>
            <option value="Prishtine">Prishtinë</option>
            <option value="Prizren">Prizren</option>
            <option value="Peje">Pejë</option>
            <option value="Gjakov">Gjakovë</option>
            <option value="Ferizaj">Ferizaj</option>
            <option value="Gjilan">Gjilan</option>
            <option value="Mitrovic">Mitrovic</option>
            </select>  
            </Form.Group>
            <Form.Group className="form-inputs">
            <input
            type='text'
            required
            value={district}
            onChange={(e)=>setDistrict(e.target.value)}
            placeholder="Shënoni lagjen:"
            />
            </Form.Group>
            <Form.Group className="form-double">
                <Form.Label>Cmimi minimal:</Form.Label>
            <input
            type='number'
            required
            value={minimumPrice}
            onChange={(e)=>setMinimumPrice(parseInt(e.target.value))}
            placeholder="Min"
            />
            </Form.Group>
            <Form.Group className="form-double">
            <Form.Label>Cmimi Maksimal:</Form.Label>
            <input
            type='number'
            required
            value={maximumPrice}
            onChange={(e)=>setMaximumPrice(parseInt(e.target.value))}
            placeholder="Max"
            />
            </Form.Group>
            <div className="homeform-btn">
                <button type="submit">Kërko</button>
            </div>
        </Form>

    </div>
    </>
}
