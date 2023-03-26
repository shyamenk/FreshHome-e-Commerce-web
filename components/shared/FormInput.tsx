import {ProductSchemaType} from 'pages/[admin]/products'

interface InputProps {
  label: string
  name: string
  type: string
  register: Function
  isSubmitting: boolean
}

const FormInput: React.FC<InputProps> = ({
  label,
  name,
  type,
  register,
  isSubmitting,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-bold text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={label}
        {...register(name)}
        disabled={isSubmitting}
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed "
      />
    </div>
  )
}

export default FormInput
