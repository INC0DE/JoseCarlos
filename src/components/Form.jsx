import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, Button, Textarea } from "@heroui/react";

const FormContact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_eshq1mq", "template_i8nv48k", form.current, {
        publicKey: "uViG1V13b8DoGq2Qw",
      })
      .then(
        () => {
          setSuccess("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="w-full">
      <Form
        className="flex flex-col gap-10"
        ref={form}
        onSubmit={sendEmail}
        validationBehavior="native"
      >
        <Input
          isRequired
          variant="bordered"
          size="lg"
          errorMessage="Please enter a valid username"
          label="Nombre"
          name="username"
          placeholder="Escribe tu nombre."
          type="text"
        />
        <Input
          isRequired
          variant="bordered"
          size="lg"
          errorMessage="Please enter a valid username"
          label="Numero"
          name="number"
          placeholder="Escribe tu numeró."
          type="text"
        />
        <Input
          isRequired
          variant="bordered"
          size="lg"
          errorMessage="Please enter a valid username"
          label="Fecha"
          name="date"
          placeholder="Escribe la fecha del evento."
          type="text"
        />

        <Textarea
          isRequired
          variant="bordered"
          size="lg"
          errorMessage="Please enter a valid email"
          label="Lugar, descripción."
          name="description"
          placeholder="Describe el evento."
          type="email"
        />
        <div className="flex gap-2 w-full justify-center">
          <Button color="primary" type="submit">
            Subir
          </Button>
          <Button type="reset" variant="flat" value="Send">
            Cancelar
          </Button>
        </div>
      </Form>
      {success && (
        <p className="text-green justify-self-center mt-5">
          ¡Formulario enviado con éxito!
        </p>
      )}
    </div>
  );
};

export default FormContact;
