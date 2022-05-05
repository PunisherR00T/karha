import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCars } from "../Redux/Actions/carActions"
import Carinfocard from "./Carinfocard"
import NavCar from "./NavCar"

const Carlist = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCars())
    },[])
    const Cars = useSelector(state=> state.carReducer.Cars)
    const x = Cars.filter(car=> cartitle.toUpperCase().includes(inpt.toUpperCase())).map(Car => <Carinfocard key={Car._id} Car={Car}/> )
    const cartitle = `${Cars.brand} ${Cars.model} `
    const inpt = useSelector(state => state.carReducer.inpt)
    return (
        <div>
            <NavCar/>
            
        <section id="Section" style={{textAlign:"center"}}>
            
            {
                 x.length === 0 ? <img src='https://i.stack.imgur.com/6M513.png'/> : x
            }
            
        </section>
        </div>
    )
}

export default Carlist