import {Navbar,Button,Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavUser = () => {
    return (
        <div>
            <div id='navgloBal'>
            <Navbar bg="dark" variant="dark" id='productslist'>
                <div id='containernav'>
                    <Navbar.Brand as={Link} to='/' id='Shoopy'>NovaTeck</Navbar.Brand>
                        <aside id='searchBar'>
                            <Form.Control  size='80' type="search" placeholder='  Cherchez un produit , une marque ou une catégorie' />
                            <Button id='searchBtn' variant="secondary" size="sm">Rechercher</Button>
                        </aside>
                         <Button id='searchBtn' variant="secondary" size="sm">LOGIN</Button>
                </div>
             </Navbar>
            <Navbar id='productslist' bg="light" variant="light" style={{padding:'16px 0 16px 0'}}>
                <ul id='ullist'>
                <li>Informatique</li>
                <li>Auto et Moto</li>
                <li>Mode</li>
                <li>Téléphone et tablette</li>
                <li>Superette</li>
                <li>Maison et bureau</li>
                <li>Electronique</li>
                <li>Articles de sports</li>
                </ul>
                
            </Navbar>
        </div>
    </div>
    )
}

export default NavUser