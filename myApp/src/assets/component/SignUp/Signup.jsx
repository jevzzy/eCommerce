import styles from "./Signup.module.css"


function SignUp(){
    return (
   

     
        <div className={styles.form}>
       <form>
        <ul style={{
        
        }}>
        <li>
            <label>Name:
            <input type="text" 
            placeholder="firstname  lastname"
            />
            </label>
            </li>
            <li>
            <label>Email:
                {'   '}
            <input
            type="text"
             />
            </label>
          
            </li>
            <li>
            <label>Password:
            <input 
            type="text" />
            </label>
            </li>
            

        </ul>
        <button className={styles.btn} type="submit">Submit</button>
       </form>
        </div>
        
      
    )
}
                             
export default SignUp;