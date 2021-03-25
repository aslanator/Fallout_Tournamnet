import React from 'react';
import {InputText} from 'components/inputs/InputText';
import { Select, SelectOption } from 'components/inputs/Select';
import { FormContainer } from 'components/containers/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlayerCreateState, setCity, setFio } from './playerCreateSlice';

export const PlayerCreate = () => {
    const dispatch = useDispatch();

    const state = useSelector(selectPlayerCreateState);
    const cites: SelectOption[] = [{value: '', title: 'Выберите город'}, {value: '1', title: 'Санкт-Петербург'}, {value: '2', title: 'Москва'}]; //@todo Это надо потом с бека получать, либо сделать enum. Решу. 

    const onFioChange = (value: string) => {
        dispatch(setFio(value));
    };
    const onCityChange = (value: string) => {
        dispatch(setCity(value));
    };



    return (
        <FormContainer>
            <InputText placeholder="ФИО" onChange={onFioChange}  value={state.fio}/>
            <Select options={cites} value={state.city} onChange={onCityChange}/>
            {state.fio}, {state.city}
        </FormContainer>
    );
}