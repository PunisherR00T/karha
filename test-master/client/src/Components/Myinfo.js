import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/authActions"
import { Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState } from 'react'
import { handleShow, register } from "../Redux/Actions/authActions"
import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import Errors from "./Errors"
import { FcApproval, FcSettings } from "react-icons/fc";
const Myinfo = () => {
    
    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=>state.authReducer.user)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [show1, setShow1] = React.useState(false)
    const [checkshow,setCheckshow] = useState(false)
    const [checkpassword,setCheckpassword] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegister=(e)=>{
    e.preventDefault()
    dispatch(register({firstname,lastname,email,password,phone},navigate))
    }
    return (
        <div id='Addpost'>
            
            <FormControl>
                <FormLabel>Prénom</FormLabel>
                <Input ref={initialRef} placeholder='Prénom' onChange={(e)=>setFirstname(e.target.value)} value={user.firstname} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Nom</FormLabel>
                <Input onChange={(e)=>setLastname(e.target.value)} placeholder='Nom' value={user.lastname}/>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input onChange={(e)=>setEmail(e.target.value)} id='email' type='email' placeholder="Entrez votre email"  value={user.email}/>
                
                </FormControl>
              <FormControl mt={4}>
              <div id="changemdpflex">
                <FormLabel>Mot de Passe</FormLabel> 
                {password===checkpassword ? <FcSettings id="settingsicon"/> : null}
                </div>
                <InputGroup size='md'>
                    <Input onChange={(e)=>setPassword(e.target.value)} pr='4.5rem'type={show ? 'text' : 'password'} placeholder='Entrez un mot de passe' value={'aaaaaaaaaa'}/>
                    <InputRightElement width='4.5rem'>
                    
                    </InputRightElement>
                </InputGroup>
              </FormControl>
             
              <FormControl mt={4}>
                <FormLabel>Numéro</FormLabel>
                <InputGroup id="divnum">
                    <InputLeftAddon children='+216' />
                    <Input onChange={(e)=>setPhone(e.target.value)} type='tel' placeholder='Votre numéro de téléphone' maxLength="8" value={user.phone} />
                    
                </InputGroup>
              </FormControl>
              
              
              <Button colorScheme='blue' mr={3} onClick={(e)=>{handleRegister(e);}}>
                Valider
              </Button>
              <Button onClick={onClose} as={Link} to='/'>Annuler</Button>
        </div>
    )
}

export default Myinfo