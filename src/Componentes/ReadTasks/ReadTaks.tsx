import { collection, getDocs } from "firebase/firestore";
import { database } from "../../Firebase/FirebaseModule";
import { useState, useEffect } from "react";
import { FormType } from "../../TypesInterfaces";

const ReadTaks = () => {
  const [tasks, setTasks] = useState<FormType[] | null>(null);

  const RefColeccion = collection(database, "coleccion1");

  const ReadTasks = async () => {
    const datos = await getDocs(RefColeccion);
    setTasks(datos.docs.map((e) => ({ ...e.data(), id: e.id })) as FormType[]);
  };

  useEffect(() => {
    ReadTasks();
  }, []);

  return (
    <main>
      {tasks?.map((e) => (
        <div key={e?.id}>
          <h2>{e?.title}</h2>
          <b>{e?.hour}</b>
        </div>
      ))}
    </main>
  );
};

export default ReadTaks;
