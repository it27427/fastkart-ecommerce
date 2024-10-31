import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const types = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea',
};

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isButtonDisabled,
}) => {
  const renderInputsByComponentType = (getControlItem) => {
    let element = null;

    const value = formData[getControlItem.name] || '';

    switch (getControlItem.componentType) {
      case types.INPUT:
        element = (
          <Input
            type={getControlItem.type}
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      case types.SELECT:
        element = (
          <Select
            onValueChange={(selectedValue) =>
              setFormData({
                ...formData,
                [getControlItem.name]: selectedValue,
              })
            }
            value={value}
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((option, index) => (
                    <SelectItem
                      key={option.id || index}
                      id={option.id}
                      value={option.id}
                    >
                      {option.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case types.TEXTAREA:
        element = (
          <Textarea
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <Input
            type={getControlItem.type}
            name={getControlItem.name}
            id={getControlItem.name}
            placeholder={getControlItem.placeholder}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  };

  return (
    <form onSubmit={onSubmit} className='space-y-6'>
      <div className='space-y-6'>
        {formControls.map((controlItem, i) => (
          <div key={i} className='grid w-full gap-1.5'>
            <Label className='mb-1'>{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>

      <Button type='submit' className='mt-2 w-full' disabled={isButtonDisabled}>
        {buttonText || 'Submit'}
      </Button>
    </form>
  );
};

export default CommonForm;
