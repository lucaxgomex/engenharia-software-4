import Select, { Props } from "react-select";

const sampleOptions = [
  {
    label: "Prof. Duanny",
    options: [
      {
        label: "Engenharia de Software",
        value: "Engenharia de Software",
      },
    
    ],
  },
  {
    label: "Prof. Elon Musk",
    options: [
      {
        label: "Bussiness",
        value: "Bussiness",
      },
    
    ],
  },
  {
    label: "Prof. Rogerio",
    options: [
        { 
            label: "Algoritmos", 
            value: "Algoritmos" 
        }
    ],
  },
  {
    label: "Prof. Thiago",
    options: [
        { 
            label: "Banco de Dados", 
            value: "Banco de Dados" 
        }
    ],
  },
  {
    label: "Prof. Otílio",
    options: [
        { 
            label: "Dispositivos Móveis", 
            value: "Banco de Dispositivos Móveis" 
        }
    ],
  }
];

export const SelectComponent = ({
  value,
  options = sampleOptions,
  ...props
}: Props) => {
  return (
    <Select
      value={value}
      options={options}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      {...props}
    />
  );
};