import React, {useEffect} from 'react';
import './App.scss';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import recipeforkLogo from './resource/recipeFork.png'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './form.scss'
import './explore.scss'

function Explore() {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    const [recipes, setRecipes] = React.useState<any[]>([]);

    useEffect(() => {
        setLoading(true);
        axios.get('https://recipefork-backend.herokuapp.com/api/recipes').then(
            res => {
                setLoading(false);
                setRecipes(res.data.data);
            }
        )
    }, []);

    function getInputValue(){
        var input = document.getElementById("field");
        let inputVal = (input as HTMLInputElement).value;
        console.log(inputVal);

        setSearchTerm(inputVal);
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return <div>
        <h2 className="center-align">Explore Recipes</h2>
        <div className="form">
            <div className="Bar">
                <input className="Bar" id="field" type="text" placeholder="Search.." onChange={getInputValue}></input>
                <i className="fas fa-search"></i>
            </div>
        </div>
        <div className="Gallery">
            {recipes.map(recipe => (
                    <div className='Tile'>
                        <p>{recipe.name}</p>
                    </div>
                ))}
        </div>
    </div>
}
export default Explore