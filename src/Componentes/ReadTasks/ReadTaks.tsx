import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { database } from "../../Firebase/FirebaseModule";
import { useState, useEffect } from "react";
import { FormType } from "../../TypesInterfaces";
import { MdDelete } from "react-icons/md";
import Loader from "../../Loader/Loader";
const ReadTaks = () => {
  
  
  const [tasks, setTasks] = useState<FormType[] | null>(null);
  const [loader, setloader] = useState(false)
  
  const RefColeccion = collection(database, "coleccion1");
  
  const ReadTasks = async () => {
    const datos = await getDocs(RefColeccion);
    setTasks(datos.docs.map((e) => ({ ...e.data(), id: e.id })) as FormType[]);
  };
  const deleteDocument = async ( id: string ) => {
    const collectioN = "coleccion1"
    try {
      await deleteDoc(doc(database, collectioN, id));

    } catch (error) {
      console.error("Error eliminando documento: ", error);
    }
  };

  useEffect(() => {
    setloader(true)
    ReadTasks();
    setloader(false)
  }, []);

  return (
    <main className="ShowTasks">
      {/* {
        loader  && !tasks ?   : null
      } */}
      {tasks? tasks.map((e) => (
        <div key={e?.id}>
          <h3>{e?.title}</h3>
          <b>{e?.hour}</b>
          <section className="btnDelete">
            <button onClick={()=> deleteDocument(e.id)}>
              <MdDelete />
            </button>
          </section>
        </div>
      )) 
      : <Loader/>
      }
    </main>
  );
};

export default ReadTaks;
