import Card from "../UI/Card"
import styles from "./AddUser.module.css"
import Button from "../UI/Button"
import {useState, Fragment, useRef} from 'react'
import ErrorModel from "../UI/ErrorModel"

const AddUser = (props) => {

  const nameInputRef =  useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()


  const addUserHandler = (event) =>{
    event.preventDefault()

    const enteredUserName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age"
      })
      return
    }
    if(+enteredAge < 1){
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)"
      })
      return
    }

    props.onAddUser(enteredUserName, enteredAge)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }
  
  const errorHandler = () =>{
    setError(null)
  }

  return (
    <Fragment>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input 
              id="username" 
              type="text" 
              ref={nameInputRef}
            />

            <label htmlFor='age'>Age (Years)</label>
            <input 
              id="age" 
              type="number" 
              ref={ageInputRef} 
            />
            <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Fragment>
  )
}

export default AddUser