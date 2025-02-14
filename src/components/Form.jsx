import { useState } from "react";
import { Form, Input, Button,  Textarea  } from "@heroui/react";

const FormContact = () => {
  const [action, setAction] = useState(null);
  return (
    <div className="w-full">
      <Form
        className="flex flex-col gap-10"
        validationBehavior="native"
        onReset={() => setAction("reset")}
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));

          setAction(`submit ${JSON.stringify(data)}`);
        }}
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
          name="email"
          placeholder="Describe el evento."
          type="email"
        />
        <div className="flex gap-2 w-full justify-center">
          <Button color="primary" type="submit" size="lg">
            Subir
          </Button>
          <Button type="reset" variant="flat" size="lg">
            Cancelar
          </Button>
        </div>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
    </div>
  );
};

export default FormContact;
