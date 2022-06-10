import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { observer } from 'mobx-react-lite';
import { MenuItem } from '@mui/material';
import { myBrand } from '../store/selectBrand.store';
import { toJS } from 'mobx';

const SelectModels = ({ title, register }: any ): JSX.Element => {
  const [value, setValue] = useState('');
  const [models, setModels] = useState([]);


  // обработчик значения селекта после выбора
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  useEffect(() => {
    setValue('');
    const obj = toJS(myBrand.autoDict);
    const arr = obj[myBrand.brand];
    console.log('arr', arr);
    setModels(arr);
  }, [myBrand.brand])

  return (
    <FormControl fullWidth>
      <InputLabel>{title}</InputLabel>
      <Select
        { ...register(
          "auto.model"
        )}
        sx={{ bgcolor: "background.paper" }}
        className="select"
        labelId="demo-simple-select-label"
        // id="demo-simple-select"
        value={value}
        label={title}
        defaultValue=""
        onChange={handleChange}
        variant="filled"
        disableUnderline
      >
        {models?.length && models.map((item: any) => (
          <MenuItem key={item.id} value={item}>{item.name}</MenuItem>
        ))}

      </Select>
    </FormControl>
  );
}

export default observer(SelectModels);