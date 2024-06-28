import {collection, getDocs} from 'firebase/firestore'
import { database } from '../../Firebase/FirebaseModule'
import { useState , useEffect} from 'react'
import { FormType } from '../../TypesInterfaces'

const ReadTaks = () => {

    const [tasks, setTasks] = useState<FormType[] | null>(null)

    const RefColeccion = collection(database, "primeraColeccion")



    const ReadTasks = async () => { 
        const datos = await getDocs(RefColeccion)
        setTasks(
            datos.docs.map(e => ({ ...document.data(), }))
        )
     }

     useEffect(()=> {
        ReadTasks()
     },[])

  return (
    <div>ReadTaks</div>
  )
}

export default ReadTaks