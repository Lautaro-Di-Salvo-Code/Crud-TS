import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { FormType } from "../../../TypesInterfaces";
import { database } from "../../../Firebase/FirebaseModule";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash, FaPenAlt } from "react-icons/fa";
import "./styles.css";
import "../../../Styles/index.css";
const Form = () => {
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
      
    })
    .required();

  //   type FormData = yup.InferType<typeof schema>;

  const RefColeccion = collection(database, "primeraColeccion");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  const PostToDatabase = async (datos: FormType) => {
    await addDoc(RefColeccion, { ...datos });
  };

  return (
    <>
      {form === false ? (
        <div className="Div_btnForm">
          <button onClick={ActiveForm}>
            <FaPenAlt />
            <FaEyeSlash />
          </button>
        </div>
      ) : (
        <div className="Div_btnForm">
          <button onClick={DesactiveForm}>
            <FaPenAlt />

            <FaEye />
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit(PostToDatabase)}
        className={`${form && "OffNavbar"}`}
      >
        <input type="text" placeholder="titulo tarea" {...register("title")} />
        <b className="errorTitle">{errors?.title?.message}</b>
        <input
          type="datetime-local"
          placeholder="fecha y hora"
          {...register("fecha")}
        />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Form;
