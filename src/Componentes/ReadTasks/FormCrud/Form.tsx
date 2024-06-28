import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { FormType } from "../../../TypesInterfaces";
import { database } from "../../../Firebase/FirebaseModule";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash, FaPenAlt } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import * as yup from "yup";
import ReadTaks from "../ReadTaks";
import "../Styles/styles.css";
import "../../../Styles/index.css";
const Form = () => {
  const Tostada = () => toast.success("Bien!");
  const [form, setForm] = useState(false);

  const ActiveForm = () => {
    setForm(true);
  };
  const DesactiveForm = () => {
    setForm(false);
  };

  
  const schema = yup
  .object({
    title: yup.string().required(),
    hour: yup.string().required(),
    id: yup.string().required(),

  })
  .required();
  
  //   type FormData = yup.InferType<typeof schema>;
  
  const RefColeccion = collection(database, "coleccion1");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema),
  });
  
  const Hora = Date.now()
  const PostToDatabase = async (datos: FormType) => {
    await addDoc(RefColeccion, {
      title: datos.title,
      hour: datos.hour,
      id: Hora.toString()
    });
  };

  return (
    <>
      <Toaster richColors />
      {form === false ? (
        <div className="Div_btnForm">
          <button onClick={ActiveForm}>
            <FaPenAlt />
            <FaEye />
          </button>
        </div>
      ) : (
        <div className="Div_btnForm">
          <button onClick={DesactiveForm}>
            <FaPenAlt />

            <FaEyeSlash />
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit(PostToDatabase)}
        className={`${form === false && "OffNavbar"}`}
      >
        <input type="text" placeholder="titulo tarea" {...register("title")} />
        <b className="errorTitle">{errors?.title?.message && "Rellenar "}</b>
        <input type="time" placeholder="hora" {...register("hour")} />
        <input onClick={Tostada} type="submit" value="Enviar" />
      </form>
      <ReadTaks />
    </>
  );
};

export default Form;
