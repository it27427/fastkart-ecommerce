import { Label } from '../ui/label';
import { Input } from '../ui/input';

const types = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea'
}

const CommonForm = ({ formControls }) => {
  const renderInputsByComponentType = (getControlItem) => {
    let element = null;

    switch (getControlItem.componentType) {
      case types.INPUT:
        element = (
          <Input
            type={getControlItem.type}
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
          />
        )
      break;
    
      case types.SELECT:
        element = (
          <Input
            type={getControlItem.type}
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
          />
        )
      break;

      case types.TEXTAREA:
        element = (
          <Input
            type={getControlItem.type}
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
          />
        )
      break;

      default:
        element = (
          <Input
            type={getControlItem.type}
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
          />
        )
      break;
    }

    return element;
  };

  return (
    <form>
      <div>
        {
          formControls.map((controlItem, i) => (
            // const { label, type, name, placeholder, componentType } = controlItem;

            <div key={i} className='grid w-full gap-1.5'>
              <Label className='mb-1'>{controlItem.label}</Label>
              {
                renderInputsByComponentType(controlItem)
              }
            </div>
          ))
        }
      </div>
    </form>
  )
}

export default CommonForm;