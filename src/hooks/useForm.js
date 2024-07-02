import { useState } from "react"

export const useForm = ( initialForm = {} ) => {

  const [form, setForm] = useState( initialForm )


  const onChangeInput = ( { target } ) => {
    const { name , value } = target;
    
    setForm( ( currentForm ) => {
      return {
        ...currentForm,
        [ name] : value
      }
    })
  };


  return {
    ...form,
    form,
    setForm,
    onChangeInput

  }
}
